import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileModalComponent} from './profile-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule, MatIconModule} from '@angular/material';

@NgModule({
	declarations: [ProfileModalComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, MatListModule, MatButtonModule, MatIconModule],
	entryComponents: [ProfileModalComponent],
	exports: [ProfileModalComponent],
})
export class ProfileModalModule {}
