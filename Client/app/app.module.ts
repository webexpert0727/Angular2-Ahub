import { MockAPi } from './mock.api';
import { ProjectsDetailsComponent } from './projects/projectDetails.component';
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

import { ApiTranslationLoader } from './shared/services/api-translation-loader.service';

import { routing } from './app.routes';
import { AppService } from './app.service';
import { appReducer } from './app-store';
import { AppComponent } from './app.component';
import { DocsComponent } from './Docs/docs.component';
import { LibraryComponent } from './library/library.component';
import { ProjectsComponent } from './projects/projects.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [AppComponent, DocsComponent, LibraryComponent, ProjectsComponent, SettingsComponent, ProjectsDetailsComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
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
        AppService,
        MockAPi,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
