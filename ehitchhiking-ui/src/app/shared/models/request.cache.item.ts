import {HttpResponse} from '@angular/common/http';
import {RequestMethods} from '@shared/enums/request-enum';

export class RequestCacheItem {
	url: string;
	response: HttpResponse<any>;
	lastRead: number;
	method: RequestMethods;

	constructor(url: string, response: HttpResponse<any>, lastRead: number, method: string) {
		this.url = url;
		this.response = response;
		this.lastRead = lastRead;
		this.method = RequestMethods[method];
	}
}
