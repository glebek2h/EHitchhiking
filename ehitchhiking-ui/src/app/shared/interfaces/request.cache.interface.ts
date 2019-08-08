import {HttpResponse, HttpRequest} from '@angular/common/http';

export interface RequestCacheInterface {
	get(request: HttpRequest<any>): HttpResponse<any> | undefined;
	put(request: HttpRequest<any>, response: HttpResponse<any>): void;
}
