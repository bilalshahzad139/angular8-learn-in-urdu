export class Person{
  constructor(public id:number,
    public name:string,
    public age:number){

    }
}

export class TestClass{
  public age:number= 0;
  constructor(){
    this.age = Math.random();
  }
}

export interface MoviesResponse {
  Search: Array<MovieResponse>;
  totalResults: number;
  Response: string;
}

export interface MovieResponse {
  Title: string;
  Year: number;
  Type: string;
  Poster: string;
}
