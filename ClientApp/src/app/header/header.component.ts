import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  profile;
  clicked = true;

  constructor(  public _data: DataService,) { }

  ngOnInit() {

    this._data.getCurrentProfileAjax().subscribe(d => {
      this._data.profile = d;
      this.setProfile()

    });

  }

  setProfile(){
      this.profile = this._data.profile

  }

  scrollToMessages(){

    let container =  document.getElementsByTagName("body")[0];
    let direction = 0;

    if(this.clicked){
      direction = 2000;
      this.clicked = false;

    } else {
      direction = -2000;
      this.clicked = true;
    }


    container.scrollBy({
      top: 0,
      left: direction,
      behavior: 'smooth'
    });

  }





}
