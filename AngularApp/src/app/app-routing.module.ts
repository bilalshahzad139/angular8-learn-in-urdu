import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonListComponent } from './person-list/person-list.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';


const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AuthService]},
  {path:'persons', component:PersonListComponent, canActivate:[AuthService]},
  {path:'login', component:LoginComponent},
  {path:'movies', component:MoviesComponent, canActivate:[AuthService]},
  {path:'logout', component:LogoutComponent, canActivate:[AuthService]},
  {path:'', redirectTo:'/home', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
