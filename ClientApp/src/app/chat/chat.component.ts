import { Component, OnInit } from '@angular/core';
import { HubConnection,HubConnectionBuilder  } from '@aspnet/signalr';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    let connection = new HubConnectionBuilder().withUrl("message").build();

    connection.on('send',data =>{ console.log(data)})

    connection.start().then(()=>console.log("connected"))

  }

}
