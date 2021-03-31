import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: 'Welcome to our Pre Sale',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

  navigateToRegister(): void {
    this.router.navigate(['/register'])
  }

}
