import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { HeaderComponent } from './common/header/header.component';
import { ShareDataService } from './common/share-data.service';
import { SidenavListComponent } from './common/sidenav-list/sidenav-list.component';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
import { UIService } from './shared/ui.service';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AuthModule,
        AngularFirestoreModule,
        SharedModule
    ],
    providers: [AuthService, UIService, ShareDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
