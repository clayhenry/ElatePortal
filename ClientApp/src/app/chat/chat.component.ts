import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HubConnection,HubConnectionBuilder  } from '@aspnet/signalr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IUsers} from "../../interfaces/IUsers";
import {DataService} from "../data.service";
import {IChat} from "../../interfaces/IChat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

@Pipe({ name: 'users'})
@Pipe({ name: 'noSanitize' })
export class ChatComponent implements OnInit {

  constructor(private http: HttpClient,  private _data: DataService, public domSanitizer: DomSanitizer) {

  }


  chat = [];
  chatinput;
  users : IUsers;
  filteredList = [];
  currentSearchString = "";
  currentChatBox;
  arrowindex = 0;
  listElements : HTMLCollectionOf<HTMLElement>;
  selectedListContent;
  atkey;
  messageUsersIds = [];

  directNotifications = 0;

  ngOnInit() {

    let connection = new HubConnectionBuilder().withUrl("message").build();
    connection.start().then(()=>console.log("connected"));
    connection.on('send',data =>{
      this.messageUsersIds = [];
      this.chat.push(data)

      console.log(data)
      this.alertOnMentionMessage(data["ids"]);
    })

    this._data.getMessages().subscribe(c => {

      for(let i =0; i < c.length; i++){

        let chat : IChat = new IChat();
          chat.image = c[i]['profile']['image'];
          chat.name =  c[i]['profile']['name']
          chat.message =  c[i]['message'],
          chat.date =  c[i]['date'],
        this.chat.unshift(chat);
      }
    })

    this.currentChatBox = document.getElementById("message");
  }

  alertOnMentionMessage(ids){

    let c = this._data.profile
    let profileId =  c[0].internalId;

    for(let i =0; i < ids.length; i++){

      if(profileId == ids[i]){
        this.browserNotification();
        this.directNotifications ++;

        //console.log("match!!" + ids[i] + " " + profileId)
      }
    }
  }


  processChat(){

    //var DateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let currentTimestamp = new Date().toLocaleTimeString();

    this.getUserIds(this.currentChatBox);

    let message =  {
      message: this.currentChatBox.innerHTML,
      name:this._data.profile[0].name,
      image: this._data.profile[0].image,
      date :  currentTimestamp,
      ids : this.messageUsersIds
    };
    //let message = "<div><img class='profile-image' src='/uploads/" + this._data.profile[0].image + "' ></div> <div>" + this._data.profile[0].name  + " " +   + " " + currentTimestamp.toLocaleTimeString() + "<br>" + this.currentChatBox.innerHTML + "</div>"

    let body = message;
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {
      headers: headers
    };
    return this.http.post("/api/message",body, options ).subscribe(c => {
      this.currentChatBox.innerHTML= ''

    })

  }

  checkforCharacter(event){

    this.atkey = (event.key == "@") ? "@" : "ddd";

  }

  parseKey(event){
    this.filteredList = [];

    //include only alphanumeric
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    //@ symbol

    if(this.atkey == "@" || this.currentSearchString.length > 0){
      //start recording
      this.UpdateUserList()
      if(regex.test(str)){

          //we dont want to carry @ symbol
        if(this.atkey == "@"){
          this.currentSearchString = " ";

        } else{
            this.currentSearchString += event.key;
        }
      }

      //backspace
      if(event.keyCode == 8){
        this.currentSearchString =  this.currentSearchString.substring(0,this.currentSearchString.length -1);

        if(this.currentSearchString.length == 0){
          this.filteredList = [];
          this.currentSearchString = "";

        } else {
          this.UpdateUserList()
        }

      }
      //spcebar
      if(event.keyCode == 32){
        this.updateArrowKeys(event);
        //end recording
        this.currentSearchString = "";
        this.filteredList = [];
      }
    }
  }


 UpdateUserList(){

    this._data.getAllUsersAjax().subscribe(u => {

      let searchString = "";
      this.filteredList = [];
      searchString =  this.currentSearchString.trim().toLowerCase();

      for(let i = 0; i< u.length; i++){
        let user = u[i].name.toLowerCase();

        if(user.indexOf(searchString) != -1){

          //console.log(searchString + " " + user.indexOf(searchString) + " " +u[i].name);
            this.filteredList.push({name: u[i].name, id : u[i].internalId});
        }
      }
    })

  }

//first action
  tabAction(event){

    this.arrowindex = 0;
    this.atkey = "";

    if(event.keyCode == 9){
      this.selectedListContent = this.filteredList[0];
      this.listElements  = document.querySelectorAll(".nameslist li") as HTMLCollectionOf<HTMLElement>;

      if( this.listElements.length != 0){
        this.listElements[0].classList.add("active");
      }
    }

  }


  //on enter
  tabEnter(event, content){

    event.preventDefault();
    this.updateArrowKeys(event);

    if(event.key =="Enter"){

      this.updateMessageTextField();

    }
  }


  //arrows up and down
  updateArrowKeys(event){

    let currentList = this.filteredList;

    if(this.listElements){
      for(let i = 0; i< this.listElements.length; i++){
        this.listElements[i].classList.remove("active");
      }
    }

    if(event.key == "ArrowDown"){
      if(this.arrowindex < (this.listElements.length -1 )){
        this.arrowindex ++;
      }
    }

    if(event.key == "ArrowUp"){
      if(this.arrowindex > 0){
        this.arrowindex --;

      }
    }
    try {
      if(this.listElements.length > 0){

        this.selectedListContent = this.filteredList[this.arrowindex];

        let index = this.arrowindex ? this.arrowindex : 0;

          this.listElements[index].classList.add("active");
        }

    }  catch (e) {

    }

  }



  updateMessageTextField(){

    let currentSearchString = "@" + this.currentSearchString.trim().toLowerCase();

    let newContent = "<div data-user='"+this.selectedListContent.id+"' style='display: inline' ><span contentEditable=\"false\"><b>&nbsp;" + this.selectedListContent.name + "&nbsp;</b><span></div>";

    let currentChatString = this.currentChatBox.innerHTML;
    this.currentChatBox.innerHTML = currentChatString.replace(currentSearchString, newContent);

    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(this.currentChatBox);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    this.currentChatBox.focus();
    range.detach(); // optimization

    this.currentSearchString = "";
    this.filteredList = [];
  }

  //regular mouse click

  slectClick(value, index){

    this.listElements  = document.querySelectorAll(".nameslist li") as HTMLCollectionOf<HTMLElement>;
    this.listElements[index].classList.add("active");
    this.selectedListContent = this.filteredList[index];
    this.updateMessageTextField()
  }


  getUserIds(message) {

    let g = message.getElementsByTagName("Div");

      for (let i = 0; i < g.length ; i++){

        let users = g[i].dataset.user.trim();
        this.messageUsersIds.push(users);
      }

  }


  browserNotification(){

    Notification.requestPermission().then(function(result) {
      console.log(result);

      let options = {
        body: "test mesage"
      };
      let n = new Notification("just testing", options);
    });

  }



}





