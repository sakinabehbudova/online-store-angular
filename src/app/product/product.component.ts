import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  form: FormGroup;
  value: number;




  constructor(
    private fb: FormBuilder,
    private alertifyService: AlertifyService,

  ) {
    this.form = this.fb.group({
      price: 11
    });
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }
  change(value: number) {
    this.value = value;
  }

  filterText = "";
  page: Number = 1;
  totalRecords: Number;

  products: Product[] = [
    { id: 1, name: "Banana", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { id: 2, name: "Grapefruit", price: 5.99, imageUrl: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 3, name: "Pineapple", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 4, name: "Banana", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1585827552668-d0728b355e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 5, name: "Banana", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1561815582-66e2bfa2f89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 6, name: "Banana", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1421167418805-7f170a738eb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 7, name: "Grapefruit", price: 5.99, imageUrl: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 8, name: "Pineapple", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 9, name: "Grapefruit", price: 5.99, imageUrl: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 10, name: "Pineapple", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 11, name: "Banana", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1585827552668-d0728b355e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 12, name: "Banana", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1561815582-66e2bfa2f89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 13, name: "Banana", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1585827552668-d0728b355e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 14, name: "Grapefruit", price: 5.99, imageUrl: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 15, name: "Pineapple", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 16, name: "Strawberry", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1513612254505-fb553147a2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 17, name: "Broccoli", price: 4.99, imageUrl: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 18, name: "Pepper", price: 3.49, imageUrl: "https://images.unsplash.com/photo-1513530774447-73de85f43d60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 19, name: "Pumpkin", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 20, name: "Cauliflower", price: 2.49, imageUrl: "https://images.unsplash.com/photo-1506808547685-e2ba962ded60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 21, name: "Potato", price: 0.99, imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 22, name: "Radish", price: 1.99, imageUrl: "https://images.unsplash.com/photo-1504945005722-33670dcaf685?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 23, name: "Tomato", price: 1.99, imageUrl: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 24, name: "Carrot", price: 1.49, imageUrl: "https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 25, name: "Onion", price: 0.49, imageUrl: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 26, name: "Mushroom", price: 4.99, imageUrl: "https://images.unsplash.com/photo-1552825898-07e419204683?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 27, name: "Beetroot", price: 2.99, imageUrl: "https://images.unsplash.com/photo-1506807803488-8eafc15316c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 28, name: "Cabbage", price: 1.99, imageUrl: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 29, name: "Cucumber", price: 1.49, imageUrl: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 30, name: "Pepper", price: 3.99, imageUrl: "https://images.unsplash.com/photo-1465362261089-a2ab269caa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 31, name: "Garlic", price: 2.99, imageUrl: "https://images.unsplash.com/photo-1503097325940-ae094fdb97ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 32, name: "Pepper", price: 3.49, imageUrl: "https://images.unsplash.com/photo-1526346698789-22fd84314424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
  
  ]




  ngOnInit(): void {



  }
  addToBasket(product) {
    this.alertifyService.success(product.name + " added to basket");
  }

}
