import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient} from "@angular/common/http";
import {IPosts} from "../interfaces/posts";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {


  private _url = "http://localhost:5000/api/Blogs";
  private list = new BehaviorSubject<any>(["list item 1", "list item 2"]);
  item = this.list.asObservable();

  constructor( private http: HttpClient ) { }


  changeItem(item){

    this.list.next(item);
  }

  getBlogItemsAjax() : Observable<IPosts[]>{
  //getBlogItemsAjax() : Observable<Array<any>>{

    return this.http.get<IPosts[]>(this._url);
  }
  getBlogItems(){

    return [
      {"title": "hers the title", "content": "content for first enty" },
      {"title": "another enty", "content": "content for second enty" },

    ]
  }

}
