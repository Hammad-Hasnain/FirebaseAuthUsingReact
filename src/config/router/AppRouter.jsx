import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from '../../screen/SignUp'
import Login from '../../screen/Login'
import Products from '../../screen/products/Products'
import ProductDetails from '../../screen/productDetails/ProductDetails'
import Error from '../../screen/Error'
import { RoutingList } from '../../utils/RoutingList'

const AppRouter = () => {
    return <Router>
        <Routes>

            {
                RoutingList.map((e, i) => <Route key={i} path={e.path} element={e.element} />)
            }
            {/* <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products-details/:id' element={<ProductDetails />} />
            <Route path='/error' element={<Error />} /> */}
        </Routes>
    </Router>
}



export default AppRouter