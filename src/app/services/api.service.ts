import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router} from '@angular/router'
import {RequestOptions,Headers } from '@angular/http';
@Injectable()
export class Api{
  private requestOptions;
  baseUrl :string = "http://localhost:16626/";
  constructor(private http: HttpClient) {
    this.requestOptions = new RequestOptions();
    this.requestOptions.withCredentials = true;
   }
   get<T>(url: string): Observable<any> {
    //var apiRoot = window.location;
    //var root = apiRoot.origin+apiRoot.pathname;
      return this.http.get<any>(this.baseUrl+url,this.requestOptions);
  }
  post<T>(url: string, body: object): Observable<any> {
    //var apiRoot = window.location;
      return this.http.post<T>(this.baseUrl+url, body, this.requestOptions);
  }
  put<T>(url: string, body: object): Observable<any> {
    //var apiRoot = window.location;
      return this.http.put<T>(this.baseUrl+url, body,this.requestOptions);
  }
  delete<T>(url: string): Observable<any> {
    //var apiRoot = window.location;
      return this.http.delete<T>(this.baseUrl+url,this.requestOptions);
  }
}
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(JSON.stringify(req));
      req = req.clone({
        setHeaders: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      return next.handle(req).do((event:any)=>{
      },(err:any)=>{
        if(err.status==401){
          // this.router.navigateByUrl('/login')
        }
        return false;
      });
    }
}