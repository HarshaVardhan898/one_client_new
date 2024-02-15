import { Injectable } from '@angular/core';
import { Url } from './config'

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize, throwError, catchError } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const tokenVal = this.localStorage.getItem('token');
    if (tokenVal) {
      if (request.url.includes(new Url().getGlobalUrl())) {
        request = request.clone(
          {
            setHeaders: {
              Authorization: tokenVal ? `Bearer ${tokenVal}` : ''
            }
          }
        )
      }
    }
    return next.handle(request).pipe(
      finalize(() => {
        //hide spnner
      }),
      catchError((error: any) => {
        switch (error.status) {
          case '':
            break;
          default:
            break;
        }
        return throwError(error.error)

      }
      )
    )
  }
}
