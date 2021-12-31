import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ClientUtilService } from './client-util.service';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(
    private httpClient: HttpClient,
    private clientUtilService: ClientUtilService
  ) {}

  fetchInitData() {
    return new Observable((subscriber) => {
      this.httpClient
        .get(`${environment.apiEndpoint}/api/menus?populate[page][populate]=*`)
        .subscribe(
          (res) => {
            console.log(res);

            this.clientUtilService.StoreSetItem('menu', res);
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
