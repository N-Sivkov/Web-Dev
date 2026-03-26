import { Component, signal, computed } from '@angular/core';
import { ProductService } from './services/product-service/product-service';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{

  selectedCategoryId = signal<number | null>(null);

  constructor(public productService: ProductService) {}

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }

  clearCategory() {
  this.selectedCategoryId.set(null);
  }

  selectedProducts = computed(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return this.productService.getProductsByCategory(id);
  });
}