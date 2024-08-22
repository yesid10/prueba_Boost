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
            <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6">
             
              <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-700">Nombre del Producto</h3>
                <p className="mt-1 text-sm text-gray-500">Descripción breve del producto.</p>
                <p className="mt-2 text-lg font-bold text-gray-900">$XX.XX</p>
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