import { Component, OnInit } from '@angular/core';
import { items } from './item';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  
  todos : items={description:'', isChecked:true}
  todosInput = ''
  filter : 'all'| 'active' | 'isChecked' = 'all';

  allItem =[{}];

  addItem(){
    this.allItem.push(this.todos);
  }

  delete(index: number){
   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
