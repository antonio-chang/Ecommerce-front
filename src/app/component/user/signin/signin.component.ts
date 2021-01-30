import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

export class Casebody {
  summary: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model = {
    fullName: '',
    password: ''
  }; 

  constructor(public router: Router) { }



  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    console.log(form)
    this.router.navigate(['/default'])

  }

}
