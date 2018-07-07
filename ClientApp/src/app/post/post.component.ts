import { Component, OnInit, Input,  OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs: ['postid']

})


export class PostComponent implements OnChanges, OnInit {



  postid: number;

  constructor(private location: Location, private route: ActivatedRoute) {



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

    console.log(postid);
  }

}
