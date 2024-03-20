import { Component } from '@angular/core';
import { RECGConstant } from 'src/app/models/rec.constant.model';

@Component({
  selector: 'lap-landing-component',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  readonly RECGConstant = RECGConstant;
}
