import React from 'react'
import Product from './Product'
import appleImage from './media/images.jpg'

const Products = () => {
  const data = [
    {
      id: 1,
      price: 20000,
      name: "سیب",
      img:appleImage
    },
    {
      id: 1,
      price: 60000,
      name: "موز",
      img:appleImage
    },
    {
      id: 1,
      price: 40000,
      name: "گلابی",
      img:appleImage
    },
  ]

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
            <Product
              name={item.name}
              price={item.price}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
