//check Day12 Playground

// 点击 Add to Cart 增加数量
// 点击 + / - 修改数量
// 数量为 0 时移除商品
// 显示 total price
// checkout button 在 total 为 0 时 disabled
import { useState } from "react";

interface Product{
    id : number;
    name : string;
    price : number;
}
interface CartItem extends Product{
    qty: number;
}
export function ShoppingCart(){
    const products = [
  { id: 1, name: "Keyboard", price: 150 },
  { id: 2, name: "Mouse", price: 80 },
  { id: 3, name: "Monitor", price: 400 },
];
    const [cart, setCart] = useState<CartItem[]>([]);//这里不懂
    const total = cart.reduce((total,p)=>total + p.price * p.qty,0);

    //Add to Cart
function addToCart(product: Product){

    setCart((prev)=>{
        const currentItem = prev.find((item)=>item.id === product.id);
        if (currentItem){
            return prev.map((item)=>{
                return item.id === product.id ?
                {...item, qty : item.qty + 1} : item
            })
        }
        return [...prev, {...product, qty: 1}]

    }
    )
}
//remove from cart
function removeFromCart(product: Product){
    setCart((prev)=>(prev.filter((item)=>item.id !== product.id)));
}



    return (
        <div>
    
            {products.map((product)=>(
                <div key={product.id}>
                {product.name}:${product.price}
                </div>
            ))}
            <button onClick= {()=> addToCart(products[0])}>
                Add to Cart
            </button>
            <h2>Total = ${total} </h2>
            
        </div>

    )
}
//.map() 里面每一个 item 返回的是一个完整 JSX