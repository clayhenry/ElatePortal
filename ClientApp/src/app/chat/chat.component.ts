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

  constructor(private http: HttpClient,  private _data: DataService,) { }


  chat =[];
  chatinput;
  users : IUsers;
  filteredList = [];
  currentSearchString = "";
  currentcharindex = 0;


  ngOnInit() {



    let connection = new HubConnectionBuilder().withUrl("message").build();

    connection.start().then(()=>console.log("connected"));

    connection.on('send',data =>{ this.chat.push(data)})

  }

  processChat(){

    let body =  {message: this.chatinput };
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {
      headers: headers
    };
    return this.http.post("/api/message",body, options ).subscribe(c => {console.log(c); this.chatinput = ''})

  }

  parseKey(event){

    //include only alphanumeric
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    //@ symbol
    if(event.keyCode == 50 || this.currentSearchString.length > 0){
      //start recording

      if(regex.test(str)){

        if(event.keyCode == 50){
          this.currentSearchString = " ";
        } else{
            this.currentSearchString += event.key;

            this._data.getAllUsersAjax().subscribe(u => {

              let searchString =  this.currentSearchString.trim().toLowerCase();

              console.log(searchString.toLowerCase())

                for(let i = 0; i< u.length; i++){
                  let user = u[i].name.toLowerCase()

                  if(user.includes(searchString)){
                    if(!this.filteredList.includes(u[i].name) ){
                        this.filteredList.push(u[i].name);
                    }
                  }

                }
            })
        }
      }

      //backspace
      if(event.keyCode == 8){
        this.currentSearchString =  this.currentSearchString.substring(0,this.currentSearchString.length -1);
        this.filteredList = [];
      }
      //spcebar
      if(event.keyCode == 32){

        //end recording
        this.currentSearchString = "";
        this.filteredList = [];
      }
    }
  }

}

