import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '6630e25ac7ec1fee3a5d2d61';
    const authRequest = request.clone({ setHeaders: { 'app-id': token }});

    return next.handle(authRequest);
  }
}

export class Intercept {}
