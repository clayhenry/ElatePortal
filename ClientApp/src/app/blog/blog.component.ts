import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {DataService} from "../data.service";

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
  tags = [];

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //gets url params
    this.route.params.subscribe(res=>this.currentId = res.id);



  }

  ngOnInit() {
    //only on the first, initial load
    this.itemCount = this.items.length;
    //this.blogposts = this._data.getBlogItems();
    this._data.getBlogItemsAjax().subscribe(d => {
      this._data.getAllTags().subscribe(c => {

        this.tags = c;
        this.blogposts = d
      })
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

  sendMeHome(){

    this.router.navigate(['']);//navigates to route name

  }

  getBlogPost(id : number){

    this._data.getBlogPostAjax(id).subscribe(data => this.blogpost = data)
    return this.blogpost

  }




}
