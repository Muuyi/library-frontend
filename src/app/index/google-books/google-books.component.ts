import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LibraryService } from '../../shared/library.service';

@Component({
  selector: 'app-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.scss']
})
export class GoogleBooksComponent implements OnInit {
  googleBooksList;
  constructor(public fb: FormBuilder,private http: HttpClient,public libraryService: LibraryService) { }

  ngOnInit() {
  }
  googleForm = this.fb.group({
    search : ['']
  })
  searchBook(){
    this.http.get("https://www.googleapis.com/books/v1/volumes?q="+this.googleForm.value.search+"&maxResults=20").subscribe(res=>this.googleBooksList=res);
  }
  // OnSearch(s){
  //   this.libraryService.SearchBooks(s)
  //       .subscribe((data) => {
  //           this.googleBooksList = data['items'];
  //       });
  // }
}
