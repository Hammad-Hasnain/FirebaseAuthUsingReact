import Error from "../screen/Error"
import Login from "../screen/Login"
import SignUp from "../screen/SignUp"
import ProductDetails from "../screen/productDetails/ProductDetails"
import Products from "../screen/products/Products"

export const RoutingList = [
    {
        path: '/',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/products-details/:id',
        element: <ProductDetails />
    },
    {
        path: '*',
        element: <Error />
    },
]

