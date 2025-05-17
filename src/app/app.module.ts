import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { routes } from './app.routes';
import { PatientsModule } from './features/patients/patients.module';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes, { enableTracing: true }),
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25
        }),
        PatientsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { } 