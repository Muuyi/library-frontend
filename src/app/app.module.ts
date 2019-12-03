import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './index/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { BooksComponent } from './admin/books/books.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeDialogComponent } from './index/home/home-dialog/home-dialog.component';
import { IndexComponent } from './index/index.component';
import { GoogleBooksComponent } from './index/google-books/google-books.component';
import { HerokuFilmsComponent } from './index/heroku-films/heroku-films.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    CategoriesComponent,
    GoogleBooksComponent,
    BooksComponent,
    LoginComponent,
    HomeDialogComponent,
    IndexComponent,
    HerokuFilmsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HomeDialogComponent]
})
export class AppModule { }
