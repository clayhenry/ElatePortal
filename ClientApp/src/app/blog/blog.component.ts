import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import { FormGroup, FormControl } from '@angular/forms';
import {Location} from '@angular/common';
import {forEach} from "@angular/router/src/utils/collection";



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
  LikeNames = "kkkkk"

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

        this.setReactionsAggregate(d);

        for (let i = 0; i< d.length; i++){
          this.commentsCount[ d[i]["blogId"] ] = d[i]["commentsCount"]
        }

      }

      )
    })


  }

  setReactionsAggregate(data: Array<any>){

    let love ={"count" : 0, "profiles": []} ;
    let like = {"count": 0, "profiles": []};

    for (let i=0; i<data.length; i++){
      if (data[i]["reactions"] != undefined){
      for (let j =0; j<data[i]["reactions"].length; j++){
        if (data[i]["reactions"][j] != undefined) {

          let Name = data[i]["reactions"][j]["reactions"]["name"];
          let ProfileName = data[i]["reactions"][j]["profile"]["name"];
          let UserTitle = data[i]["reactions"][j]["profile"]["title"];

          switch (Name) {
            case "Love" :
              love.count++;
              love.profiles[(like.count-1)] = ProfileName + ", " + UserTitle;
              break;
            case "Like" :
              like.count++;
              like.profiles[(like.count-1)] = ProfileName + ", " + UserTitle;
          }

          this.blogposts[i]['reaction'] = {"Love" : love, "Like" : like} ;
        }

        }
      }
    }
    console.log(this.blogposts)
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
