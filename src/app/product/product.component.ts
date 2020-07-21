import { Component, OnInit } from '@angular/core';
import { Product } from './product'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  products: Product[] = [
    { id: 1, name: "Banana", price: 3.99, categoryId: 1, imageUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { id: 2, name: "Strawberry", price: 3.99, categoryId: 1, imageUrl: "https://images.unsplash.com/photo-1513612254505-fb553147a2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 3, name: "Pineapple", price: 3.99, categoryId: 1, imageUrl: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 4, name: "Banana", price: 3.99, categoryId: 1, imageUrl: "https://images.unsplash.com/photo-1585827552668-d0728b355e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 5, name: "Banana", price: 3.99, categoryId: 1, imageUrl: "https://images.unsplash.com/photo-1561815582-66e2bfa2f89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" },
    { id: 6, name: "Banana", price: 3.99, categoryId: 1, imageUrl: "https://images.unsplash.com/photo-1421167418805-7f170a738eb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" },
    { id: 7, name: "Grapefruit", price: 5.99, categoryId: 1, imageUrl: "https://images.unsplash.com/photo-1528826194825-a71b700fe80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" }

  ]




  ngOnInit(): void {
  }

}
