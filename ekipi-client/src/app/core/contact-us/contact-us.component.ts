import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  submitted = false;
  emailMessage: string;
  constructor(private formBuilder: FormBuilder, private contactUsService: ContactUsService) {
    this.createForm();
  }

  contactUsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    createdDate : new FormControl(new Date(), Validators.required)
  });

  ngOnInit() {
    this.emailMessage = '';
  }

  createForm = () => {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      content: ['', Validators.required],
      createdDate : [new Date()]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      this.emailMessage = '';
      return;
    }
    this.contactUsService.contactMessage(this.contactUsForm)
      .subscribe(response => {
        this.emailMessage = 'Message sent';
        this.contactUsForm.reset();
      });
  }
}
