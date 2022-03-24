import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list: any;
  errorMassage: any;

  breakpoints = {
    320: { slidesPerview: 1.6, spaceBetween: 20 },
    640: { slidesPerview: 2.6, spaceBetween: 20 },
    768: { slidesPerView: 4.6, spaceBetween: 40 },
    1024: { slidesPerview: 6.6, spaceBetween: 40 },
  }

  constructor(private service: HomeService) { }

  ngOnInit(): void {

    this.service.retutnHome().subscribe(
      (data) => {
        this.list = data;
        console.log(this.list);
      },
      (error) => {
        this.errorMassage = error;
      }
    );
  }

}