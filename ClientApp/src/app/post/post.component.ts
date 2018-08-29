import {Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {BlogComponent} from "../blog/blog.component";

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
  blog : BlogComponent;
  comments;

  constructor(private BlogComponent : BlogComponent, private location: Location, private route: ActivatedRoute, private _data: DataService, private router: Router) {
    this.blog = BlogComponent;
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

  back(event){

   if(event.target.id == "backgroundElement"){
     this.postActive = false;
      this.location.replaceState('Portal');
      document.getElementsByTagName("body")[0].style.overflow = "visible"
   }

  }

  getBlogPost(postid:number){

    this._data.getBlogPostAjax(postid).subscribe(c=> {

      this._data.getCommentsAjax(postid).subscribe( f=>{
        this.blogpost = c;
        this.comments = f;
        if (c.length > 0){
          this.postActive = true;
          document.getElementsByTagName("body")[0].style.overflow = "hidden"
        }

      })
    });

    console.log(postid);
  }

}
