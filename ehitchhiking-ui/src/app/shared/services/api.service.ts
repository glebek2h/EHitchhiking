import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CachingHttpParams} from '../models/caching.http.params';
import {RequestMethods} from '../enums/request-enum';

@Injectable()
export class ApiService {
	static readonly apiUrl: string = '';

	constructor(private http: HttpClient) {}

	doGet(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.GET, urlPath, data, isCacheable);
	}
	doPost(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.POST, urlPath, data, isCacheable);
	}
	doDelete(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.DEL, urlPath, data, isCacheable);
	}
	getPut(urlPath: string, isCacheable: boolean = false, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.PUT, urlPath, data, isCacheable);
	}

	private generateRequest(
		type: RequestMethods,
		urlPath: string,
		data: any,
		isCacheable: boolean = false
	): Observable<HttpEvent<any>> {
		const body = JSON.stringify(data);
		const url = ApiService.apiUrl + urlPath;
		if (data) {
			return this.http.request(new HttpRequest(type, url, body, this.getRequestOptions(isCacheable) as any));
		}
		return this.http.request(new HttpRequest(type, url, this.getRequestOptions(isCacheable) as any));
	}

	private getRequestOptions(cacheFlag: boolean = false) {
		return {
			headers: new HttpHeaders(),
			reportProgress: false,
			params: new CachingHttpParams(cacheFlag),
			responseType: 'json',
			withCredentials: false,
		};
	}
}
