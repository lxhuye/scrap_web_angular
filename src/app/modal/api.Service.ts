import { Injectable } from "@angular/core";
import { HttpInterceptorService } from "./HttpUtils.Service";

@Injectable()
export class ApiService {
  constructor(private httpInterceptorService: HttpInterceptorService) {}

  /**
   * post
   * @param url 
   * @param data 
   */
  postRequest(url: string, data: any) {
    return this.httpInterceptorService.request({
      method: 'POST',
      url: url,
      data: data
    })
  }

  /**
   * get
   * @param url 
   * @param data 
   */
  getRequest(url: string, data: any) {
    return this.httpInterceptorService.request({
      method: 'get',
      url: url,
      data: data
    })
  }
}