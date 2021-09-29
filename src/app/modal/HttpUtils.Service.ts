/**
 * name: http服务
 * describe: 对http统一封装
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/stoPromise';

let projectAddrass = window.location.host;
let projectAddrassNoPort = window.location.hostname;

let protocol = document.location.protocol;

// const PACKNAME = '/ipm';
const PACKNAME = '';

// const interfaceIp = 'http://47.114.180.65:10001' + PACKNAME;
// const URL = 'http://132.252.113.222:18181' + PACKNAME;

const interfaceIp = `${protocol}//${projectAddrass}${PACKNAME}`;

const baseUrl = interfaceIp;

@Injectable()
export class HttpInterceptorService {
  constructor(private http: Http) {}

  /**
   * 统一发送请求
   * @param params 
   * @returns {Promise<{success: boolean,msg: string}>|Promise<R>}
   */
  public request(params: any): any {
    // POST请求（参数、返回值类型都是任意类型）
    if (params['method'].toUpperCase() == 'POST') {
      return this.post(params['url'], params['data']);
    } else {
      return this.get(params['url'], params['data']);
    }
  }

  /**
   * post 请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public post(url: string, params: any) {
    return this.http.post(baseUrl + url, params).toPromise().then(this.handleSuccess).catch(error => this.handleError(error));
  }

  /**
   * get请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public get(url: string, params: any) {
    return this.http.get(baseUrl + url, params).toPromise().then(this.handleSuccess).catch(error => this.handleError(error));
  }

  /**
   * 处理请求成功
   * @param res 
   * @returns {{data: (string|null|((node:any)=>any)
   */
  private handleSuccess(res: Response) {
    // console.log(res)
    let body = res['_body'];
    if (body) {
      return res.json();
    } else {
      return {
        data: res.json().data || {}, success: true
      }
    }
  }

  /**
   * 处理请求错误
   * @param error 
   * @returns {void|Promise<string>|Promise<T>|any}
   */
  private handleError(error) {
    let msg = '请求失败';
    if (error.status == 400) {
      console.log('请求参数正确');
    }
    if (error.status == 404) {
      console.error('请检查路径是否正确');
    }
    if (error.status == 500) {
      console.error('请求的服务器错误');
    }
    return {success: false,msg: msg};
  }
}