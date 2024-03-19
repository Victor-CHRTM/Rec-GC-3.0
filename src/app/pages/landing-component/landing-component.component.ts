import { Component } from '@angular/core';
import { RECGConstant } from 'src/app/models/rec.constant.model';

@Component({
  selector: 'lap-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss']
})
export class LandingComponentComponent {
  readonly RECGConstant = RECGConstant;
}
