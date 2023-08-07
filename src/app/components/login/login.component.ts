import { Component, OnInit } from '@angular/core';
import {LogInRequest} from "../../common/LogInRequest";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotificationService} from "../../services/notificationservice.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private logInRequest: LogInRequest = new LogInRequest();

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(3)]);

  logIn: FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor( public router: Router,
              private notificationService: NotificationService) { }

  async onSubmit() {
    const formData = new FormData();
    formData.append('email', this.logIn.get('email')?.value);
    formData.append('password', this.logIn.get('password')?.value);

  }

  redirectRegister() {
    this.router.navigate(['/signup']).catch(console.error);
  }
  ngOnInit(): void {
  }

}
