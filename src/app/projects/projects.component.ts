import { Component, OnInit } from '@angular/core';
import * as Immutable from 'immutable';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  a = "https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg";
  b = "https://404store.com/2018/05/07/Birds-Image.jpg"
  c = "https://www.gettyimages.com/gi-resources/images/CreativeLandingPage/HP_Sept_24_2018/CR3_GettyImages-159018836.jpg"

  public images =[];
  constructor() { 
   this.images.push(this.a)
    
  }

  ngOnInit() {
    
   
  }

 

  public imagesURL = [
    'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
    'https://404store.com/2018/05/07/Birds-Image.jpg',
    'https://404store.com/2018/05/07/Birds-Image.jpg',
    ];

  public l:number;
  public i= this.imagesURL[this.l];

  public a1 = this.images[this.i];
 





//making use of immutable
//
  

 //try use this when clicked the image 
  // <angular-image-slider [images]="imagesUrl"></angular-image-slider>


 image:string = "https://www.ctvnews.ca/polopoly_fs/1.4037876!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg";
  
 
   

 changeImage(){
   console.log("the image got clicked")

   //this.images.pop()
  if(this.images[0]==this.a){
    console.log("if eds")
   this.images.pop()
   this.images.push(this.b)
  }else if(this.images[0]==this.b){
    console.log("eklse ")
    this.images.pop();
    this.images.push(this.c)
  }else if(this.images[0]==this.c){
    this.images.pop();
    this.images.push(this.a)
  }


   

   
  
   
 }


}
