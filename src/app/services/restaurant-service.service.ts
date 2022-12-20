import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http: HttpClient) { }

  public getRestaurants(parametersToRequest: any): Observable<Restaurant[]> {
    return this.http.get(`${environment.apiUrl}/restaurants/`, {params: parametersToRequest} ).pipe(
      map((res: any) => {
        const restaurants: Restaurant[] = res.restaurants;
        restaurants?.forEach(rest => {
          rest.liked = false;
        });
        return restaurants;
      })
    );
  }
}
