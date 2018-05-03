import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Location } from '@angular/common';
import { AppModule } from '../app.module';


@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        SharedModule,
        AuthRoutingModule
    ],
    providers: [
        CookieService, Location
    ]
})
export class AuthModule {}
