import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { MovieResponse } from '../person';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  term:string = "batman";
  movies:MovieResponse[] = [];
  constructor(private backEndService: BackendServiceService) { }

  ngOnInit() {

  }

  searchMovies(){
    this.backEndService.getMovies(this.term)
    .subscribe(
      m => {
        this.movies = m.Search;
      }
    );
  }
}
