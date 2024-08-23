
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAuth } from '../../context/AuthContext'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useEffect, useState } from 'react';




const Navbar = () => {


  const navigation = [
    { name: 'Home', path: '/welcome' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ]

  const { logout } = useAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
 
    const storedUser = sessionStorage.getItem('userLogued');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/');
    }
  }, [navigate]);


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

 
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path)
  }

  const handleLogout= () => {
    logout();
  }
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link to={'/welcome'} className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604"
                  className="h-10 w-auto rounded-lg"
                />
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}

                      onClick={() => handleNavigate(item.path)}
                      className={classNames(
                        location.pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <span className=" hidden sm:block font-semibold">{user?.displayName}</span>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={user?.photoURL}
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>

                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <button onClick={() => handleLogout()} className="block px-4 py-2 text-m font-bold text-red-600 data-[focus]:bg-gray-100">
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                onClick={() => handleNavigate(item.path)}

                className={classNames(
                  location.pathname === item.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      
      <Outlet />

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Logo and Description */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Food Boost</h2>
              <p className="mt-2 text-gray-400">
                Tu tienda de productos favoritos. Ofrecemos lo mejor para ti.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Navegación</h3>
              <ul>
                <li><Link to="/welcome" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-white">Productos</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contacto</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul>
                <li className="mb-2"><a href="mailto:yesidvanegas68@gmail.com" className="text-gray-400 hover:text-white">yesidvanegas68@gmail.com</a></li>
                <li className="mb-2"><a href="tel:+573118599554" className="text-gray-400 hover:text-white">+57 (311) 859-9554</a></li>
                <li className="mb-2">Tunja, Colombia</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Food Boost. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default Navbar