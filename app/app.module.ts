import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent }   from './app.component';
import { routing } from './app.routing'
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";

import { AuthGuard } from "./_guards/auth.guard";
import { AuthenticationService } from './_services/authentication.service';
import { UserService} from './_services/user.service';
import { MdInputModule } from '@angular2-material/input';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdButtonModule} from '@angular2-material/button';

import {PathLocationStrategy, LocationStrategy} from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {ActivationComponent} from "./activation/activation.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdInputModule,
        MdSidenavModule,
        MdButtonModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        RegisterComponent,
        ActivationComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

