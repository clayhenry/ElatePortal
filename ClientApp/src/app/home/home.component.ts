import {Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {


  constructor(){}

  ngOnInit() {

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let container =  <HTMLElement>document.querySelector(".el-contents")
    let leftpanel =  <HTMLElement>document.querySelector(".el-leftpanel")
    let rightpanel =  <HTMLElement>document.querySelector(".el-rightpanel")


    container.style.width = (windowWidth * 2)+"px";
    container.style.height = windowHeight+"px";
  }

}
