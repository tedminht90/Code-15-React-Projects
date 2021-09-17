
const reducer = (state, action) =>{
    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart:[]
        }
    }
    if(action.type === "REMOVE"){
        const newCard = state.cart.filter((item)=>item.id !== action.payload)
        return {
            ...state,
            cart:newCard,
        }
    }
     if(action.type === "INCREASE"){
        let tempCart =state.cart.map((cardItem)=>{
            if(cardItem.id=== action.payload ){
                return {...cardItem, amount:cardItem.amount+1}
            }
            return cardItem
        });
        return {
            ...state,
            cart:tempCart,
        }
    }
     if(action.type === "DECREASE"){
        let tempCart = state.cart
        .map((cardItem)=>{
            if(cardItem.id === action.payload){
                return {...cardItem, amount:cardItem.amount-1}
            }
            return cardItem
        })
        .filter((cartItem) => cartItem.amount !==0)
        return {
            ...state,
            cart:tempCart,
        }
    }
    if(action.type === "GET_TOTALS"){
        let {total,amount} = state.cart.reduce((cartTotal, cartItem)=>{
            const {price, amount} = cartItem;
            const itemTotal = price * amount;
            // console.log(price, amount);
            cartTotal.total += itemTotal  
            cartTotal.amount += amount; //Tăng giá trị ở sản phầm -> số của giỏ hàng
            return cartTotal
        },{
            total:0,
            amount:0,
        })
        total =parseFloat(total.toFixed(2))
        return {
            ...state,
            total,
            amount
        }
    }
    if(action.type === "LOADING"){
        return {
            ...state,
            loading:true,
        }
    }
    if(action.type === "DISPLAY_ITEMS"){
        return {
            ...state,
            cart:action.payload,
            loading:false
        }
    }
    if(action.type === "TOGGLE_AMOUNT"){
        let tempCart= state.cart
            .map((cartItem) =>{
                if(cartItem.id === action.payload.id){
                    // console.log(action.payload.type);
                    if(action.payload.type === 'inc'){
                        // console.log(item.amount+1);
                        return {...cartItem, amount: cartItem.amount + 1}
                    }
                    if(action.payload.type === 'dec'){
                        // console.log(item.amount-1);
                       return { ...cartItem, amount: cartItem.amount - 1 }
                    }
                }
                return cartItem
            })
            .filter((cartItem) => cartItem.amount !==0)
        return {
            ...state,
            cart:tempCart
        }
    }

    throw new Error('no matching action type')
}

export default reducer