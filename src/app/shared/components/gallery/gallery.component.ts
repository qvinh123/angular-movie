import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent implements OnInit {
  imgArr = []
  @Input() set listGallery(arr: any) {
    this.imgArr = arr
  }

  get allowDay(): any[] {
    // other logic
    return this.imgArr;
  }

  constructor() { }

  ngOnInit() {
  }

}
