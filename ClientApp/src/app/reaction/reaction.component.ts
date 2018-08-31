import { Component, OnInit } from '@angular/core';
import {BlogComponent} from "../blog/blog.component";

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.css'],
  inputs: ['post', 'index']
})
export class ReactionComponent implements OnInit {

  blog;
  post;
  index;
  currentPost;

  constructor(private BlogComponent : BlogComponent) {

    this.blog = this.BlogComponent

  }

  ngOnInit() {



  }

}
