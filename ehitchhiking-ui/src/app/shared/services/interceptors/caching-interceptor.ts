import {RequestCache} from '@shared/services/request.cache.service';
import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse, HttpEvent} from '@angular/common/http';
import {of, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CachingHttpParams} from '@shared/models/caching.http.params';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
	constructor(private cache: RequestCache) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const cachedResponse = this.cache.get(request);
		return cachedResponse ? of(cachedResponse) : this.sendRequest(request, next, this.cache);
	}

	private sendRequest(
		request: HttpRequest<any>,
		nextHandler: HttpHandler,
		requestsCache: RequestCache
	): Observable<HttpEvent<any>> {
		const noHeaderRequest = request.clone({headers: new HttpHeaders()});

		return nextHandler.handle(noHeaderRequest).pipe(
			tap((event) => {
				if (
					event instanceof HttpResponse &&
					request.params instanceof CachingHttpParams &&
					request.params.cacheFlag
				) {
					requestsCache.put(request, event);
				}
			})
		);
	}
}
