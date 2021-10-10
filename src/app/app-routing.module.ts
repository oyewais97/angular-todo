import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PostComponent } from './post/post.component';
import { CartComponent} from './cart/cart.component';
import {PostEditComponent} from './post-edit/post-edit.component'
const routes: Routes = [ 
  { path: 'login', component: AuthComponent },
  {path: 'post', component: PostComponent },
  {path: 'cart', component: CartComponent},
  {path:'post-edit', component:PostEditComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  AuthComponent,
  PostComponent,
  CartComponent,
  PostEditComponent
]