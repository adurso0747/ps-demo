import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  constructor(private http :HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    return this.http.post('https://putsreq.com/jyHrxVV4JjPR1OYwyWa2', userSettings)
    //return of(userSettings);
  }
}
