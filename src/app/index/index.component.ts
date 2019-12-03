import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../shared/library.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getBookList();
  }

}
