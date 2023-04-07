import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductwithdiscountComponent } from './productwithdiscount/productwithdiscount.component';
import { ProductwithoutdiscountComponent } from './productwithoutdiscount/productwithoutdiscount.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NotesComponent } from './notes/notes.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'home/:name',component:HomeComponent},
  {path:'product',component:ProductsComponent,
  children:[
    {path:'withdiscount',component:ProductwithdiscountComponent},
    {path:'withoutdiscount',component:ProductwithoutdiscountComponent}
   ]},
  {path:'users',component:UsersComponent},
  {path:'register',component:UserregisterComponent},
  {path:'login',component:UserloginComponent},

  {path:'posts',component:PostsComponent},
  {path:'notes',component:NotesComponent},
  {path:'comment',component:CommentsComponent},
  {path:'post/:id',component:CommentsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import("../auth/auth.module").then(m=>m.AuthModule)},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
