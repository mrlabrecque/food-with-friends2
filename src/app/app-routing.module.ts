import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

import { AuthGuard } from './gaurds/auth.guard';
import { TabsComponent } from './tabs/tabs/tabs.component';


const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./tabs/tabs/tabs.module').then((m) => m.TabsModule),
		canLoad: [AuthGuard]
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }