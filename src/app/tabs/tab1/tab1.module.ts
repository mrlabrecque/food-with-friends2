import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab1Component } from './tab1.component';
import { ContentSliderComponent } from 'src/app/features/content-slider/content-slider.component';
import { AttributePipe } from 'src/app/pipes/attribute.pipe';
import { MetersToMilesPipe } from 'src/app/pipes/meters-to-miles.pipe';
import { RestaurantListComponent } from 'src/app/features/restaurant-list/restaurant-list.component';
import { LikeButtonComponent } from 'src/app/features/like-button/like-button.component';



@NgModule({
  declarations: [Tab1Component,
    ContentSliderComponent, 
    AttributePipe, 
    MetersToMilesPipe,
    RestaurantListComponent,
    LikeButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: Tab1Component }])
  ]
})
export class Tab1Module { }
