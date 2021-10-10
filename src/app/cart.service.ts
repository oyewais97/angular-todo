import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data = [{
    "name": "Btech",
    "courseid": "1",
    "courserating": 5,
    "points": "100",
    "type": "computers"
  },
  {
    "name": "BCom",
    "courseid": "2",
    "courserating": 5,
    "points": "100",
    "type": "computers"
  }, {
    "name": "SOftware",
    "courseid": "2",
    "courserating": 5,
    "points": "100",
    "type": "computers"
  }];
  
  constructor() { }

  getCardData(){
    return this.data

  }
}
