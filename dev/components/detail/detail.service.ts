import {Injectable} from 'angular2/core';
import {CONSTANT} from '../../utility/constant';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class DetailService {

	constructor(private _http: Http) {}

	getHeader() {
	    var headers = new Headers();
	    headers.append("Content-Type","application/json");
	    return headers;
	}

	getItem(id,type) {
		return this._http.get(CONSTANT.BASE_URL+type+'/'+id,{headers: this.getHeader()}).map( res=> res.json() );
	}

}
