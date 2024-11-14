import React, { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import CardProduct from './components/CardProduct'
import Search from './components/Search'

const App = () => {

    const [search, setSearch] = useState('')

    const [datos, setDatos] = useState({
        cart: [],
        header: {
            title: 'Shop in style',
            slogan: 'With this shop hompeage template'
        },
        products: [
            { id: 1, title: 'EcoPulse', rating: 3, price: 18, discount: 10, img: 'https://placehold.co/400x300' },
            { id: 2, title: 'AquaGlow', rating: 4, price: 20, discount: 15, img: 'https://placehold.co/400x300' },
            { id: 3, title: 'TechNest', rating: 1, price: 40, discount: 0, img: 'https://placehold.co/400x300' },
            { id: 4, title: 'ZenWave', rating: 2, price: 25, discount: 10, img: 'https://placehold.co/400x300' },
            { id: 5, title: 'BioBliss', rating: 5, price: 30, discount: 0, img: 'https://placehold.co/400x300' },
            { id: 6, title: 'SwiftCharge', rating: 2, price: 70, discount: 20, img: 'https://placehold.co/400x300' },
        ],
    })

    const addToCart = useCallback((id, price) => {
        setDatos((datos) => ({ ...datos, cart: datos.cart.concat({ product_id: id, quantity: 1, price: price }) }))
    }, [])


    return (
        <>
            {/* Navigation*/}
            <Navbar cart={datos.cart} />
            {/* Header*/}
            <Header {...datos.header} />
            {/* Search */}
            <Search search={search} setSearch={setSearch} />
            {/* Section*/}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {
                            datos.products.filter((prod) => {
                                return prod.title.toLowerCase().includes(search.toLowerCase())
                            }).map((prod) => {
                                return (
                                    <div className='col mb-5' key={prod.id}>
                                        <CardProduct {...prod} addToCart={addToCart} />
                                    </div>
                                )
                            })
                        }

                        {/* <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div>
                        <div className="col mb-5">
                            <CardProduct />
                        </div> */}
                    </div>
                </div>
            </section>
            {/* Footer*/}
            <Footer />
        </>
    )
}

export default App