import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import { RECGConstant } from '../models/rec.constant.model';
import { Propal } from '../models/propal.model';
import { PropalApiService } from '../core/api/propal-api.service';

@Injectable({providedIn: 'root'})
export class PropalService {
  readonly RECGConstant = RECGConstant;
  
  currentPropal = signal<Propal | undefined>(undefined);

  private readonly propalApiService: PropalApiService = inject(PropalApiService);

  constructor() {
    firstValueFrom(this.propalApiService.getPropals()).then((propal: Propal) => {
      this.currentPropal.set(propal);
    });
  }
}
