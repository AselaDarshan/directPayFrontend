import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../../class/AppSetting'
@Injectable()
export class SlipService {

  private headers = new Headers({'Content-Type': 'application/json'});
  // private urlTransactionList = AppSettings.API_M+'/merchantpay/1.0.0/slip/list';
  private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/slip/between';
  //private merchantListUrl = 'http://192.168.8.100/merchant/list';
  constructor(private http: Http) { }
  getTransactionByDateToDate(fromdate,todate,token): Promise<any> {
    this.headers.append("Authorization","Bearer "+token);

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.urlTransactionList,JSON.stringify({
          fromDate: fromdate,
          toDate: todate,
        }), {headers: this.headers})
        .toPromise()
        .then(response => {
          //noinspection TypeScriptUnresolvedFunction
          console.log(response.json());


          resolve(response.json());
        }, error => {
          console.log(error);
          reject(error);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });

    });
  }
}
