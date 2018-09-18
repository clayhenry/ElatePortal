import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HubConnection,HubConnectionBuilder  } from '@aspnet/signalr';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IUsers} from "../../interfaces/IUsers";
import {DataService} from "../data.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

@Pipe({ name: 'users' })
export class ChatComponent implements OnInit {

  constructor(private http: HttpClient,  private _data: DataService,) {

  }


  chat =[];
  chatinput;
  users : IUsers;
  filteredList = [];
  currentSearchString = "";
  currentChatBox;
  arrowindex = 0;
  listElements : HTMLCollectionOf<HTMLElement>;
  selectedListContent;
  atkey;

  ngOnInit() {

    let connection = new HubConnectionBuilder().withUrl("message").build();
    connection.start().then(()=>console.log("connected"));
    connection.on('send',data =>{ this.chat.push(data)})
    this.currentChatBox = document.getElementById("message");
  }



  processChat(){

    let currentTimestamp = new Date();
    var DateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    let message = "<div><img class='profile-image' src='/uploads/" + this._data.profile[0].image + "' ></div> <div>" + this._data.profile[0].name  + " " +  currentTimestamp.toLocaleDateString('en-US',DateOptions) + " " + currentTimestamp.toLocaleTimeString() + "<br>" + this.currentChatBox.innerHTML + "</div>"

    let body =  {message: message, type: "inhouse" };
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {
      headers: headers
    };
    return this.http.post("/api/message",body, options ).subscribe(c => {console.log(c); this.chatinput = ''})

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
            this.filteredList.push(u[i].name);
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
      console.log(e)

    }

  }



  updateMessageTextField(){

    let currentSearchString = "@" + this.currentSearchString.trim().toLowerCase();

    let newContent = "&nbsp;<span contentEditable=\"false\" data-id='1213132'><b>" + this.selectedListContent + "&nbsp;</b><span>";

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


}




