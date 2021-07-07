import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';




// interface Product
// {
//   productId:number,
//   productName:String,
//   productPrice:number,
//   productDes:String,
//   productImg:String,
// }
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

 
  filteredString:string=''; 
  sortby:any='1'
  
 
  products:any;
  // constructor(private productServices:ProductserviceService)
  // {
  //   this.products=productServices.getallproducts();
  // }

  errMsg:any;
  constructor(proService:ProductService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )

    
      

//   products:Product[]=[
//  {productId:101, productName:'mobile', productPrice:20000, productDes:'the product is mobile ', productImg:'assets/images/mobile.jpg'},
//  {productId:101, productName:'laptop', productPrice:50000, productDes:'the product is laptop ', productImg:'assets/images/laptop.jpg'},
//  {productId:101, productName:'football', productPrice:5000, productDes:'the product is football ', productImg:'assets/images/football.jpg'},
//  {productId:101, productName:'shoes', productPrice:1500, productDes:'the product is shoes ', productImg:'assets/images/shoes.jpg'}
//                       ]
}
}
