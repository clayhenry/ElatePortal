import {ComponentDefFeature} from "@angular/core/src/render3/definition_interfaces";

export interface IPosts {

  BlogId: number,
  title: number,
  userTitle : string,
  name : string,
      content : string
      preview : string
  coverImage : string
  comments : Array<any>
  status : string
  departmentsBlog : Array<any>
  feature : number



}


// export class IPosts {
//
//   title: number;
//   content : string;
//
// }
