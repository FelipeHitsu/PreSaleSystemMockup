import { HeaderService } from './../../components/template/header/header.service';
import { Customer } from './../../components/customer/customer.model';
import { CustomerService } from './../../components/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  customer: Customer = {
    id: 0,
    name: '',
    cpf: '',
    dateOfBirth: '',
    email: '',
    fone: ''
  }
  formCustomer!: FormGroup;
  resultForm!: Customer;
  
  constructor(private customerService: CustomerService,private router: Router, 
    private headerService:HeaderService) {
      headerService.headerData = {
        title: 'Register',
        icon: 'email',
        routeUrl: '/register'
      }

    this.createForm(new Customer());

   }

   createForm(customer: Customer){
    this.formCustomer = new FormGroup({
      name: new FormControl(customer.name),
      dateOfBirth: new FormControl(customer.dateOfBirth),
      cpf: new FormControl(customer.cpf),
      email: new FormControl(customer.email),
      fone: new FormControl(customer.fone)
    })
  }

  onSubmit(){
    this.newRegister();
    this.formCustomer.reset();
  }

  ngOnInit(): void {

  }


  newRegister(): void {
    this.customer = this.formCustomer.value;
    this.customerService.create(this.customer).subscribe(() => {
      this.customerService.showMessage('Registered successfully!')
      this.router.navigate(['/register'])
    })

  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
