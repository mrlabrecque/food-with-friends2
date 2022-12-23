import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
	declarations: [AccountComponent]
})
export class AccountModule { }
