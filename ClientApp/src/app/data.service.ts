import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient} from "@angular/common/http";
import {IPosts} from "../interfaces/posts";
import {Observable} from "rxjs/Observable";
import {IComments} from "../interfaces/comments";

@Injectable()
export class DataService {


  private _url = "/api/Blogs";

  constructor( private http: HttpClient ) { }

  getBlogItemsAjax() : Observable<IPosts[]>{

    return this.http.get<IPosts[]>(this._url);
  }

  getBlogByTagAjax(filter:string) : Observable<IPosts[]>{

    return this.http.get<IPosts[]>(this._url + "?tag=" + filter);
  }

  getBlogPostAjax(id: number) : Observable<Array<any>>{

    return  this.http.get<Array<any>>(this._url + "/" + id);
  }

  getAllTags() : Observable<Array<any>> {
    return  this.http.get<Array<any>>(this._url + "/" + "Tags");
  }

  getCommentsAjax(blogid: number) :Observable<IComments[]>{

    return  this.http.get<Array<any>>(this._url + "/" + "Comments/" + blogid);
  }

  getBlogItems(){

    return [
      {"title": "hers the title", "content": "content for first enty" },
      {"title": "another enty", "content": "content for second enty" },

    ]
  }

}
