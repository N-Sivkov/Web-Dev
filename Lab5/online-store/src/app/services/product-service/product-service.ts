import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Computers' },
    { id: 2, name: 'Smartphones' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Tablets' }
  ];
  //dont make private
  productsSignal = signal<Product[]>([
        // Computers
        {
            id: 1,
            name: "LINEUP R5 5500 / RTX 4060 8 GB / 32 GB / SSD 1028 GB / Win 11 Pro",
            description: "A top-end personal computer for the most resource-demanding tasks of all kinds.",
            price: 558799,
            rating: 4.2,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pe5/pc0/76205689.png",
            link: "https://kaspi.kz/shop/p/lineup-12544510-chernyi-136155620/?srsltid=AfmBOopmV5Yj-VZGcnfvEpmjk5wIsFfqIZSqwlHK-0pTMM1AjfhmjzUx",
            categoryId: 1,
            likes: 7,
            liked: false
    },
        {
            id: 2,
            name: "PIXEL i5-10400F / RTX 3060 12 GB / 16 GB / 0 GB SSD 512 GB / Win 10",
            description: "A powerful solution that will perform great in any field.",
            price: 335000,
            rating: 5.0,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h89/h53/64048533897246.jpg",
            link: "https://kaspi.kz/shop/p/pixel-i5-10400f-rtx-3060-16gb-512-gb-ssd-win-10-103421555/?c=750000000",
            categoryId: 1,
            likes: 14,
            liked: false
    },

        {
            id: 3,
            name: "NC comp i5-6400 / 4 GB / 16 GB / SSD 512 GB / Win 10",
            description: "An upper-half personal computer that will satisfy most of an advanced user's needs.",
            price: 210222,
            rating: 5.0,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pa6/p6b/6938751.png?format=gallery-medium",
            link: "https://kaspi.kz/shop/p/nc-comp-gtx-1050-ti-16gb-512-ssd-win-10-129612531/?c=750000000",
            categoryId: 1,
            likes: 3,
            liked: false
    },

        {
            id: 4,
            name: "NETechnics / 4 GB / 16 GB / 512 GB HDD / Win 10",
            description: "Desktop PC powered by Intel i3-9100F and GTX 1050 Ti, equipped with 16 GB RAM and 512 GB storage, suitable for office work, study, and entry-level gaming.",            price: 210222,
            rating: 4.4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/hd2/h19/63893829353502.jpg",
            link: "https://kaspi.kz/shop/p/netechnics-i3-9100f-gtx-1050-ti-16gb-512gb-hdd-win-10-100503847/?c=750000000",
            categoryId: 1,
            likes: 19,
            liked: false
    },

        {
            id: 5,
            name: "NC comp i5-6400 / 4 GB / 16 GB / SSD 512 GB / Win 10",
            description: "An upper-half personal computer that will satisfy most of an advanced user's needs.",
            price: 210222,
            rating: 4.7,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pea/pb6/55072046.jpg?format=gallery-medium",
            link: "https://kaspi.kz/shop/p/artec-hulkbuster-4831-chernyi-115595656/?c=750000000",
            categoryId: 1,
            likes: 1,
            liked: false
    },

        // Smartphones
        {
            id: 6,
            name: "Apple iPhone 14 Plus 128Gb black",
            description: "6.7-inch Super Retina XDR display, A15 Bionic chip, advanced dual-camera system, and long battery life in a sleek aluminum design.",            price: 393778,
            rating: 4.8,
            image: "https://resources.cdn-kaspi.kz/img/m/p/hce/h38/86042946273310.png",
            link: "https://kaspi.kz/shop/p/apple-iphone-14-plus-128gb-chernyi-106363170/?c=750000000",
            categoryId: 2,
            likes: 12,
            liked: false
    },

        {
            id: 7,
            name: "Apple iPhone 13 128Gb black",
            description: "6.1-inch OLED display, A15 Bionic processor, dual 12 MP cameras with Cinematic mode, and durable Ceramic Shield front.",
            price: 330000,
            rating: 4.8,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg",
            link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000",
            categoryId: 2,
            likes: 8,
            liked: false
    },

        {
            id: 8,
            name: "Samsung Galaxy A03 3 GB/32 GB black",
            description: "Budget smartphone with 6.5-inch display, 48 MP main camera, 5000 mAh battery, and expandable storage support.",
            price: 99000,
            rating: 4.8,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h60/hc2/64371116769310.jpg",
            link: "https://kaspi.kz/shop/p/samsung-galaxy-a03-3-gb-32-gb-chernyi-103623436/?c=750000000",
            categoryId: 2,
            likes: 20,
            liked: false
    },

        {
            id: 9,
            name: "Huawei nova Y63 4 GB/128 GB black + present",
            description: "Affordable smartphone with large display, 4 GB RAM, 128 GB storage, and long-lasting battery for everyday use.",
            price: 79880,
            rating: 4.8,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p53/pb5/77936980.jpg",
            link: "https://kaspi.kz/shop/p/huawei-nova-y63-4-gb-128-gb-chernyi-podarok-149569643/?c=750000000",
            categoryId: 2,
            likes: 5,
            liked: false
    },

        {
            id: 10,
            name: "Redmi A5 3 GB/64 GB blue",
            description: "Entry-level smartphone featuring HD+ display, efficient processor, 3 GB RAM, and 64 GB storage for daily tasks.",
            price: 44990,
            rating: 4.8,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p15/pdb/67433893.png",
            link: "https://kaspi.kz/shop/p/redmi-a5-3-gb-64-gb-sinii-137034947/?c=750000000",
            categoryId: 2,
            likes: 16,
            liked: false
    },

        // Laptops
        {
            id: 11,
            name: 'ASUS TUF Gaming F16 FX608JMR-RV037H 16" / 32 GB / SSD 1000 GB / Win 11 Pro / 90NR0NB1-M0H2S0',
            description: "16-inch gaming laptop with powerful graphics, 32 GB RAM, 1 TB SSD, and Windows 11 Pro for high-performance gaming and multitasking.",
            price: 969000,
            rating: 5.0,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pbe/p7f/91817800.jpg?format=gallery-medium",
            link: "https://kaspi.kz/shop/p/asus-tuf-gaming-f16-fx608jmr-rv037h-16-32-gb-ssd-1000-gb-win-11-pro-90nr0nb1-m0h2s0-153661020/?c=750000000",
            categoryId: 3,
            likes: 9,
            liked: false
    },

        {
            id: 12,
            name: 'Apple MacBook Air 15 2023 15.3" / 8 GB / SSD 256 GB / macOS / MQKR3',
            description: "15.3-inch Liquid Retina display, Apple Silicon performance, ultra-thin aluminum body, and all-day battery life.",
            price: 569458,
            rating: 4.6,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h7e/h98/81547553046558.jpg",
            link: "https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkr3-137254661/?c=750000000",
            categoryId: 3,
            likes: 2,
            liked: false
    },

        {
            id: 13,
            name: 'ASUS TUF Gaming A15 15.6" / 8 GB / SSD 512 GB / Bез ОС / FA506NF-HN100 / 90NR0JE7-M00850',
            description: "15.6-inch gaming laptop with SSD storage, reliable performance hardware, and durable TUF-series chassis.",
            price: 419990,
            rating: 4.4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h44/h75/86319342583838.png",
            link: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-15-6-8-gb-ssd-512-gb-bez-os-fa506nf-hn100-90nr0je7-m00850-120571189/?c=750000000",
            categoryId: 3,
            likes: 18,
            liked: false
    },

        {
            id: 14,
            name: 'Lenovo IdeaPad 3 15.6" / 8 GB / SSD 256 GB / DOS / 15IGL05 / 81WQ00ERRK',
            description: "Affordable 15.6-inch laptop with SSD storage and 8 GB RAM, suitable for study, office work, and everyday browsing.",
            price: 170992,
            rating: 4.8,
            image: "https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg",
            link: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000",
            categoryId: 3,
            likes: 11,
            liked: false
    },

        {
            id: 15,
            name: 'Tohom A133 10.1" / 4 GB / SSD 128 GB / Android / A133A',
            description: "Compact 10.1-inch Android laptop-tablet hybrid with 4 GB RAM and 128 GB storage for lightweight productivity tasks.",
            price: 90100,
            rating: 4.7,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p14/p5e/37509979.png",
            link: "https://kaspi.kz/shop/p/tohom-a133-10-1-4-gb-ssd-128-gb-android-a133a-138346118/?c=750000000",
            categoryId: 3,
            likes: 4,
            liked: false
    },

        // Tablets
        {
            id: 16,
            name: 'Apple iPad Air 11 2025 Wi-Fi 11" 8 GB/128 GB grey',
            description: "11-inch tablet with powerful Apple chip, 8 GB RAM, 128 GB storage, and premium lightweight aluminum design.",
            price: 327321,
            rating: 4.8,
            image: "https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png",
            link: "https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000",
            categoryId: 4,
            likes: 15,
            liked: false
    },

        {
            id: 17,
            name: 'Apple iPad A16 11 2025 Wi-Fi 11" 6 GB/128 GB silver',
            description: "11-inch iPad featuring Apple A16 chip, smooth performance, Wi-Fi connectivity, and optimized iPadOS experience.",
            price: 204395,
            rating: 3.9,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png",
            link: "https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000",
            categoryId: 4,
            likes: 6,
            liked: false
    },

        {
            id: 18,
            name: 'Xiaomi Redmi Pad 2 11" 8 GB/256 GB grey',
            description: "11-inch tablet with 8 GB RAM, 256 GB storage, vibrant display, and long battery life for entertainment and work.",
            price: 105660,
            rating: 4.6,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg",
            link: "https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000",
            categoryId: 4,
            likes: 13,
            liked: false
    },

        {
            id: 19,
            name: 'Huawei MatePad SE AGS6-W09 11" 6 GB/128 GB grey',
            description: "11-inch tablet with 6 GB RAM, 128 GB storage, immersive display, and multi-window productivity features.",
            price: 79889,
            rating: 4.4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg",
            link: "https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000",
            categoryId: 4,
            likes: 10,
            liked: false
    },

        {
            id: 20,
            name: 'Base Tab kids BL-10 7" 8 GB/128 GB blue',
            description: "7-inch kids tablet with parental controls, durable design, 8 GB RAM, and 128 GB storage for educational apps and media.",
            price: 69990,
            rating: 4.4,
            image: "https://resources.cdn-kaspi.kz/img/m/p/pde/p44/61516447.jpeg",
            link: "https://kaspi.kz/shop/p/base-tab-kids-bl-10-7-djuim-8-gb-128-gb-goluboi-144302656/?c=750000000",
            categoryId: 4,
            likes: 17,
            liked: false
        }
    ]
  );

  getProducts() {
    return this.productsSignal;
  }

  getProductsByCategory(categoryId: number) {
    return this.productsSignal().filter(p => p.categoryId === categoryId);
  }

  deleteProduct(id: number) {
    this.productsSignal.update(products =>
      products.filter(p => p.id !== id)
    );
  }

  toggleLike(id: number) {
    this.productsSignal.update(products =>
      products.map(p => {
        if (p.id !== id) return p;

        const liked = !p.liked;

        return {
          ...p,
          liked,
          likes: liked ? p.likes + 1 : p.likes - 1
        };
      })
    );
  }
}