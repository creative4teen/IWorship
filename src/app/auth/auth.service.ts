import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatSnackBar } from '@angular/material';

import { User } from '../common/user.model';
import { AuthData } from './auth-data.model';
import { ShareDataService } from '../common/share-data.service';
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private sharedDataService: ShareDataService,
        private uiService: UIService
    ) {}


    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
            // if (!user || this.sharedDataService==null || this.sharedDataService.homeChurch==null){
            this.loginFail(null);
            // }
            // else {
            //     this.loginSuccess( user.email );
            // }
        });
    }


    registerUser(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.uiService.loadingStateChanged.next(false);
            })
            .catch(error => {
                this.uiService.loadingStateChanged.next(false);
                this.uiService.showSnackbar(error.message, null, 3000);
            });
    }


    login(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.afAuth.auth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(result => {
                this.loginSuccess( authData.email );
            })
            .catch(error => {
                this.loginFail(error.message);
            });
    }



    logout() {
        this.afAuth.auth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }



    private loginFail(msg:string){
        if (msg){
            this.uiService.loadingStateChanged.next(false);
            this.uiService.showSnackbar(msg, null, 5000);
        }
        //
        this.sharedDataService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;

    }

    private loginSuccess(email: string){
        this.uiService.loadingStateChanged.next(false);
        
        email = email.toLowerCase().trim();
        this.sharedDataService.userLogin = new User();
        this.sharedDataService.userLogin.email = email;
        this.sharedDataService.userLogin.userId = email;
        this.sharedDataService.userLogin.host = false;
        let adm = this.sharedDataService.homeChurch.admin;
        if (adm != null){
            let admins = adm.toLowerCase().split(",");
            for(let i=0; i<admins.length; i++){
                if (admins[i].trim() == email){
                    this.sharedDataService.userLogin.host = true;
                }
            }
        }
                
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.sharedDataService.fetchHomeChurch();
        this.sharedDataService.fetchTemplateArray();
        this.router.navigate(['/activity']);
    }

    
}
