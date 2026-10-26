import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ name, price, img }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={img}
                className="card-img-top p-3"
                alt={name}
                style={{ height: "220px", objectFit: "contain" }}
            />

            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>

                <p className="card-text text-success fw-bold">
                    قیمت محصول: {price.toLocaleString('fa-IR')} تومان
                </p>

                <button className="btn btn-primary">
                    مشاهده محصول
                </button>
            </div>
        </div>
    )
}

export default Product
