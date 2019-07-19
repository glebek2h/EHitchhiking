import {HttpRequest, HttpResponse} from '@angular/common/http';
import {RequestCacheInterface} from '../interfaces/request.cache.interface';
import {RequestCacheItem} from '../models/request.cache.item';

export class RequestCache implements RequestCacheInterface {
	static readonly maxCacheAge = 30000;
	cache: Map<string, RequestCacheItem>;

	constructor() {
		this.cache = new Map();
	}

	get(request: HttpRequest<any>): HttpResponse<any> | undefined {
		const url = request.urlWithParams;
		const cachedRequest = this.cache.get(url);

		if (!cachedRequest) {
			return undefined;
		}

		const isExpired = cachedRequest.lastRead < Date.now() - RequestCache.maxCacheAge;

		return isExpired ? undefined : cachedRequest.response;
	}

	put(request: HttpRequest<any>, response: HttpResponse<any>) {
		const url = request.urlWithParams;
		const newCache = new RequestCacheItem(url, response, Date.now());

		this.cache.set(url, newCache);

		const expired = Date.now() - RequestCache.maxCacheAge;
		this.cache.forEach((entry) => {
			if (entry.lastRead < expired) {
				this.cache.delete(entry.url);
			}
		});
	}
}
