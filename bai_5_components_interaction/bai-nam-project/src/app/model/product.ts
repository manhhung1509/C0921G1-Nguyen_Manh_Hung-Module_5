export class Product {
  id : number;
  productName : string;
  price : number;
  manufacture : string;


  constructor(id: number, productName: string, price: number, manufacture: string) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.manufacture = manufacture;
  }
}
