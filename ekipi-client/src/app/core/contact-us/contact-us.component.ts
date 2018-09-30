import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {

  }

  createForm = () => {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      content: ['',Validators.required]
    });
  }

  contactUsForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });
}
