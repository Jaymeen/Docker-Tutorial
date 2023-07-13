import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class UserService {
	private backendUrl = "http://172.18.0.3:3000";
	//private backendUrl = "http://localhost:3000";

  	constructor(private http: HttpClient) { }

	addUser(userData: any) : Observable<any> {
		const url = `${this.backendUrl}/adduser`;
		return this.http.post<any>(url, userData);
	}

	getUsers() : Observable<any> {
		const url = `${this.backendUrl}/getusers`;
		return this.http.get(url);
	} 
}
