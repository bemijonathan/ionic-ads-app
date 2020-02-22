import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {
	counter = 1
	images = []
    constructor(private http: HttpClient ) { }
    getImages(counter){
    	console.log(counter)
  	 	return this.http.get('https://picsum.photos/v2/list?page='+ counter +'&limit=7')
  	}
}