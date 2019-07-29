import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CachingHttpParams} from '@shared/models/caching.http.params';
import {RequestMethods} from '@shared/enums/request-enum';

@Injectable()
export class ApiService {
  static readonly apiUrl: string = 'http://localhost:4200/api';

	constructor(private http: HttpClient) {}

	doGet(urlPath: string, isCacheable: boolean = false, parameters: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.GET, urlPath, parameters, isCacheable);
	}
	doPost(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.POST, urlPath, data, isCacheable);
	}
	doDelete(urlPath: string, isCacheable: boolean = false, parameters: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.DEL, urlPath, parameters, isCacheable);
	}
	getPut(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.PUT, urlPath, data, isCacheable);
	}

  private generateRequest(
    type: RequestMethods,
    urlPath: string,
    data: any,
    isCacheable: boolean = false
  ): Observable<any> {
    const body = data;
    let url = ApiService.apiUrl + urlPath;
    if (type === RequestMethods.GET || type === RequestMethods.DEL) {
      url = this.insertParameters(url, data);
      return this.http.request(type, url, this.getRequestOptions(isCacheable) as any);
    }
    return this.http.request(type, url, this.getRequestOptions(isCacheable, body) as any);
  }


  private getRequestOptions(cacheFlag: boolean = false, requestBody?: any) {
    return {
      body: requestBody,
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
      reportProgress: false,
      params: new CachingHttpParams(cacheFlag),
      responseType: 'json',
      withCredentials: false,
      observe: 'response',
    };
  }

	private insertParameters(urlTemplate: string, data: any): string {
    if (data) {
      Object.keys(data).forEach((key) => {
        urlTemplate = urlTemplate.replace(`{{${key}}}`, data[key]);
      });
    }
		return urlTemplate;
	}
}
