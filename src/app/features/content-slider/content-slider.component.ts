import { Component, Input } from '@angular/core';
import { ContentSliderSize } from 'src/app/enums/content-slider-size.enum';
import { ContentSliderOptions } from 'src/app/models/content-slider-options';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss']
})
export class ContentSliderComponent {
  @Input() public options: ContentSliderOptions;
  @Input() public items: any;
  @Input() public sliderTitle: string;
  @Input() public sliderSize: string = 'small'; 
  @Input() public showMore: boolean = false;
  constructor() {}
}
