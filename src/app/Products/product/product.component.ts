import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { IProduct } from '../model/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: IProduct | any;

  constructor(private _ProductService: ProductService, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._ProductService.allProduct().subscribe({
      next: (res: IProduct) => {
        console.log(res);
        this.productList = res;
      },
      error: (err) => {
        this._toastr.error(err.error.message, 'Error!')
      },
      complete: () => { this._toastr.success('', 'Success') },
    })
  }

}
