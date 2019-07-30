import {ResponseMessages} from './../../enums/response-message.enum';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CachingHttpParams} from '@shared/models/caching.http.params';
import {RequestMethods} from '@shared/enums/request-methods.enum';
import {URL_REGISTRY} from '@shared/constants/urlRegistry';
import {map, catchError} from 'rxjs/operators';
import {NotificationService} from '../notification.service';

@Injectable()
export class ApiService {
	static readonly apiUrl: string = 'http://localhost:4200/api/';

	constructor(private http: HttpClient, private notificationService: NotificationService) {}

	doGet(urlPath: string, isCacheable: boolean = false, parameters: any = null): Promise<any> {
		return this.generateRequest(RequestMethods.GET, urlPath, parameters, isCacheable);
	}
	doPost(urlPath: string, data: any = null): Promise<any> {
		return this.generateRequest(RequestMethods.POST, urlPath, data, false);
	}
	doDelete(urlPath: string, parameters: any = null): Promise<any> {
		return this.generateRequest(RequestMethods.DEL, urlPath, parameters, false);
	}
	getPut(urlPath: string, data: any = null): Promise<any> {
		return this.generateRequest(RequestMethods.PUT, urlPath, data, false);
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
		return this.http.get(ApiService.apiUrl + URL_REGISTRY.currentUser, httpOptions).toPromise();
	}

	private generateRequest(
		type: RequestMethods,
		urlPath: string,
		data: any,
		isCacheable: boolean = false
	): Promise<any> {
		const body = data;
		let url = ApiService.apiUrl + urlPath;
		let responseObservable = null;
		if (type === RequestMethods.GET || type === RequestMethods.DEL) {
			url = this.insertParameters(url, data);
			responseObservable = this.http.request(type, url, this.getRequestOptions(isCacheable) as any);
		}
		responseObservable = this.http.request(type, url, this.getRequestOptions(isCacheable, body) as any);
		return this.responseMapping(responseObservable).toPromise();
	}

	private responseMapping(newResponse: Observable<HttpResponse<any> | HttpErrorResponse>): Observable<any> {
		return newResponse.pipe(
			map((response: HttpResponse<any>) => {
				const {msg, status, data} = response.body;
				if (ResponseMessages.Error === status) {
					this.showResponseMessage(ResponseMessages.Error, msg);
				} else if (ResponseMessages.Ok === status) {
					this.showResponseMessage(ResponseMessages.Ok, msg);
				}
				return of(data);
			}),
			catchError((error: HttpErrorResponse) => {
				this.showResponseMessage(error, 'Api Error Occurred!');
				return of(error);
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
