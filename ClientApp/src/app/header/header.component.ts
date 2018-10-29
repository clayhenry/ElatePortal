import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  profile;

  constructor(  public _data: DataService,) { }

  ngOnInit() {

    this._data.getCurrentProfileAjax().subscribe(d => {
      this._data.profile = d;
      this.setProfile()

    });

  }

  setProfile(){

      this.profile = this._data.profile

    console.log(this.profile)


  }





}
