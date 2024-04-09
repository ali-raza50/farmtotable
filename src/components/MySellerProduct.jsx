import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import "../Styles/sellerproduct.css";
import Header from "./Header";
import Footer from "./Footer";
const MySellerProduct = () => {
  const products = [
    {
      id: 1,
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      status: "Active",
      role: "Admin",
      email: "jane.cooper@example.com",
      imageUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 1,
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      status: "Active",
      role: "Admin",
      email: "jane.cooper@example.com",
      imageUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 1,
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      status: "Active",
      role: "Admin",
      email: "jane.cooper@example.com",
      imageUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 1,
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      status: "Active",
      role: "Admin",
      email: "jane.cooper@example.com",
      imageUrl: "https://i.pravatar.cc/150?img=1",
    },
    // Add more products as needed
  ];

  return (
    <>
      <Header />
      <div class="max-w-3xl mx-auto text-center mt-16">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Summary
          </span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
        <p class="text-lg text-gray-800 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="table-container">
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {product.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.title}</div>
                  <div className="text-sm text-gray-500">Optimization</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link
                    to="/editProduct"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </Link>
                  <Link
                    to="/deleteProduct"
                    className="ml-2 text-red-600 hover:text-red-900"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default MySellerProduct;
