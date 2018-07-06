import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import { FormGroup, FormControl } from '@angular/forms';

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
  commentsCount = {};

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //gets url params
    this.route.params.subscribe(res=>this.currentId = res.id);
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
    console.log(params.get('username'));
    this.username = params.get('username');
  });
    
    //only on the first, initial load
    this.itemCount = this.items.length;
    //this.blogposts = this._data.getBlogItems();
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

  addItem(){

    this.items.push(this.listItem);
    this.itemCount = this.items.length;
    this.listItem ='';
  }

  removeItem(index){

    this.items.splice(index, 1);
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

    this._data.getBlogPostAjax(id).subscribe(data =>
    {
      this.blogpost = data

      console.log(data)

    });
    return this.blogpost

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
    this._data.setComment(comment, blogid).subscribe((data) => {

     this.getComents(blogid);
     this.commentsCount[blogid]++;
     this.commentForm.length = 0;

   });



  }




}
