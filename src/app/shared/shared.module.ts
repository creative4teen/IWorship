import { NgModule, ModuleWithProviders  } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { PaypalComponent } from './paypal/paypal.component';
import { ShowComponent } from './show/show.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyBAXi9qOgLyixbz6PDU8xmkdr-rAtyNxoQ",
    authDomain: "creativeteenweb.firebaseapp.com",
    databaseURL: "https://creativeteenweb.firebaseio.com",
    projectId: "creativeteenweb",
    storageBucket: "creativeteenweb.appspot.com",
    messagingSenderId: "740807814118"  
};



@NgModule({
    declarations: [
        PaypalComponent,
        ShowComponent
    ],
    imports: [
        NgbModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        HttpModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        PaypalComponent,
        ShowComponent
    ],
    providers: [HttpClientModule]
})

export class SharedModule {}
