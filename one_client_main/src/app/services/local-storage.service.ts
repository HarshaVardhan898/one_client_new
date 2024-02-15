import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getItem(key: any): any {
    const data = window.localStorage.getItem(key);
    return data
  }

  public setItem(key: any, value: any): void {
    window.localStorage.setItem(key, value);
  }

  public remove() {
    window.localStorage.clear()
  }

  public removeItem(key: any): void {
    window.localStorage.removeItem(key)
  }
}
