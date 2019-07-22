import {HttpRequest, HttpResponse} from '@angular/common/http';
import {RequestCacheInterface} from '@shared/interfaces/request.cache.interface';
import {RequestCacheItem} from '@shared/models/request.cache.item';

export class RequestCache implements RequestCacheInterface {
	static readonly maxCacheAge = 3 * Math.pow(10, 5);
	cache: Map<string, RequestCacheItem>;

	constructor() {
		this.cache = new Map();
	}

	get(request: HttpRequest<any>): HttpResponse<any> | null {
		const url = request.urlWithParams;
		const cachedRequest = this.cache.get(url);

		if (!cachedRequest) {
			return null;
		}

		const isExpired = cachedRequest.lastRead < Date.now() - RequestCache.maxCacheAge;

		return isExpired ? undefined : cachedRequest.response;
	}

	put(request: HttpRequest<any>, response: HttpResponse<any>) {
		const url = request.urlWithParams;
		const newCache = new RequestCacheItem(url, response, Date.now(), request.method);

		this.cache.set(url, newCache);

		const expired = Date.now() - RequestCache.maxCacheAge;
		this.cache.forEach((entry) => {
			if (entry.lastRead < expired) {
				this.cache.delete(entry.url);
			}
		});
	}
}
