import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './component/member.component';
import { VideoComponent } from './component/video.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  },
  {
    path: 'members',
    component: MemberComponent
  },
  {
    path: 'video',
    component: VideoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
