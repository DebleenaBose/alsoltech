import { Component, OnInit } from '@angular/core';
import { particles } from '../../assets/particleConfig/particleConfig.json';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  showIndex = true;
  myStyle: object = {};
  myParams: object = {};
  paramss: object = {};
  width = 100;
  height = 100;

  GetStarted() {
    this.showIndex = false;
  }

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


    function aos_init() {
      AOS.init({
        duration: 1000,
        once: true
      });
    }

      aos_init();
  }

}
