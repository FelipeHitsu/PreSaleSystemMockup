import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CustomerService } from './../../components/customer/customer.service';
import { Customer } from './../../components/customer/customer.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,AfterViewInit {

  customers!: Customer[];
  displayedColumns = ['id','name','dateOfBirth','cpf','email','fone'];

  
  matDataSource = new MatTableDataSource<Customer>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Customer>;
  @ViewChild(MatSort) sort!: MatSort;
  


  constructor(private headerService: HeaderService, private customerService: CustomerService) { 
    headerService.headerData = {
      title: 'Insterest List',
      icon: 'list',
      routeUrl: '/table'
    } 

  }

  ngOnInit(): void {
     this.customerService.read().subscribe(customers => {
      this.matDataSource.data = customers
    })  
    
  }

  ngAfterViewInit(): void{
    this.matDataSource.paginator = this.paginator;
    this.matDataSource.sort = this.sort;
    
  }
}


