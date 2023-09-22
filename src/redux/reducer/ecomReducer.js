import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        name:"Uttam Rao",
        email:"uttam@gmail.com",
        password:"1234",
        mobile:"+91 ##########",
        address :"Kalwad Basti, Lohegaon, Pune, Maharashtra (411032)",
        payment : "UPI Transaction",
    },
    cart:[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
    wishlist:[],
    orders:[],
    product:null,
}

const ecomReducer = createSlice({
    name:'ecom',
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            state.product=action.payload
        },
        addToCart:(state,action) =>{
            const existingIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if(existingIndex>=0){
                state.cart[existingIndex] ={
                    ...state.cart[existingIndex],
                    cartQuantity : state.cart[existingIndex].cartQuantity +1,
                };
            }
            else{
                let tempProductItem = {...action.payload,cartQuantity:1};
                state.cart.push(tempProductItem)
            }
        },
        decreaseCart:(state,action)=>{
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if(state.cart[itemIndex].cartQuantity > 1){
                state.cart[itemIndex].cartQuantity -=1;
            }
            else if(state.cart[itemIndex].cartQuantity === 1){
                const nextCartItems = state.cart.filter(
                    (item) => item.id !==action.payload.id
                );
                state.cart = nextCartItems;
            }
        },
        removeFromCart:(state,action) =>{
            state.cart.map((cartItem) =>{
                if(cartItem.id === action.payload.id){
                    const nextCartItems = state.cart.filter(
                        (item) => item.id !==cartItem.id
                    );

                    state.cart = nextCartItems;
                }
                return state;
            });
        },
        getTotals : (state) =>{
            let {total,quantity} = state.cart.reduce(
                (cartTotal,cartItem) => {
                    const {price,cartQuantity} = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total:0,
                    quantity:0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity=quantity;
            state.cartTotalAmount=total;
        },
        clearCart : (state)=>{
            state.cart = [];
        },
        addToWishlist :(state,action) =>{
            const existingIndex = state.wishlist.findIndex(
                (item) => item.id === action.payload.id
            );
            if(existingIndex>=0){
                state.wishlist[existingIndex] ={
                    ...state.wishlist[existingIndex]
                };
            }
            else{
                let tempProductItem = {...action.payload};
                state.wishlist.push(tempProductItem)
            }
        },
        removeFromWishlist:(state,action) =>{
            state.wishlist.map((wishlistItem) =>{
                if(wishlistItem.id === action.payload.id){
                    const nextWishlistItems = state.wishlist.filter(
                        (item) => item.id !==wishlistItem.id
                    );
                    state.wishlist = nextWishlistItems;
                }
                return state;
            });
        },
        clearWishlist:(state) =>{
            state.wishlist =[]
        },
        addOrder :(state) => {
            state.orders.push(state.cart)
        },
        renameName :(state,action) =>{
            state.user.name=action.payload
        }
    }

})

export default ecomReducer.reducer;
export const {setProduct,addToCart,decreaseCart,removeFromCart,getTotals,clearCart,addToWishlist,removeFromWishlist,clearWishlist,addOrder,renameName} = ecomReducer.actions;