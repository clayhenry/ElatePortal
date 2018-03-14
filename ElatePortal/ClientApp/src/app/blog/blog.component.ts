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

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //gets url params
    this.route.params.subscribe(res=>this.currentId = res.id);
    //this._data.item.subscribe(res=> this.items = res);

  }

  ngOnInit() {
    //only on the first, initial load
    this.itemCount = this.items.length;
    //this.blogposts = this._data.getBlogItems();
    this._data.getBlogItemsAjax().subscribe(data => this.blogposts = data)
  }

  addItem(){

    this.items.push(this.listItem);
    this.itemCount = this.items.length;
    this.listItem ='';
  }

  removeItem(index){

    this.items.splice(index, 1);
  }

  sendMeHome(){

    this.router.navigate(['']);//navigates to route name

  }




}
