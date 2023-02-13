import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PatternValidator, Validators } from '@angular/forms';
import { forbiddenNameValidator, identityRevealedValidator } from '../sign-up/validators.component';

// C:\Users\rubae\fullStackProject\src\app\components\sign-up\validators.component.ts
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  signInForm = new FormGroup ({
    // name  : new FormControl ( '' , [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email     : new FormControl ( '' , [Validators.required, Validators.minLength(8), Validators.email]),
    password     : new FormControl ( '' , [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  });

  value: any = {
    name : '',
    email : '',
    password : '',
  };
  constructor(private router: Router) { }
  submit() : any {
    console.log (" submitted ");
    // console.log ( ' user data: ' + ' Email: ' + this.model.email + ', Full name : ' + this.model.name +  ', Password: ' + this.model.password);

    alert(" Submitted successfully ")
  }
  navigate() {
    this.router.navigate(['/Register']);
    console.log (" navigating ");

}
}
