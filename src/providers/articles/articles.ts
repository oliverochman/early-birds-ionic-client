import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ArticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesProvider {

  response: Array<object> = [
    {
        "id":1,
        "header":"Help me clean my room",
        "subheader":"My room looks like shit",
        "byline":"CraftAcademy"
    },
    {
        "id":2,
        "header":"Life insurance",
        "subheader":"If I die, I want a lot of money",
        "byline":"CraftAcademy"
    }
]
  constructor(public http: HttpClient) {
   
  }
  all(): any { 
    return Observable.create(observer => {
      observer.next(this.response)
    })
  }
}
