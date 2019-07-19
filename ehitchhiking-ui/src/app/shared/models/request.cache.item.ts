import {HttpResponse} from '@angular/common/http';

export class RequestCacheItem {
	url: string;
	response: HttpResponse<any>;
	lastRead: number;

	constructor(url: string, response: HttpResponse<any>, lastRead: number) {
		this.url = url;
		this.response = response;
		this.lastRead = lastRead;
	}
}
