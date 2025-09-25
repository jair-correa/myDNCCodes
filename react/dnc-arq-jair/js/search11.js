let total;

let cart = [{name: "banana", price: 2.5, quantity: 3},
            {name: "apple", price: 1.5, quantity: 2},
            {name: "orange", price: 3.0, quantity: 1}
        ];

for (let cartItem of cart){
    console.log(cartItem.name, "|", cartItem.price, "|", cartItem.quantity);
    total = (cartItem.price * cartItem.quantity) + (total || 0);
}