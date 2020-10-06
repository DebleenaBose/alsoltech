import { Component, OnInit } from '@angular/core';
import { particles } from '../../assets/particleConfig/particleConfig.json';
import * as AOS from 'aos';
import isotope from 'isotope-layout';
import { IsotopeOptions } from 'ngx-isotope';
declare var $: any;
declare var isotope: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  items = [
    {
      img: '../../assets/images/card1.png',
      title: 'Quiz Application',
      subtitle: 'Simple application using JS',
      link: 'card1',
      type: 'filter-app'
    },
    {
      img: '../../assets/images/card2.png',
      title: 'Map Integration',
      subtitle: 'Locate Firestations',
      link: 'card2',
      type: 'filter-web'
    },
    {
      img: '../../assets/images/card3.png',
      title: 'New Zealand',
      subtitle: 'History of Waitangi and NZ',
      link: 'card3',
      type: 'filter-card'
    }
  ]
  
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




    var $grid = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
      
      var filterValue = $(this).attr('data-filter');
      console.log(filterValue);
      $grid.isotope({ filter: filterValue });
      
      aos_init();
    });

    var $grid = $('.portfolio-container').isotope({
      itemSelector: '.subcategories'
    });
    $('#portfolio-flters li').on('click', function() {
      var filterValue = $(this).attr('data-filter');
      console.log(filterValue);
      $grid.isotope({ filter: filterValue });
    });

  }

}
