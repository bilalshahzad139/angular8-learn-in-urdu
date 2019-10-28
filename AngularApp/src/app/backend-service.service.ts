import { Injectable } from '@angular/core';
import { Person, MoviesResponse } from './person';
import { of, Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  userLoggedInSource = new BehaviorSubject(false);
  userLoggedInObs = this.userLoggedInSource.asObservable();

  constructor(private httpObj:HttpClient) {
    if(localStorage.getItem('token')){
      this.userLoggedInSource.next(true);
    }
    else {
      this.userLoggedInSource.next(false);
    }
   }

  getPersons():Observable<Array<Person>>{

    // const persons:Person[] = [];
    // persons.push(new Person(1,"Bilal1",100));
    // persons.push(new Person(2,"Bilal2",200));
    // persons.push(new Person(3,"Bilal3",300));
    // persons.push(new Person(4,"Bilal4",300));

    let u ="https://localhost:44356/api/main/getpersons";
    return this.httpObj.get<any>(u)
    .pipe(
      map(m=>{
        return m.data;
      })
    );

    //return of(persons);
  }

  validateUser(username:string, password:string):Observable<boolean> {
    let u ="https://localhost:44356/api/main/validateuser";
    return this.httpObj.post<any>(u, {Login:username,Password:password})
    .pipe(
      map(m => {
          if(m && m.success && m.token){
            localStorage.setItem('token', m.token);
            localStorage.setItem('name', m.name);
            this.userLoggedInSource.next(true);
            return true;
          }
          else {
            return false;
          }
      })
    );


    //return of(false);
    // if(username == "admin" && password == "admin")
    //   return of(true);
    // else
    //   return of(false);
  }

  getName():string{
    return localStorage.getItem('name');
  }
  logOut(): boolean{
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    this.userLoggedInSource.next(false);
    return true;
  }
  getMovies(term:string):Observable<MoviesResponse>{
      let u = "https://www.omdbapi.com/?apikey=b2b65064&s=" + term;
      return this.httpObj.get<MoviesResponse>(u);
  }
  IsAuthenticated(): boolean {
    if(localStorage.getItem('token'))
      return true;
    else
      return false;
  }
}
