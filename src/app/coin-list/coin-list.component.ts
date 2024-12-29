import { Component , OnInit , AfterViewInit, ViewChild} from '@angular/core';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit
{

  constructor(private api : ApiService , private router : Router) {}
  bannerData: any = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['Symbol' , 'Current_Price' , 'Price_change_percentage24h' , 'Market_cap'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void 
  {
   this.getBannerData();
   this.getAllData();
  }

  getBannerData() {
    this.api.getTrendingCurrency("INR")
      .subscribe(res => {
        console.log(res);
        this.bannerData = res;
      })
  }
  getAllData() {
    this.api.getCurrency("INR").subscribe(res => 
        {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    
}

applyFilter(event: Event) 
{
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) 
  {
    this.dataSource.paginator.firstPage();
  }

}

gotoDetails(row:any)
{
this.router.navigate([`coin-detail/${row.id}`]);
console.table(row.id);
}
}