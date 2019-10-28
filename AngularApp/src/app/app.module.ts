import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { SizerComponent } from './sizer/sizer.component';
import { DirectviesPracticeComponent } from './directvies-practice/directvies-practice.component';
import { LoginComponent } from './login/login.component';
import { BackendServiceService } from './backend-service.service';
import { TestClass } from './person';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { HttpErrorInterceptorService } from './http-error-interceptor.service';
import { MyNgIfDirective } from './my-ng-if.directive';
import { MyhighlighterDirective } from './myhighlighter.directive';
import { MyTestPipePipe } from './my-test-pipe.pipe';
import { TestdirectiveDirective } from './testdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    BindingPracticeComponent,
    SizerComponent,
    DirectviesPracticeComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    NavComponent,
    PageNotFoundComponent,
    LogoutComponent,
    MyNgIfDirective,
    MyhighlighterDirective,
    MyTestPipePipe,
    TestdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:"MyToken",
      useValue:123
    },
    {
      provide:"MyTest",
      useClass: TestClass
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi : true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
