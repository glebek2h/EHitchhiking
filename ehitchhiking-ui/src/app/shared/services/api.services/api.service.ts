import {ResponseMessages} from './../../enums/response-message.enum';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CachingHttpParams} from '@shared/models/caching.http.params';
import {RequestMethods} from '@shared/enums/request-methods.enum';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {map, catchError} from 'rxjs/operators';
import {NotificationService} from '../notification.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
	static readonly apiUrl: string = 'http://localhost:4200/api/';

	constructor(private http: HttpClient, private notificationService: NotificationService) {}

	doGet(
		urlPath: string,
		isCacheable: boolean = false,
		parameters: any = null,
		isNotified: boolean = true
	): Promise<any> {
		return this.generateRequest(RequestMethods.GET, urlPath, isCacheable, isNotified, parameters);
	}
	doPost(urlPath: string, data: any = null, isNotified: boolean = true): Promise<any> {
		return this.generateRequest(RequestMethods.POST, urlPath, false, isNotified, data);
	}
	doDelete(urlPath: string, parameters: any = null, isNotified: boolean = true): Promise<any> {
		return this.generateRequest(RequestMethods.DEL, urlPath, false, isNotified, parameters);
	}
	getPut(urlPath: string, data: any = null, isNotified: boolean = true): Promise<any> {
		return this.generateRequest(RequestMethods.PUT, urlPath, false, isNotified, data);
	}

	doInitGet(): Promise<any> {
		const url = ApiService.apiUrl + URL_REGISTRY.CURRENT_USER;
		return this.http
			.request(RequestMethods.GET, url, this.getRequestOptions(false) as any)
			.pipe(
				map((response: any) => {
					const {body} = response;
					return body;
				}),
				catchError((error) => {
					this.showResponseMessage(error, 'Api Error Occurred!');
					return Promise.reject(error);
				})
			)
			.toPromise();
	}

	doAuthGet(login: string, password: string): Promise<any> {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				Authorization: `Basic ${btoa(login + ':' + password)}`,
				'X-Requested-With': 'XMLHttpRequest',
			}),
			withCredentials: true,
		};
		return this.http
			.get(ApiService.apiUrl + URL_REGISTRY.CURRENT_USER, httpOptions)
			.catch((error) => {
				if (error.status === 401) {
					this.showResponseMessage(ResponseMessages.Error, 'Invalid login or password!');
					return Promise.reject();
				}
				this.showResponseMessage(ResponseMessages.Error, 'Api Error Occurred!');
				return Promise.reject();
			})
			.toPromise();
	}

	private generateRequest(
		type: RequestMethods,
		urlPath: string,
		isCacheable: boolean = false,
		isNotified: boolean = true,
		data?: any
	): Promise<any> {
		const body = data;
		let url = ApiService.apiUrl + urlPath;
		let responseObservable = null;
		if (type === RequestMethods.GET || type === RequestMethods.DEL) {
			url = this.insertParameters(url, data);
		}
		responseObservable = this.http.request(type, url, this.getRequestOptions(isCacheable, body) as any);
		return this.responseMapping(responseObservable, isNotified).toPromise();
	}

	private responseMapping(
		newResponse: Observable<HttpResponse<any> | HttpErrorResponse>,
		isNotified: boolean = true
	): any {
		return newResponse.pipe(
			map((response: HttpResponse<any>) => {
				const {msg, status, data} = response.body || response;
				if (isNotified && ResponseMessages.Error === status) {
					this.showResponseMessage(ResponseMessages.Error, msg);
				} else if (isNotified && ResponseMessages.Ok === status) {
					this.showResponseMessage(ResponseMessages.Ok, msg);
				}
				return data;
			}),
			catchError((error) => {
				this.showResponseMessage(error, 'Api Error Occurred!');
				return Promise.reject(error);
			})
		);
	}

	private showResponseMessage(messageType: ResponseMessages | HttpErrorResponse, message: string): void {
		if (messageType === ResponseMessages.Error) {
			this.notificationService.showErrorNotification(message);
			return;
		}
		if (messageType === ResponseMessages.Ok) {
			this.notificationService.showSuccessNotification(message);
			return;
		}
		if (messageType instanceof HttpErrorResponse) {
			this.notificationService.showErrorNotification(message);
		}
	}

	private getRequestOptions(cacheFlag: boolean = false, requestBody?: any) {
		return {
			body: requestBody,
			headers: new HttpHeaders({'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}),
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
