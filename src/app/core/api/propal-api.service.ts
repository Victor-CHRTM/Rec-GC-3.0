import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propal } from '../../models/propal.model';

@Injectable({
  providedIn: 'root'
})
export class PropalApiService {
  readonly PROPAL_API_PATH = 'https://jsonplaceholder.typicode.com/todos';
  private readonly http: HttpClient = inject(HttpClient);

  public getPropals(): Observable<Propal> {
    return this.http
      .get<Propal>(this.PROPAL_API_PATH);
  }
}