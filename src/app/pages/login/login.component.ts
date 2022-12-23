import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { SupabaseService } from 'src/app/services/supabase.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	credentials: FormGroup;
  
	constructor(
	  private fb: FormBuilder,
	  private alertController: AlertController,
	  private router: Router,
	  private loadingController: LoadingController,
	  private supabaseService: SupabaseService
	) {}
  
	ngOnInit() {
	  this.credentials = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required, Validators.minLength(6)]],
	  });
	}
  
	login() {
		this.supabaseService.signIn(this.credentials.value)
	}
  
	async signUp() {
		this.supabaseService.signUp(this.credentials.value);
	}
  
	async showError(title, msg) {
	  const alert = await this.alertController.create({
		header: title,
		message: msg,
		buttons: ['OK'],
	  });
	  await alert.present();
	}
}  