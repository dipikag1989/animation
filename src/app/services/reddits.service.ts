import { Injectable } from '@angular/core' ;
import { Http } from '@angular/http';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';


@Injectable()
 export class RedditService {
 	
 	baseurl:String;

 	constructor(public http:Http) {
 		// this.http=http;
 		this.baseurl='https://www.reddit.com/r';
 		// code...
 	}

 	getPosts(cat,limit){
 		return this.http.get(this.baseurl+'/'+cat+'/top.json?limit='+limit)
 		.map(res => res.json())
 	}
 }