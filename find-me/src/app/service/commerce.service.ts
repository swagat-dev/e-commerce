import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  constructor(private http: HttpClient) { }

  private sendData = new BehaviorSubject<object>({});
  navItem$ = this.sendData.asObservable();

  sendSelectedItem( flag: object ) {
    this.sendData.next(flag);
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/db.json');
  }
}
