import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from "./data.service";
import {IProfile} from "../interfaces/IProfile";
import {enableProdMode} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';


  constructor(private _data: DataService){}

  ngOnInit() {

  }


}
