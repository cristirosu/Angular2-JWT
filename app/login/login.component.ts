import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';
import { MdButton } from '@angular2-material/button';


@Component({
    templateUrl: 'app/login/login.component.html',
    providers: [ AuthenticationService ],
})

export class LoginComponent implements OnInit{
    model: any = {};
    loading = false;
    error = '';
    message = "";

    constructor(
        private router: Router,
        private authService: AuthenticationService){
    }

    ngOnInit() {
        this.authService.logout();
        this.authService.x = 7;
        localStorage.setItem("x","y");
        console.log("login this auth serv" + this.authService.x);
    }

    login() {
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe( result => {
                if(result === true){
                    //login succesful
                    this.router.navigate(['/']);
                } else {
                    console.log("here gayz");
                    //login failed
                    this.message = "Username or password is incorrect";
                    this.loading = false;
                }
            },
                (error) => {
                    console.log("dis error");
                    if(error.json() && error.json().errorMessage){
                        this.message = error.json().errorMessage;
                    } else {
                        this.message = "An unexpected error has occured";
                    }
                })

    }
}