import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ApiUrls } from 'src/app/services/api-urls.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsersList(params: any) {
    return this.http.get(`${ApiUrls.signIn}`, {
      params: params
    }).pipe(map((res: any) => {
      return res;
    }))
  }
}
