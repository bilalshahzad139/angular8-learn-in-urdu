import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendServiceService } from './backend-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private bs:BackendServiceService) { }

  canActivate(): Observable<boolean> | boolean {
    return this.bs.IsAuthenticated();
  }
}
