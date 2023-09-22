import { createBrowserRouter } from "react-router-dom";
import { CART, DEFAULT, HOME, ORDERS, PRODUCT, PROFILE, PURCHASE, WISHLIST} from "./keys";
import { Cart, Home, ProductDetail, Profile, SignIn, Wishlist} from "../page";
import Orders from "../page/Orders/Orders";
import Purchase from "../page/Purchase/Purchase";

const router = createBrowserRouter([
    {
        path:DEFAULT,
        element: <SignIn />
    },
    {
        path:HOME,
        element: <Home />
    },
    {
        path:PROFILE,
        element: <Profile />
    },
    {
        path:CART,
        element: <Cart />
    },
    {
        path:WISHLIST,
        element: <Wishlist />
    },
    {
        path:PRODUCT,
        element: <Home />

    },
    {
        path:"/product/:id",
        element: < ProductDetail/>
    },
    {
        path:PURCHASE,
        element: < Purchase/>
    },
    {
        path:ORDERS,
        element: < Orders/>
    },
])

export default router;