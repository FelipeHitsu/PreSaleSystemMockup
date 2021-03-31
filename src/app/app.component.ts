import { CustomerService } from './components/customer/customer.service';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { Customer } from './components/customer/customer.model';

@Component({
  selector: 'app-root',
  
  templateUrl: 'app.component.html'
})
export class AppComponent {
 
  title = 'PreSale System';

  constructor(private customerService: CustomerService){}

}
