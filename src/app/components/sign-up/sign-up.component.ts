import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forbiddenNameValidator, identityRevealedValidator } from './validators.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup ({
    name  : new FormControl ( '' , [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email     : new FormControl ( '' , [Validators.required, Validators.minLength(8), Validators.email]),
    password1     : new FormControl ( '' , [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    password2   : new FormControl ( '' , [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
  }, { validators: identityRevealedValidator });

  value: any = {
    name : '',
    email : '',
    password1 : '',
    password2 : '',
  };
  constructor(private router: Router) { }
  ngOnInit() {}
  submit() : any {
    console.log (" submitted ");

    // this.signUpForm.setValue({name: 'Mahesh', email: null , password1:'65', password2:'65'}); 
    // console.log('Name:' + this.signUpForm.get('name').value);
    console.log(this.signUpForm.value);

    // console.log ( ' user data: ' 
    //  + ' Email: ' + this.value.email
    //  + ', Full name : ' + this.value.name
    //  +  ', Password: ' + this.value.password1);

    alert(' Submitted successfully ')
  }
  navigate() {
    this.router.navigate(['/Login']);
    console.log (" navigating ");

}
info() : any {
  alert(" Email format 'xx@xx.xx' \n Name MUST be more than 3 chars \n Password MUST be more than 8 chars/nums ")
}
}
