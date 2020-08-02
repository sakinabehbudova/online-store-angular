import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  header="My Basket";
  buyProductForm :FormGroup;
  createBuyProductForm(){
    this.buyProductForm=this.fb.group({
     firstName: ["",Validators.required],
     lastName: ["",Validators.required],
     email: ["",Validators.required,Validators.email],
     phoneNumber: ["",Validators.required],
     adress: ["",Validators.required],
     nameOnCard: ["",Validators.required],
     cardNumber: ["",Validators.required],
     expiryMonth: ["",Validators.required],
     expiryYear: ["",Validators.required],
     cvv: ["",Validators.required]
     
    })
  }

  ngOnInit(): void {
    this.createBuyProductForm();
  }

}
