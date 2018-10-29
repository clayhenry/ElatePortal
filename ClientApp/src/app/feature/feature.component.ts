import {Component, Input, OnInit} from '@angular/core';
import {BlogComponent} from "../blog/blog.component";
import {IPosts} from "../../interfaces/posts";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  inputs : ["posts"]

})
export class FeatureComponent implements OnInit {
  posts : IPosts;
  blog;
  caruselItem;
  caruselcontainer;
  caruseleItems;
  curretIndex : number = 1;
  currentPos : number = 0;
  imageWidth = {'width.px': (window.innerWidth)};


  constructor(private BlogComponent : BlogComponent) {

    this.blog = this.BlogComponent;
  }

  ngOnInit() {
    this.caruselItem = document.getElementsByClassName("carusel")[0];
    this.caruselcontainer = this.caruselItem.querySelectorAll(".carusel-container")[0];

    this.runslideshow();

  }



  nav(direction){

    let caruseleItems =  this.caruselItem.querySelectorAll(".carusel-item");
    let left = 0;

    if (direction == "next"){

      if (this.curretIndex != caruseleItems.length) {


        left = (this.currentPos - 100);

        this.caruselItem.scrollBy({
          top: 0,
          left: window.innerWidth,
          behavior: 'smooth'
        });
        console.log(this.imageWidth);
       // this.caruselcontainer.style.left = left + "%";
        this.currentPos = left;
        this.curretIndex++;
      }

    } else {

      if ((this.curretIndex) != 1) {
        left = (this.currentPos + 100);

        this.caruselItem.scrollBy({
          top: 0,
          left: - window.innerWidth,
          behavior: 'smooth'
        });

        // this.caruselcontainer.style.left = left + "%";
        this.currentPos = left;
        this.curretIndex--;

      }
    }


  }


  runslideshow(){

    let index = 1;

    setInterval(()=>{

     let count = this.caruselItem.querySelectorAll(".carusel-item").length;

      console.log(index + " " + count)

      if (index != count) {
        this.caruselItem.scrollBy({
          top: 0,
          left: (window.innerWidth ),
          behavior: 'smooth'
        });
        index++;
      } else {

        this.caruselItem.scrollBy({
          top: 0,
          left: - (window.innerWidth *count),
          behavior: 'smooth'
        });
        index = 1;

      }


    }, 7000)

  }





}

