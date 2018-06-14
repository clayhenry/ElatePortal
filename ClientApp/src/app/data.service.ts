import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient} from "@angular/common/http";
import {IPosts} from "../interfaces/posts";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {


  private _url = "/api/Blogs";

  constructor( private http: HttpClient ) { }

  getBlogItemsAjax() : Observable<IPosts[]>{

    return this.http.get<IPosts[]>(this._url);
  }

  getBlogPostAjax(id: number) : Observable<Array<any>>{

    return  this.http.get<Array<any>>(this._url + "/" + id);
  }

  getAllTags() : Observable<Array<any>> {
    return  this.http.get<Array<any>>(this._url + "/" + "Tags");
  }

  getBlogItems(){

    return [
      {"title": "hers the title", "content": "content for first enty" },
      {"title": "another enty", "content": "content for second enty" },

    ]
  }

}
