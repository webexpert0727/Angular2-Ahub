import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { DocsComponent } from './Docs/docs.component';
import { LibraryComponent } from './Library/library.component';
import { ProjectsComponent } from './Projects/projects.component';
import { SettingsComponent } from './Settings/settings.component';

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
  { path: 'settings', component: SettingsComponent }
];

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
