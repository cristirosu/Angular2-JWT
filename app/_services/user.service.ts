import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs'

import { AuthenticationService } from './authentication.service';
import { User } from '../_models/user';
import {Exception} from "../_models/exception";

@Injectable()
export class UserService {

    constructor(
        private http: Http,
        private authService: AuthenticationService) {
    }

    getTest(): Observable<Exception> {
        //add authorization header with jwt token
        let headers = new  Headers( { 'Authorization': 'Bearer ' + this.authService.token  });
        let options = new RequestOptions({ headers: headers });

        //get users from api
        return this.http.get('http://cristi.red:8080/rpg/rest/message/msg', options)
            .map( (response: Response) => response.json() );

    }

}