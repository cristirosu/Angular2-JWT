import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user'
import {UserService} from "../_services/user.service";
import { AuthenticationService } from '../_services/authentication.service';
import { Exception } from "../_models/exception"

@Component({
    templateUrl: 'app/home/home.component.html',
    providers: [
        AuthenticationService,
        UserService
    ]
})

export class HomeComponent implements OnInit{
    msg: String = "";

    constructor(private authService: AuthenticationService,
        private testService: UserService) { }

    ngOnInit() {
        console.log("home this auth serv" + this.authService.x);
        //get users from secure api
        this.testService.getTest()
            .subscribe(
                (msg) => {
                    console.log("hihihi");
                    this.msg = msg.errorMessage;
                },
                (error) => {
                    console.log("dis error");
                    console.log(error);
                    this.authService.logout();
                }
            );
    }

}