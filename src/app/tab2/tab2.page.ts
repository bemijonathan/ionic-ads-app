import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

	src:any

	disable = false

	constructor( private http: HttpClient) {}
	  getImage(){
	  	return this.http.get('https://picsum.photos/200/300')
	  }
	  changeImage(){
	  	this.disable = true
	  	this.getImage().subscribe(data => { 
  			console.log(data)
  		}, Err => {
  			this.src = Err.url
  			this.disable = false
  		})
	  }
  	ngOnInit(){
  		this.getImage().subscribe(data => { 
  			console.log(data)
  		}, Err => {
  			this.src = Err.url
  		})
  	}
}
