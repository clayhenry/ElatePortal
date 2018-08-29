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
  currentId: number;
  items = [];
  blogposts;
  blogFeatures;
  comments = [];
  tags = [];
  isCommentOpen = [];
  commentForm = [];
  postid;
  commentsCount = {};
  reactionToggle = [];
  currentlyLikePost = [];
  canReactLike = [];
  test = 123;

  constructor(private location: Location, private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //gets url params
    this.route.params.subscribe(res=>this.currentId = res.id);

  }

  ngOnInit() {

    //only on the first, initial load
    this.itemCount = this.items.length;

    let feature = this._data.getBlogItemsAjax(1);

    this._data.getBlogItemsAjax(0).subscribe(d => {
      this._data.getAllTags().subscribe(c => {

        feature.subscribe( v =>{
          this.tags = c;
          this.blogposts = d;
          this.blogFeatures = v;
          this.setReactionsAggregate(d);


        for (let i = 0; i< d.length; i++){
          this.commentsCount[ d[i]["blogId"] ] = d[i]["commentsCount"]
        }

          for (let j = 0; j< v.length; j++){
            this.commentsCount[ v[j]["blogId"] ] = v[j]["commentsCount"]
          }

        console.log(this.commentsCount)

        });

      }

      )
    })
  }


  setReactionsAggregate(data: Array<any>){
    this.currentlyLikePost = [];

    let currentProfileId = this._data.profile[0].id;

    for (let i=0; i<data.length; i++){

      //defaults
      let love ={"count" : 0, "profiles": []} ;
      let like = {"count": 0, "profiles": []};
      this.blogposts[i]['reaction']  = {"Love" : love, "Like" : like} ;

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
              like.profiles[(like.count-1)] = ProfileName + ", " + UserTitle + " - " + data[i]["reactions"][j]["profile"]["id"];
          }

          this.blogposts[i]['reaction'] = {"Love" : love, "Like" : like} ;
        }

        }
      }

      //modiffies if the current user can react
      for (let k = 0 ; k< data[i]["reactions"].length; k++) {

        let userId = data[i]["reactions"][k].profileId;
        let name = data[i]["reactions"][k]['reactions'].name

        if (currentProfileId === userId){

          switch (name){

            case "Like" :
              this.canReactLike[ data[i].blogId ] = false;
              this.currentlyLikePost[i] = i;
            break;
          }
        }

      }
    }

  }

  toggleReactionProfiles( id : number){

    if (this.reactionToggle[id])
      this.reactionToggle[id] = false;
    else {
      this.reactionToggle[id] = true;
    }

  }

  updateReaction(index: number, blogId : number){

    let updateAction = "";

    if (this.currentlyLikePost[index] != index){
      updateAction = "add";

      this.blogposts[index]['reaction']["Like"]["count"]++;
      this.currentlyLikePost[index] = index;

    } else {

      //remove here
      updateAction = "delete";
      this.blogposts[index]['reaction']["Like"]["count"]--;
      this.currentlyLikePost[index] = null;
    }

    this._data.setReaction(2, blogId, updateAction).subscribe(data => {

    } )


  }

  filterByTag(tag: string){
    this._data.getBlogByTagAjax(tag).subscribe(d => {this.blogposts = d;
    this.setReactionsAggregate(d)
    });
  }

  getAllBlogs(){

    this._data.getBlogItemsAjax().subscribe(d => {this.blogposts = d;
      this.setReactionsAggregate(d)
    });
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

    this._data.setComment(comment, blogid).subscribe((data) => {

     this.getComents(blogid);
     this.commentsCount[blogid]++;
     this.commentForm.length = 0;

   });

  }

  submitReaction(blogid:number, name : string, updateAction : string){



  }

}
