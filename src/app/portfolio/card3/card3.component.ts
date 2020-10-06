import { Component, OnInit } from '@angular/core';
import { particles } from '../../../assets/particleConfig/particleConfig.json';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {


  showIndex = true;
  myStyle: object = {};
  myParams: object = {};
  paramss: object = {};
  width = 100;
  height = 100;

  GetStarted() {
    this.showIndex = false;
  }



  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {


    this.myStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    
    this.paramss = JSON.parse(JSON.stringify(particles));
    this.myParams = {
      particles: this.paramss
    };
    console.log(this.myParams);




    this.galleryOptions = [
      {
          width: '100%',
          height: '600px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 50,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: '../../../assets/images/card3/1.png',
          medium: '../../../assets/images/card3/1.png',
          big: '../../../assets/images/card3/1.png'
      },
      {
          small: '../../../assets/images/card3/2.png',
          medium: '../../../assets/images/card3/2.png',
          big: '../../../assets/images/card3/2.png'
      },
      {
          small: '../../../assets/images/card3/3.png',
          medium: '../../../assets/images/card3/3.png',
          big: '../../../assets/images/card3/3.png'
      },
      {
        small: '../../../assets/images/card3/4.png',
        medium: '../../../assets/images/card3/4.png',
        big: '../../../assets/images/card3/4.png'
      },
      {
        small: '../../../assets/images/card3/5.png',
        medium: '../../../assets/images/card3/5.png',
        big: '../../../assets/images/card3/5.png'
      },
      {
        small: '../../../assets/images/card3/6.png',
        medium: '../../../assets/images/card3/6.png',
        big: '../../../assets/images/card3/6.png'
      }
    ];




    
  }

}
