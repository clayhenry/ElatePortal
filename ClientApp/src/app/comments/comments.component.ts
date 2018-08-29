import { Component, OnInit } from '@angular/core';
import {BlogComponent} from "../blog/blog.component";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  inputs: ["post"]
})
export class CommentsComponent implements OnInit {

  post;
  blog : BlogComponent;

  constructor( private BlogComponent : BlogComponent) {

    this.blog = BlogComponent
  }

  ngOnInit() {
  }

}
