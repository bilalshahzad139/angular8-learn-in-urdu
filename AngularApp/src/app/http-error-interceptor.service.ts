import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BackendServiceService } from './backend-service.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService implements HttpInterceptor {

  constructor(private bs:BackendServiceService) { }

  intercept(req,next){

    return next.handle(req)
    .pipe(
      catchError(err => {
        debugger;
          if (err.status === 401) {
              this.bs.logOut()// auto logout if 401 response returned from api
              ;
              location.reload(true);
          }
          const error = err.error.message || err.statusText;
          return throwError(error);
      })//end of catchError operator
    );//end of pipe
  }//end of intercept
}
