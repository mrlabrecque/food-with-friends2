import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  public getUserLocation(): Promise<any> {
    return Geolocation.getCurrentPosition()
      .then((res) => this.onGetCurrentPositionSuccess(res))
      .catch((res) => this.onGetCurrentPositionError(res));
      
  }
  private onGetCurrentPositionSuccess(location: any) {
    return {
      Latitude: location.coords.latitude,
      Longitude: location.coords.longitude
    }
  }
  private onGetCurrentPositionError(error: any) {
    return error;
  }

}
