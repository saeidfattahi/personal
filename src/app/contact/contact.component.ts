import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // defining a form and validations
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('',  Validators.required),
    query: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  // getting username to validate
  get username() {
    return this.form.get('username');
  }
  // getting email to validate
  get email() {
    return this.form.get('email');
  }
  //submission
  get query() {
    return this.form.get('query');
  }
  submitQuery() {
    alert('Thanks! we will come back to you soon.')
    this.form.reset() 
    // reseting the form after successful submission
    // reset() is a built-in function
  }

}

