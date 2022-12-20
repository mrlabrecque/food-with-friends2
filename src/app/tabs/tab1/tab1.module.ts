import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab1RoutingModule } from './tab1-routing.module';
import { Tab1Component } from './tab1.component';
import { ContentSliderComponent } from 'src/app/features/content-slider/content-slider.component';
import { AttributePipe } from 'src/app/pipes/attribute.pipe';
import { MetersToMilesPipe } from 'src/app/pipes/meters-to-miles.pipe';



@NgModule({
  declarations: [Tab1Component,ContentSliderComponent, AttributePipe, MetersToMilesPipe],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1RoutingModule
  ]
})
export class Tab1Module { }
