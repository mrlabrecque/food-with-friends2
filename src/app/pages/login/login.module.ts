import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, LoginRoutingModule],
	declarations: [LoginComponent]
})
export class LoginModule { }
