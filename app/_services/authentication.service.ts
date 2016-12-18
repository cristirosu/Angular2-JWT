import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {RegisterRequest} from "../_models/register.request";

@Injectable()
export class AuthenticationService{

    public token: string;
    public x: number = 5;

    constructor(
        private http: Http,
        private router: Router){
        //set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        console.log("token is === " + this.token);
    }

    login(username: string, password: string): Observable<boolean> {
        let headers = new  Headers( { 'Content-Type': 'application/json'  });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://cristi.red:8080/rpg/rest/authentication/login', {email: username, password: password})
            .map( (response: Response) => {
                let token = response.json() && response.json().token;

                if (token) {
                    //set token property
                    this.token = token;
                    console.log(token);
                    //store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    console.log(localStorage.getItem("currentUser"));
                    //return true to indicate succesful login
                    return true;
                } else {
                    //fail login
                    return false
                }
            });
    }

    register(registerRequest: any): Observable<Response> {
        console.log("registeriiing");
        let headers = new  Headers( { 'Content-Type': 'application/json'  });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://cristi.red:8080/rpg/rest/authentication/register', registerRequest)
            .map( (response: Response) => {
                console.log("here boyzu");
                return response;
            });

    }

    activate(id: number) {
        return this.http.get('http://cristi.red:8080/rpg/rest/authentication/activation/' + id)
            .map( (response: Response) => {
                console.log("here boyzu");
                return response;
            });
    }

    logout(): void {
        //clear token and remove user from local storage;
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }


}