import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { Routes, RouterModule } from '@angular/router';

import { ApiTranslationLoader } from './shared/services/api-translation-loader.service';

import { routing } from './app.routes';
import { AppService } from './app.service';
import { appReducer } from './app-store';
import { AppComponent } from './app.component';
import { DocsComponent } from './Docs/docs.component';
import { LibraryComponent } from './Library/library.component';
import { ProjectsComponent } from './Projects/projects.component';
import { SettingsComponent } from './Settings/settings.component';

const appRoutes: Routes = [
    { path: 'library', component: LibraryComponent },
    { path: 'docs', component: DocsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'settings', component: SettingsComponent }
];

@NgModule({
    declarations: [AppComponent, DocsComponent, LibraryComponent, ProjectsComponent, SettingsComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        routing,
        // FormsModule,
        HttpModule,
        // Only module that app module loads
        CoreModule.forRoot(),
        SharedModule.forRoot(),
        HomeModule,
        StoreModule.provideStore(appReducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: ApiTranslationLoader } })
    ],
    providers: [
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
