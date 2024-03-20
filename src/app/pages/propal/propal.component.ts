import { Component, OnInit } from '@angular/core';
import { RECGConstant } from 'src/app/models/rec.constant.model';

import { PropalApiService } from 'src/app/core/api/propal-api.service';

@Component({
  selector: 'lap-propal-component',
  templateUrl: './propal.component.html',
  styleUrls: ['./propal.component.scss']
})
export class PropalComponent implements OnInit {
  readonly RECGConstant = RECGConstant;

  Propal: any = [];
  constructor(public propalApi: PropalApiService) {}
  ngOnInit() {
    this.loadPropals();
  }

  //get all propals
  loadPropals() {
    return this.propalApi.getPropals().subscribe((data: {}) => {
      this.Propal = data;
    });
  }
}
