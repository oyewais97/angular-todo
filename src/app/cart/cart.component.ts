import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  
  isChecked: boolean=false;
  cards:any[]=[]
  title= '';
  description: string = ''
  empList: Array<{desription: string, isChecked: boolean}> = [];
 secondCards = {
   name: 'owais',

 }
 onEmpCreate(){
  //console.log(this.name,this.empoloyeeID);
  console.log(this.description,this.isChecked);
  this.empList.push({desription:this.description, isChecked:this.isChecked });
  this.description = "";
  this.isChecked = false; 
}
  constructor(private card: CartService) { 
    
    
        
  }

  ngOnInit(): void {
   
    
    this.card.data.map(e => {
      return {
          courseid: e.courseid,
          name: e.name,
          point: e.points
      }
  }).forEach(ed => this.cards.push(ed));
  
  console.log(JSON.stringify(this.cards)) 
  
    

  }
   
}
