import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import {ChartConfiguration , ChartType} from 'chart.js';
import {BaseChartDirective} from 'ng2-charts';


@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.component.html',
  styleUrls: ['./coin-detail.component.css']
})
export class CoinDetailComponent implements OnInit
{
   coinData : any;
   coinId!: string;
   days: number=1;
   currency: string  = "INR";
   
   constructor(private api: ApiService , private activateRoute: ActivatedRoute){}

  ngOnInit(): void 
  {
  
    this.activateRoute.params.subscribe((value)  =>
      {
    this.coinId = value[`id`];
    this.getCoinData()
      })
  }

  getCoinData()
  {
    this.api.getCurrencyById(this.coinId).subscribe((res)=>
    {
      console.log(res);
      this.coinData = res;
    })
  }

}
