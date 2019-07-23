import {CarInfoFormComponent} from './car-info-form/car-info-form.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileModalComponent} from './profile-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RequestCache} from '@shared/services/request.cache.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CachingInterceptor} from '@shared/services/interceptors/caching-interceptor';

@NgModule({
	declarations: [ProfileModalComponent, CarInfoFormComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatInputModule,
	],
	entryComponents: [ProfileModalComponent],
	exports: [ProfileModalComponent, MatInputModule],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true},
		{provide: RequestCache, useClass: RequestCache},
	],
})
export class ProfileModalModule {}
