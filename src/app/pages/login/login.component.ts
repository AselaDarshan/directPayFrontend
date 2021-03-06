import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {AuthService} from "../auth.service";


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers:[LoginService]
})
export class LoginComponent {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  data;
  filterdata;
  constructor(fb:FormBuilder,private loginService: LoginService,private router: Router,public authService :AuthService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here

       console.log(values);
      this.loginService.login(values).then((data) => {

        if(data.data != null){
          this.data = data.data;
          console.log(this.data);
          if(data.data[0]!=null){
            this.filterdata = data.data[0];


            this.authService.authenticate();
            this.authService.setToken(this.filterdata.accessToken)
            this.router.navigate(['/pages']);
          }
        }
        else {

        }
      });

    }
  }
}
