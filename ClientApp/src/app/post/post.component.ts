import {Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs: ['postid']

})


export class PostComponent implements OnChanges, OnInit {



  postid: number;
  blogpost = [];
  postActive = false;

  constructor(private location: Location, private route: ActivatedRoute, private _data: DataService, private router: Router) {

  }

  ngOnChanges(changes: SimpleChanges) {
    let postid = changes.postid;
    this.postid = postid.currentValue;

    console.log("change" +postid )

    if (postid.currentValue) {
      this.getBlogPost(postid.currentValue)
    }

  }
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getBlogPost(params.id);
    } );

  }

  back(){
   this.postActive = false;
    this.location.replaceState('Portal');
    document.getElementsByTagName("body")[0].style.overflow = "visible"

  }


  getBlogPost(postid:number){

    this._data.getBlogPostAjax(postid).subscribe(c=> {
      this.blogpost = c; if (c.length > 0){  this.postActive = true;
        document.getElementsByTagName("body")[0].style.overflow = "hidden"
      }

    });

    console.log(postid);
  }

}
