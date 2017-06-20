import {Injectable} from '@angular/core';
@Injectable()
export class AuthService {

  //private headers = new Headers({'Content-Type': 'application/json'});
 // private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/admin/login';
  //private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/transactions';
  //private merchantListUrl = 'http://192.168.8.100/merchant/list';

  private auth = false;
  private token =""
  constructor() { }



  isLoggedIn() {

    return this.auth;

  }
  authenticate(){

    this.auth = true;
  }
  authfail(){
    this.auth = false;
  }

  setToken(token){

    this.token=token;
  }
  getToken(){

    return this.token;
  }


}
