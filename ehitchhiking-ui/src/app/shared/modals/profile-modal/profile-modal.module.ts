import {ProfileModalApiService} from './../../services/api.services/profile-modal.api.service';
import {ProfileModalService} from './../../services/profile-modal.service';
import {CarInfoFormComponent} from './car-info-form/car-info-form.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileModalComponent} from './profile-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NoDataModule} from '@shared/components/no-data/no-data.module';

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
		NoDataModule,
	],
	providers: [ProfileModalService, ProfileModalApiService],
	entryComponents: [ProfileModalComponent],
	exports: [ProfileModalComponent, MatInputModule],
})
export class ProfileModalModule {}
