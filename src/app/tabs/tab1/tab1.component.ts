import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ContentSliderOptions } from 'src/app/models/content-slider-options';
import { Restaurant } from 'src/app/models/restaurant.model';
import { LocationService } from 'src/app/services/location.service';
import { RestaurantServiceService } from 'src/app/services/restaurant-service.service';
import categories  from '../../../assets/categories.json'

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {
  public loader: any;
  public userLocation = {
    Latitude: 0,
    Longitude: 0
  }
  public topContentSliderOptions: ContentSliderOptions = {
    slidesPerView: 1.25,
    spaceBetween: 5,
  };
  public topContentSliderAttribute = 'hot_and_new';
  public topContentSliderItems: Restaurant[];
  public secondContentSliderOptions: ContentSliderOptions = {
    slidesPerView: 3.5,
    spaceBetween: 5,
    freeMode:true
  };
  public secondContentSliderAttribute = 'categories';
  public secondContentSliderItems: any[] = categories;
  public thirdContentSliderOptions: ContentSliderOptions = {
    slidesPerView: 1.25,
    spaceBetween: 5,
  };
  public thirdContentSliderAttribute ='deals';
  public thirdContentSliderItems: Restaurant[];
  constructor(private http: HttpClient,
    private restaurantService: RestaurantServiceService, 
    private locationService: LocationService,
    private loadingCtrl: LoadingController) {
  }
  ngOnInit(): void {
    this.showLoading();
    this.locationService.getUserLocation().then((res: any) => {
      this.userLocation = res;
      this.setUpTopContentSlider();
      this.setUpThirdContentSlider();
  });
  }
  public async showLoading() {
    this.loader = await this.loadingCtrl.create({spinner:'dots'});
    this.loader.present();
  }
  public setUpTopContentSlider() {
    const paramsToRequest: HttpParams = new HttpParams().set('limit', '50')
    .set('latitude', `${this.userLocation.Latitude}`)
    .set('longitude', `${this.userLocation.Longitude}`)
    .set('radius', '16000')
    .set('categories', 'restaurants')
    .set('attributes', this.topContentSliderAttribute);
    this.restaurantService.getRestaurants(paramsToRequest).subscribe(res => {
      this.topContentSliderItems = res
      this.loader && this.loader.dismiss();
    });
  }
  public setUpThirdContentSlider() {
    const paramsToRequest: HttpParams = new HttpParams().set('limit', '50')
    .set('latitude', `${this.userLocation.Latitude}`)
    .set('longitude', `${this.userLocation.Longitude}`)
    .set('radius', '16000')
    .set('categories', 'restaurants')
    .set('attributes', this.thirdContentSliderAttribute);
    this.restaurantService.getRestaurants(paramsToRequest).subscribe(res => {
      this.thirdContentSliderItems = res
      this.loader && this.loader.dismiss();
    });
  }
}
