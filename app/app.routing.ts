import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import {RegisterComponent} from "./register/register.component";
import {ActivationComponent} from "./activation/activation.component";

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'activation/:id', component: ActivationComponent },
    { path: 'register', component: RegisterComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'login' },

    // otherwise redirect to home
];

export const routing = RouterModule.forRoot(appRoutes);