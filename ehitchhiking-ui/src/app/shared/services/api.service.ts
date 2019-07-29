import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CachingHttpParams} from '@shared/models/caching.http.params';
import {RequestMethods} from '@shared/enums/request-enum';

@Injectable()
export class ApiService {
	static readonly apiUrl: string = 'http://localhost:4200/api/';

	constructor(private http: HttpClient) {}

	doGet(urlPath: string, isCacheable: boolean = false, parameters: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.GET, urlPath, parameters, isCacheable);
	}
	doPost(urlPath: string, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.POST, urlPath, data, false);
	}
	doDelete(urlPath: string, parameters: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.DEL, urlPath, parameters, false);
	}
	getPut(urlPath: string, data: any = null): Observable<HttpEvent<any>> | null {
		return this.generateRequest(RequestMethods.PUT, urlPath, data, false);
	}
	// doAuthGet(urlPath: string, data: any): Observable<any> {
	// 	const headers = new HttpHeaders(
	// 		data
	// 			? {
	// 					Authorization: 'Basic ' + btoa(data.username + ':' + data.password),
	// 			  }
	// 			: {}
	// 	);
	// 	return this.http.request(RequestMethods.GET, ApiService.apiUrl + urlPath, this.getAuthConfig(headers) as any);
	// }

	// private getAuthConfig(authHeaders: HttpHeaders) {
	// 	return {
	// 		headers: authHeaders,
	// 		reportProgress: false,
	// 		params: new CachingHttpParams(false),
	// 		responseType: 'json',
	// 		withCredentials: false,
	// 		observe: 'response',
	// 	};
	// }

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
			headers: new HttpHeaders(),
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
