import {HttpParams} from '@angular/common/http';

export class CachingHttpParams extends HttpParams {
	constructor(public cacheFlag: boolean = false) {
		super();
	}
}
