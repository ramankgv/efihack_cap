import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {
  holdingList : any;
  public fromDate : string ="";
  constructor(private orderService : OrderServiceService) { }
  
  getHoldingsList() {
    this.orderService.getHoldings(this.fromDate).subscribe((data)=>this.holdingList=data);
  }

  ngOnInit(): void {
  }

}
