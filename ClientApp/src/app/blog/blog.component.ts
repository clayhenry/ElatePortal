import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import { FormGroup, FormControl } from '@angular/forms';
import {Location} from '@angular/common';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  itemCount: number;
  btn: string = "Add an item";
  listItem: string = "my first list itmem";
  currentId: number;
  items = [];
  blogposts = [];
  blogpost = [];
  comments = [];
  tags = [];
  isCommentOpen = [];
  commentForm = [];
  postid;
  commentsCount = {};

  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //gets url params
    this.route.params.subscribe(res=>this.currentId = res.id);
  }

  ngOnInit() {

    //only on the first, initial load
    this.itemCount = this.items.length;

    this._data.getBlogItemsAjax().subscribe(d => {
      this._data.getAllTags().subscribe(c => {

        this.tags = c;
        this.blogposts = d;

        for (let i = 0; i< d.length; i++){
          this.commentsCount[ d[i]["blogId"] ] = d[i]["commentsCount"]
        }

      }

      )
    })


  }


  filterByTag(tag: string){
    this._data.getBlogByTagAjax(tag).subscribe(d => this.blogposts = d);

  }

  getAllBlogs(){

    this._data.getBlogItemsAjax().subscribe(d =>
    {
      this.blogposts = d

    }
      );
  }

  sendMeHome(){

    this.router.navigate(['']);//navigates to route name

  }

  getBlogPost(id : number){

    this.location.replaceState('Portal/post/'+ id);

    //sets component parameter
    this.postid = id;

    //change it back to engage another change action
    setTimeout(()=> {
      this.postid = 0;
    }, 0);

   // document.getElementsByTagName("body")[0].style.overflow = "hidden"

  }

  getComents(blogid:number){
    //todo: revisit this, as I don't like how the array keys are created

    this._data.getCommentsAjax(blogid).subscribe(data => {this.comments[blogid] = data;
    this.isCommentOpen[blogid] = blogid;


    } );

    return true;

  }

  submitComment(blogid:number){
    let comment = this.commentForm[blogid];
    console.log(comment);

    this._data.setComment(comment, blogid).subscribe((data) => {

     this.getComents(blogid);
     this.commentsCount[blogid]++;
     this.commentForm.length = 0;

   });



  }

}
