import {Requests} from './../enums/request-enum';
import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	readonly apiUrl: string = '';
	constructor(private http: HttpClient) {}

	doGet(urlPath: string, data: any): Observable<HttpEvent<any>> | undefined {
		return this.generateRequest(Requests.GET, urlPath, data);
	}
	doPost(urlPath: string, data: any): Observable<HttpEvent<any>> | undefined {
		return this.generateRequest(Requests.POST, urlPath, data);
	}
	doDelete(urlPath: string, data: any): Observable<HttpEvent<any>> | undefined {
		return this.generateRequest(Requests.DEL, urlPath, data);
	}
	getPut(urlPath: string, data: any): Observable<HttpEvent<any>> | undefined {
		return this.generateRequest(Requests.PUT, urlPath, data);
	}

	private generateRequest(type: Requests, urlPath: string, data: any): Observable<HttpEvent<any>> {
		const body = JSON.stringify(data);
		const url = this.apiUrl + urlPath;
		if (data) {
			return this.http.request(new HttpRequest(type, url, body, {responseType: 'json'}));
		} else {
			return this.http.request(new HttpRequest(type, url, {responseType: 'json'}));
		}
	}
}
