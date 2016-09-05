import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from "./component/member.component";

const appRoutes: Routes = [
  {
    path: 'member',
    component: MemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
