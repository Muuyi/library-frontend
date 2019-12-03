import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../shared/library.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public libraryService: LibraryService,public dialog: MatDialog) { }

  ngOnInit() {
    this.libraryService.getBookList()
  }
  openDialog(data){
    this.dialog.open(HomeDialogComponent,{data:data})
  }
}
