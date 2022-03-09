import {Product} from "../model/product";

export class Product_service {

  public getProducts(){
    let products : Product[];

    products = [
      {id : 1, productName : 'iphone5', price: 36000, manufacture : 'Usa'},
      {id : 2, productName : 'Huawei', price: 34000, manufacture : 'China'},
      {id : 3, productName : 'Samsung', price: 31000, manufacture : 'Korea'},
      {id : 4, productName : 'VSmart', price: 35000, manufacture : 'Vn'},
    ]
    return products;
  }


}
