import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PostComponent } from './post/post.component';
const routes: Routes = [ 
  { path: 'login', component: AuthComponent },
  {path: 'post', component: PostComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  AuthComponent,
  PostComponent,
]