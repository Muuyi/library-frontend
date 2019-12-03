import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  categoryList;
  bookList;
  constructor(private fb: FormBuilder,private http: HttpClient) { }
  categoryForm = this.fb.group({
    id : [''],
    categoryName :['']
  })
  getCategoryList(){
    return this.http.get(environment.rootUrl+'categories/').toPromise().then(res => this.categoryList = res)
  }
  getBookList(){
    return this.http.get(environment.rootUrl+'books/').toPromise().then(res => this.bookList = res)
  }
  // SearchBooks(search) {
  //   const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q="+ search +"&maxResults=12")
  //   return this.http.get(encodedURI)
  //       .map((response: Response) => response.json());
  // }
}
