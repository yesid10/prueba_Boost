import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="bg-gray-100  flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          ¡Bienvenido a nuestra tienda!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explora nuestra colección de productos exclusivos y encuentra las mejores ofertas.
        </p>

        <div className="mt-8 flex flex-col items-center">
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">Productos Destacados</h2>
            <div className="mt-4 flex  gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6">
             
              <div className=" min-w-full bg-gray-200 p-4 rounded-lg shadow-sm">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-700">Boost Hamburguer</h3>
                <p className="mt-1 text-sm text-gray-500">¡Disfruta la perfección en cada bocado! Nuestra hamburguesa es una deliciosa combinación de carne jugosa a la parrilla, pan suave y dorado, con frescos ingredientes como lechuga crujiente, tomate jugoso y queso derretido. Todo esto acompañado por nuestras salsas secretas que te harán querer más. ¡Ven y prueba la mejor hamburguesa, hecha con pasión y calidad!</p>
                <p className="mt-2 text-lg font-bold text-gray-900">$ 25.00</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <Link
           to="/products"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Explora la Tienda
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome