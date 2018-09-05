import { Component, OnInit } from '@angular/core';
import { HubConnection,HubConnectionBuilder  } from '@aspnet/signalr';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private http: HttpClient) { }


  chat =[];
  chatinput;

  ngOnInit() {


    let connection = new HubConnectionBuilder().withUrl("message").build();

    connection.start().then(()=>console.log("connected"));

    connection.on('send',data =>{ console.log(data.message); this.chat.push(data.message)})

  }

  processChat(){
    let body =  {"message" : this.chatinput};
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {
      headers: headers
    };
    return this.http.post("/api/message",body, options ).subscribe(c => {})

  }

}

