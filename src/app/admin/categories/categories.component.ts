import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/shared/library.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(public libraryService: LibraryService,private http: HttpClient,private toastr: ToastrService) { }

  ngOnInit() {
    this.libraryService.getCategoryList();
  }
  saveCategory(){
    var id;
    if(this.libraryService.categoryForm.value.id == null){
      id = 0
    }else{
      id = this.libraryService.categoryForm.value.id
    }
    var body = {
      id : this.libraryService.categoryForm.value.id,
      category_name : this.libraryService.categoryForm.value.categoryName,
    }
    if(id > 0){
      this.http.put(environment.rootUrl+'categories/'+id+'/',body).subscribe(
        res => {
          this.libraryService.categoryForm.reset();
          this.toastr.info("Units updated successfully","Religion record")
          this.libraryService.getCategoryList();
        }
      )
    }else{
      this.http.post(environment.rootUrl+'categories/',body).subscribe(
        res => {
          this.libraryService.categoryForm.reset();
          this.toastr.success("Record added successfully","Category record")
          this.libraryService.getCategoryList();
        }
      )
    }
  }
}
