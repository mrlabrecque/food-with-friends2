import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from '../tab1/tab1.component';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
    {
      path: '',
      component: TabsComponent,
      children: [
        {
          path: 'tab1',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../tab1/tab1.module').then(m => m.Tab1Module)
            }
          ]
        },
        {
          path: 'account',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../../pages/account/account.module').then(m => m.AccountModule)
            }
          ]
        },
        // {
        //   path: 'tab3',
        //   children: [
        //     {
        //       path: '',
        //       loadChildren: () =>
        //         import('../tab3/tab3.module').then(m => m.Tab3PageModule)
        //     }
        //   ]
        // },
        {
          path: '',
          redirectTo: '/home/tab1',
          pathMatch: 'full'
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
