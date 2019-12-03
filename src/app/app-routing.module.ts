import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { BooksComponent } from './admin/books/books.component';
import { GoogleBooksComponent } from './index/google-books/google-books.component';
import { IndexComponent } from './index/index.component';
import { HerokuFilmsComponent } from './index/heroku-films/heroku-films.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',redirectTo:'index/home',pathMatch:'full'},
  {path:'index',component:IndexComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'google-books',component:GoogleBooksComponent},
      {path:'films',component:HerokuFilmsComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
    ]
  },
  {path:'admin',component:AdminComponent,
    children:[
      {path:'categories',component:CategoriesComponent},
      {path:'books',component:BooksComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
