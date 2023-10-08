import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitile: ''});

  constructor(){}

  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ad13d197ab22003b.png?q=20'
    };
    this.slides[1] = {
      src: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ee78de50f9dbe993.jpg?q=20'
    }
    this.slides[2] = {
      src: 'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/10afacd24f63e5a4.jpg?q=20'
    }
  }
}
