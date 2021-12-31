import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface Event {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root',
})
export class PubsubService {
  protected _eventsSubject = new BehaviorSubject<any>(undefined);

  constructor() {}

  broadcast(key: any, value: any) {
    this._eventsSubject.next({ key, value }); // here we are setting the key and value of our subject
  }

  on<T>(key: any): Observable<T> {
    return this._eventsSubject.asObservable().pipe(
      filter((e) => {
        if (e == undefined) return;
        return e.key === key;
      }),
      map((e) => e.value)
    );
  }
}
