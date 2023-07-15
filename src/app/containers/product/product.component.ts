import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[] = [ 
    { productName: "pencil", avaible: true },
    { productName: "notebook", avaible: true },
    { productName: "duster", avaible: false },
    { productName: "bin", avaible: true },
    { productName: "table", avaible: false },
    { productName: "book", avaible: true },

  ];

}
