import { Link } from "react-router-dom"; // Import Link from React Router

export default function SellerProfile() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 mb-5">
      <div className="lg:text-center pt-10">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Profile
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Welcome, Seller
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Here you can view and update your profile information.
        </p>
      </div>
      <div className="mt-10 p-5 bg-white rounded-lg shadow">
        <div className="grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* Card 1: Profile Info */}
          <div className="bg-blue-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
            <div className="flex items-center justify-center">
              <div className="h-14 w-14 inline-flex items-center justify-center rounded-full bg-blue-500 text-white">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/placeholder-avatar.jpg"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                John Doe
              </h3>
              <p className="mt-2 text-sm text-gray-500">johndoe@example.com</p>
              <p className="mt-2 text-sm text-gray-500">+1-202-555-0143</p>
            </div>
          </div>
          {/* Card 2: Shipping Address */}
          <div className="bg-green-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Shipping Address
              </h3>
              <p className="mt-2 text-sm text-gray-500">123 Main St</p>
              <p className="text-sm text-gray-500">City, State 12345</p>
              <p className="text-sm text-gray-500">United States</p>
              <Link
                to="#"
                className="block mt-4 text-center text-blue-600 hover:underline"
              >
                Edit Address
              </Link>
            </div>
          </div>
          {/* Card 3: Payment Methods */}
          <div className="bg-yellow-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Payment Methods
              </h3>
              <p className="mt-2 text-sm text-gray-500">•••• •••• •••• 1234</p>
              <Link
                to="#"
                className="block mt-4 text-center text-blue-600 hover:underline"
              >
                Manage Payments
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Manage My Products
        </h2>
      </div>
      <div className="mt-10 p-5 bg-white rounded-lg shadow">
        <div className="grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {/* Card 4: Your Cart */}
          <div className="bg-red-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Add Products
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                You have 3 items in your stock
              </p>
              <Link
                to="/sellerMenu"
                className="block mt-4 text-center text-blue-600 hover:underline"
              >
                click to add products
              </Link>
            </div>
          </div>
          {/* Card 5: Order History */}
          <div className="bg-purple-50 hover:shadow-lg transition duration-200 rounded-lg p-4">
            <div className="text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                My Products
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                You have made 5 products in total
              </p>
              <Link
                to="/orders"
                className="block mt-4 text-center text-blue-600 hover:underline"
              >
                View products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
