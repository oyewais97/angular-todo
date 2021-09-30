import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postCheck : string ='';
  post: string[] =  [];
  

  add(){

    this.post.push(this.postCheck);
    this.postCheck = '';
  }
  delete (index: number): void{
    
    this.post.splice(index, 1)
  }
  updateList(i: number){
    let title = this.post[i];
   let result = prompt("Edit Task Title", title);
   if (result !== null){
     this.post[i] = result;
   }

  }
  constructor() { 
    
     
  }
  

  ngOnInit(): void {
    
  



}
}
