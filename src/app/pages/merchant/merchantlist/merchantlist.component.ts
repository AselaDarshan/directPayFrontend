import {Component, OnInit, Input} from '@angular/core';

import {MerchantService} from '../merchant.service'
import {Merchant} from "../../../class/merchant";
@Component({

  selector:'merchantlist',
  templateUrl:'./merchantlist.component.html',
  providers:[MerchantService]

})

export class MerchantListComponent implements OnInit{

  data;
  filterdata;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  merchantqrcode = false;
  merchantId="";
  role = "merchant";
  constructor(private merchant: MerchantService){

  }
  ngOnInit(){
    this.getMerchantList();
  }
  getMerchantList(){
    this.merchant.getMerchantList(this.role).then((data) => {

      if(data.data != null){
        this.data = data.data;
        console.log(this.data);
        if(data.data[0]!=null){
          this.filterdata = data.data[0].Resources;

        }
      }
      else {

      }
    });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.city.length;
  }
  showQrcode(id){


    this.merchantId=id;
    this.merchantqrcode = true;
  }




}
