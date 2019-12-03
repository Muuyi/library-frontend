import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LibraryService } from 'src/app/shared/library.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  imgUrl;
  fileToUpload:File = null
  constructor(private fb: FormBuilder,public libraryService: LibraryService,private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit() {
    this.libraryService.getBookList();
    this.libraryService.getCategoryList();
  }
  bookForm = this.fb.group({
    id:[''],
    category : [0],
    title : [''],
    author : [''],
    photo :[''],
    review : [''],
  })
  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  saveBook(){
    // var category = parseInt(this.bookForm.value.category,10)
    const formData:FormData = new FormData();
    formData.append('photo',this.fileToUpload,this.fileToUpload.name);
    formData.append('title',this.bookForm.value.title);
    formData.append('category',this.bookForm.value.category);
    formData.append('author',this.bookForm.value.author);
    formData.append('review',this.bookForm.value.review);
    return this.http.post(environment.rootUrl+'books/',formData).subscribe(
      res => {
        this.bookForm.reset();
        this.toastr.success("Record added successfully","Book record")
        this.libraryService.getBookList();
      }
    )
  }
}
