import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maintenance-profile';
  enterManagerValidationForm!: FormGroup;

  managerList = [
    {
      id:1,
      username:'manager001',
      password:'manager111'  
    },
    {
      id:2,
      username:'manager002',
      password:'manager222'
    }
  ];

  constructor(private formBuilder: FormBuilder, private modalService:NgbModal){}

  ngOnInit(){
    this.enterManagerValidationForm = this.formBuilder.group({
      username:[''],
      password:['']
    });
  }

  openModal(targetModal: any, manager: { username: any; password: any; }){
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });

    this.enterManagerValidationForm.patchValue({
      username: manager.username,
      password: manager.password
    });
  }

  onSubmit(){
    this.modalService.dismissAll();
    console.log("res:", this.enterManagerValidationForm.getRawValue);
  }
}
