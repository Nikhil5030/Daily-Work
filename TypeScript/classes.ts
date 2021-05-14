class Product1 {

    readonly name="Lenovo laptop";
    protected price;

    constructor(price:number){
        
        this.price=price;
    }
    display(): void {
        console.log(this.name);
        console.log(this.price);
    }
}
let obj3=new Product(50000);
obj3.display();

class ProductTax1 extends Product{

    protected tax;

    constructor(price:number,tax:number){
        super(price);
        this.tax=tax;
    }

    display(): void{
        super.display();
        console.log(this.tax);
    }

    getNetPrice(): number{
        return this.price+this.price*this.tax/100;
    }
}

let obj2=new ProductTax(50000,20);
obj2.display();
console.log("The Net Price is "+obj2.getNetPrice());