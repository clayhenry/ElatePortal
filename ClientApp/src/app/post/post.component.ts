import { Component, OnInit, Input,  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {DataService} from "../data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs: ['postid']

})


export class PostComponent implements OnChanges, OnInit {



  postid: number;
  blogpost = [];

  constructor(private location: Location, private route: ActivatedRoute, private _data: DataService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    let postid = changes.postid;
    this.postid = postid.currentValue;

    if (postid.currentValue) {
      this.getBlogPost(postid.currentValue)
    }

  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.getBlogPost(params.id);

    } );

  }


  getBlogPost(postid:number){

    this._data.getBlogPostAjax(postid).subscribe(c=> this.blogpost = c);

    console.log(postid);
  }

}
