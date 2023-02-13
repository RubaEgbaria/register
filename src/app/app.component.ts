import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullStackProject';

  constructor(private router: Router) { }

  signUp() : any {
    this.router.navigate(['/Register']);
    console.log (" navigating ");

}
  signIn() : any {
    this.router.navigate(['/Login']);
    console.log (" navigating ");

}
}
