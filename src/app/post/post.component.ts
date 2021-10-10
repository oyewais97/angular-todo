import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postCheck : string ='';
  post: string[] =  [];
  cardValue : string[] =[];
  show : boolean= false;
  showone:number=0;
  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];

  
  add(){

    this.post.push(this.postCheck);
    this.postCheck = '';
    if(this.post.length > 0){
      this.showone =  this.post.length;
    }
    
  }
  
  
  delete (index: number): void{
    
    this.post.splice(index, 1)
  }
  updateList(i: number){
    
    this.show = !this.show;
    let title = this.post[i];
   let result = prompt("Enter the value", title);
   if (result !== null){ 
     this.post[i] = result;
   }
   console.log(this.show)

  }
  constructor() { 
    
     
  }
  

  ngOnInit(): void {
    
  



}
}
