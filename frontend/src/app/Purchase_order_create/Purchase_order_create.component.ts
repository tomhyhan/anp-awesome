import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-second',
  templateUrl: './Purchase_order_create.component.html',
  styleUrls: ['./Purchase_order_create.component.css']
})
export class Purchase_order_create implements OnInit {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  order={
    serverName:"benny",
    subtotal:4536,
    tax:65,
    TotalPrice:465
  }

  addRow(){
    this.fieldArray.push(this.newAttribute)
    console.log("asd")
    this.newAttribute = {};
  }
  
  

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

    
  }
  deleteOrderDetail() {
   
    // const url = BASE_URL1 + 'Index';
    // this.http.get<any>(url)
    //   // Get data and wait for result.
    //   .subscribe(result => {
    //       this._productsArray = result.foodItems;

    //       for (let i = 0; i < this._productsArray.length; i++) {
    //         this._productsArray[i].ordernum = 0;
    //         this._productsArray[i].eachcost = 0;
    //       }
    //     },

    //     error => {
    //       // Let user know about the error.
    //       this._errorMessage = error;
    //     });
  }

}
