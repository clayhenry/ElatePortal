import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import {IProfile} from "../interfaces/IProfile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';


  constructor(private _data: DataService){}

  ngOnInit() {
    console.log("authenticateme");
    this._data.getCurrentProfileAjax();
  }


}
