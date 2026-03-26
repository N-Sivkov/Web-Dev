import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';
import { ProductService } from '../../services//product-service/product-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products = input.required<Product[]>();

  constructor(private productService: ProductService) {}

  handleDelete(id: number) {
    this.productService.deleteProduct(id);
  }
}