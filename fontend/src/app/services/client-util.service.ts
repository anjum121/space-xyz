import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientUtilService {
  constructor() {}

  StoreSetItem(key: string, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  StoreGetItem(key: string) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  StoreDeleteItem(key: string) {
    localStorage.removeItem(key);
  }

  StoreDeleteAll() {
    localStorage.clear();
  }
}
