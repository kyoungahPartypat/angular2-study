import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { TwiceYoutube } from '../model/TwiceYoutube';
import { YOUTUBE } from '../model/mock-youtube';

@Injectable()
class VideoService {
  private url = "http://sigyeiswatch.com/twice/upload";
  constructor (private http: Http) {}

  static getLists(){
    return ['단체', '나연', '정연', '지효', '다현', '채영', '모모', '사나', '미나', '쯔위'];
  };

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  getVideos(): Promise<TwiceYoutube[]> {
    return Promise.resolve(YOUTUBE);
  };

  addVideos(member:string, title:string, url:string) {
    let body = JSON.stringify({member:member, title:title, url:url});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers,  method: "post" });

    return this.http.post(this.url, body, options).toPromise().then(this.extractData).catch(this.handleError);
  };
}

export { VideoService }
