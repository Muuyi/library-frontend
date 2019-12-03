import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroku-films',
  templateUrl: './heroku-films.component.html',
  styleUrls: ['./heroku-films.component.scss']
})
export class HerokuFilmsComponent implements OnInit {
  filmsList;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getFilms();
  }
  getFilms(){
    this.http.get("https://ghibliapi.herokuapp.com/films").subscribe(res=>this.filmsList=res);
  }
}
