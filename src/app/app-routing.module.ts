import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs/tabs.component';

const routes: Routes = [
  {
    path: 'home',
    component: TabsComponent,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import("./tabs/tab1/tab1.module").then(m => m.Tab1Module)
          }
        ]
      },
      // {
      //   path: 'home',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      //     }
      //   ]
      // },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/tab1'
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }