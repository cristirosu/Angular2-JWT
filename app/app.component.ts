import { Component } from '@angular/core';
import {AuthenticationService} from "./_services/authentication.service";
import {UserService} from "./_services/user.service";

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  providers: [
      AuthenticationService,
      UserService
  ]
})
export class AppComponent {

}
