import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {firstValueFrom, Observable} from 'rxjs';
import { RECGConstant } from '../models/rec.constant.model';
import { Propal } from '../models/propal.model';
import { PropalApiService } from '../core/api/propal-api.service';

@Injectable({providedIn: 'root'})
export class PropalService {
  
  private readonly propalApiService: PropalApiService = inject(PropalApiService);

  public getPropals(): Observable<Propal[]> {
    return this.propalApiService.getPropals();
  }
}
