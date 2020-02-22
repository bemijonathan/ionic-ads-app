import { Component, OnInit } from '@angular/core';
import { Tab1Service } from './tab1.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit{
	images:any
	counter = 1

  constructor( private tab: Tab1Service ) {
		
  }
  loadData(event){
  	setTimeout(() => {
      console.log('Done');
   		this.counter ++
   		this.tab.getImages(this.counter).subscribe( data => {
   			// console.log({...data})
   			// debugger
   			this.tab.images.push(...data)
   			event.target.complete();
   		})

      if (this.tab.images.length == 1000) {
        event.target.disabled = true;
      }
      
    }, 1500);
  }

  ngOnInit() {
  	this.tab.getImages(this.counter).subscribe( data => {
  		// console.log(data)
  		 this.tab.images.push(...data)
  		 console.log(this.tab.images)
  	}
  	)
  }
}
