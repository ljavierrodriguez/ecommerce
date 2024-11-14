import React from 'react'

const CardProduct = ({ id, title, discount, price, img, rating, addToCart }) => {
    return (
        <div className="card h-100">
            {/* Sale badge*/}
            {
                discount > 0 && (
                    <div
                        className={`badge bg-${ discount >= 15 ? 'danger' : 'dark'} text-white position-absolute`}
                        style={{ top: "0.5rem", right: "0.5rem" }}
                    >
                        Sale -{discount}%
                    </div>
                )
            }
            {/* Product image*/}
            <img
                className="card-img-top"
                src={img}
                alt="..."
            />
            {/* Product details*/}
            <div className="card-body p-4">
                <div className="text-center">
                    {/* Product name*/}
                    <h5 className="fw-bolder">{title}</h5>
                    {/* Product reviews*/}
                    {/* 
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        {rating > 0 && <div className="bi-star-fill" />}
                        {rating > 1 && <div className="bi-star-fill" />}
                        {rating > 2 && <div className="bi-star-fill" />}
                        {rating > 3 && <div className="bi-star-fill" />}
                        {rating > 4 && <div className="bi-star-fill" />}
                    </div>
                    */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                        {rating > 0 ? <div className="bi-star-fill" /> : <div className="bi-star" />}
                        {rating > 1 ? <div className="bi-star-fill" /> : <div className="bi-star" />}
                        {rating > 2 ? <div className="bi-star-fill" /> : <div className="bi-star" />}
                        {rating > 3 ? <div className="bi-star-fill" /> : <div className="bi-star" />}
                        {rating > 4 ? <div className="bi-star-fill" /> : <div className="bi-star" />}
                    </div>
                    {/* Product price*/}
                    {discount > 0 && (
                        <>
                            <span className="text-muted text-decoration-line-through">
                                ${price}
                            </span>- 
                        </>
                    )}
                    ${(price - (price * (discount / 100)))}
                </div>
            </div>
            {/* Product actions*/}
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(id, (price - (price * (discount / 100))))}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct