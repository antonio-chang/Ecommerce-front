import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
  }

  constructor(public router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.router.navigate(['/default'])
  }

}
