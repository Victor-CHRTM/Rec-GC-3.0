import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Propal} from '../../models/propals.model';

@Injectable({
  providedIn: 'root'
})
export class PropalApiService {
  readonly PROPALS_API_PATH = 'https://jsonplaceholder.typicode.com/todos';
  private readonly http: HttpClient = inject(HttpClient);

  public getUser(): Observable<Propal> {
    return this.http.get<Propal>(this.PROPALS_API_PATH);
  }
}