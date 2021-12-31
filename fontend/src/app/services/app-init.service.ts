import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private httpClient: HttpClient) {}

  fetchInitData() {
    return new Observable((subscriber) => {
      this.httpClient
        .get(`${environment.apiEndpoint}menus?populate[page][populate]=*`)
        .subscribe(
          (res) => {
            console.log(res);
            subscriber.complete();
          },
          (error) => {
            console.log(error);
            subscriber.error();
          }
        );
    });
  }
}
