import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CachingHttpParams} from '@shared/models/caching.http.params';
import {RequestMethods} from '@shared/enums/request-enum';

@Injectable()
export class ApiService {
  static readonly apiUrl: string = 'http://localhost:8080/';

	constructor(private http: HttpClient) {}

	doGet(urlPath: string, isCacheable: boolean = false, parameters: any = null): Observable<HttpResponse<any>> | null {
		return this.generateRequest(RequestMethods.GET, urlPath, parameters, isCacheable);
	}
	doPost(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpResponse<any>> | null {
		return this.generateRequest(RequestMethods.POST, urlPath, data, isCacheable);
	}
	doDelete(
		urlPath: string,
		isCacheable: boolean = false,
		parameters: any = null
	): Observable<HttpResponse<any>> | null {
		return this.generateRequest(RequestMethods.DEL, urlPath, parameters, isCacheable);
	}
	getPut(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpResponse<any>> | null {
		return this.generateRequest(RequestMethods.PUT, urlPath, data, isCacheable);
	}

	private generateRequest(
		type: RequestMethods,
		urlPath: string,
		data: any,
		isCacheable: boolean = false
	): Observable<any> {
		const body = JSON.stringify(data);
		let url = ApiService.apiUrl + urlPath;
		if (type === RequestMethods.GET || type === RequestMethods.DEL) {
			url = this.insertParameters(url, data);
			return this.http.request(type, url, this.getRequestOptions(isCacheable) as any);
		}
		return this.http.request(type, url, this.getRequestOptions(isCacheable, body) as any);
	}

	private getRequestOptions(cacheFlag: boolean = false, requestBody?: any) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json;charset=UTF-8',
		});
		return {
			body: requestBody,
			headers,
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
