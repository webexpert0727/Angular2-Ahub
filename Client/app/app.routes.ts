import { NewRunsComponent } from './runs/newRuns.component';

import { RunDetailComponent } from './runs/runs.component';
import { ProjectsDetailsComponent } from './projects/projectDetails.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DocsComponent } from './Docs/docs.component';
import { LibraryComponent } from './library/library.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Lazy async modules
  {
    path: 'login', loadChildren: './+login/login.module#LoginModule'
  },
  {
    path: 'register', loadChildren: './+register/register.module#RegisterModule'
  },
  {
    path: 'profile', loadChildren: './+profile/profile.module#ProfileModule'
  },
  {
    path: 'admin', loadChildren: './+admin/admin.module#AdminModule'
  },
  {
    path: 'examples', loadChildren: './+examples/examples.module#ExamplesModule'
  },
  { path: 'library', component: LibraryComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'projects', component: ProjectsComponent },
  {
    path: 'projects/:id', component: ProjectsDetailsComponent
  },
  { path: 'projects/:id/runs/new', component: NewRunsComponent },
  { path: 'projects/:id/runs/:id', component: RunDetailComponent },
  { path: 'settings', component: SettingsComponent },

];

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
