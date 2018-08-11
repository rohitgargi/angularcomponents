import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/observable';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class dataService {
  constructor(private url: string,private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.errorHandler);
  };



  create(req){
    return this.http.post(this.url,req)
    .map(response => response.json())
    .catch(this.errorHandler);
  }

  update(resource){
    let req = JSON.stringify({"isRead": true});
    //we can use PUT (if whole object need to send to server, PATCH is only few property need to send)
    return this.http.patch(this.url+'/'+resource.id,req)
    .map(response => response.json())
    .catch(this.errorHandler);
  }

  delete(id){
    return this.http.delete(this.url+'/'+id)
    .map(response => response.json())
    .catch(this.errorHandler);

  }

    private errorHandler(error: Response){
      if(error.status === 404)
        return Observable.throw(new NotFoundError());
       if(error.status === 400)
        return Observable.throw(new BadInputError);

        return Observable.throw(new AppError(error));
    }


}
