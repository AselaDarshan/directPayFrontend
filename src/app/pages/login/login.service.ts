import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../../class/AppSetting'
@Injectable()
export class LoginService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/login';
    //private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/transactions';
    //private merchantListUrl = 'http://192.168.8.100/merchant/list';
    constructor(private http: Http) { }
    login(email,password): Promise<any> {
        return new Promise((resolve, reject) => {
            return this.http
                .post(this.urlTransactionList,JSON.stringify({
                    fromDate: fromdate,
                    toDate: todate,
                    token:"accessToken"
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
