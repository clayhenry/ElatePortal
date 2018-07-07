import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postid: number = 4;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe( params => {console.log(params) ; this.postid = params.id });
  }

  ngOnInit() {
  }

}
