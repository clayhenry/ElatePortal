import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IPosts} from "../interfaces/posts";
import {Observable} from "rxjs";
import {IComments} from "../interfaces/comments";
import {IProfile} from "../interfaces/IProfile";
import {IUsers} from "../interfaces/IUsers";
import {IChat} from "../interfaces/IChat";

@Injectable()
export class DataService {


  private _url = "/api/Blogs";
  public profile :IProfile;


  constructor( private http: HttpClient ) { }

  directNotifications = 0;

      getBlogItemsAjax(feature = 0) : Observable<IPosts[]>{

    return this.http.get<IPosts[]>(this._url + "?feature=" + feature);
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

  getCurrentProfileAjax() : Observable<IProfile> {

    return this.http.get<IProfile>("/api/Profile/");

  }

  getAllUsersAjax(){

    return this.http.get<Array<any>>("/api/message/users" );

  }

  setComment(comment: string, blogId : number ){

    let body = JSON.stringify(comment)
    //let body = "comment=" + comment;
    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {

      headers: headers
    };
    return  this.http.post("/api/Blogs/create/comment/" + blogId , body,options )
  }


  setReaction(reactionId : number,  blogId : number, updateAction : string){

    let headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    let options =  {
      headers: headers
    };
    return  this.http.post("/api/Reaction/Update/" + updateAction + "/" +reactionId + "/"+ blogId, options )


  }

  getMessages (){

    return this.http.get<Array<IChat>>("/api/messages" );
  }

  updateDirectNotifications(){

        this.directNotifications ++;
  }


  getBlogItems(){

    return [
      {"title": "hers the title", "content": "content for first enty" },
      {"title": "another enty", "content": "content for second enty" },

    ]
  }

}
