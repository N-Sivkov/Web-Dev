import { Component, input, output, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product-service/product-service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent {

  product = input.required<Product>();
  delete = output<number>();

  constructor(private productService: ProductService) {}

  toggleLike() {
    this.productService.toggleLike(this.product().id);
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  share() {
    const url = this.product().link;
    window.open(`https://t.me/share/url?url=${url}`);
  }
}