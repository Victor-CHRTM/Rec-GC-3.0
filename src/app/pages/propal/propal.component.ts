import { Component, OnInit, inject } from '@angular/core';
import { RECGConstant } from 'src/app/models/rec.constant.model';

import { Propal } from 'src/app/models/propal.model';
import { PropalService } from 'src/app/services/propal.service';

@Component({
  selector: 'lap-propal-component',
  templateUrl: './propal.component.html',
  styleUrls: ['./propal.component.scss']
})
export class PropalComponent implements OnInit {
  readonly RECGConstant = RECGConstant;

  propals: Propal [] = [];

  private readonly propalService: PropalService = inject(PropalService);

  ngOnInit(){
    this.propalService.getPropals().subscribe(
      (data : Propal[]) => {
        this.propals = data;
      }
    )
  }
}
