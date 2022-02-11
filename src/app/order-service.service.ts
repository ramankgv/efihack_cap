import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient ) { }
  getHoldings(frmDate: string) {
    let filename: string;
    
    if(frmDate){
      filename='/assets/holding_hist.json';
    }else{
      filename='/assets/holding.json';
    }
    
    
    
    return this.http.get<{Isincode: string, Securityname: string,Quantity: string,Value:string}[]>(filename);
  }
}
