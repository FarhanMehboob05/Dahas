import React, { useState } from "react";

let AdminProductsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple",
      price: 10,
      category: "Fruit",
      subCategory: "Fresh",
      description: "Fresh apples",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Banana",
      price: 5,
      category: "Fruit",
      subCategory: "Fresh",
      description: "Fresh bananas",
      image: "https://via.placeholder.com/100",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    subCategory: "",
    description: "",
    image: null, // Store the uploaded image file
    imagePreview: "", // Store the image preview URL
  });

  const [editingProduct, setEditingProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({
          ...newProduct,
          image: file,
          imagePreview: reader.result, // Set the image preview URL
        });
      };
      reader.readAsDataURL(file); // Convert the file to a data URL
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id
            ? { ...newProduct, id: editingProduct.id }
            : product
        )
      );
      setEditingProduct(null);
    } else {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          ...newProduct,
          image: newProduct.imagePreview,
        },
      ]);
    }
    setNewProduct({
      name: "",
      price: "",
      category: "",
      subCategory: "",
      description: "",
      image: null,
      imagePreview: "",
    });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      ...product,
      image: null,
      imagePreview: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary border-b-2 border-secondary pb-2 mb-8">
          Products
        </h2>

        {/* Add/Edit Product Form */}
        <form
          onSubmit={handleAddProduct}
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-accent outline-none"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-accent outline-none"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-accent outline-none"
              value={newProduct.category}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="subCategory"
              placeholder="Sub Category"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-accent outline-none"
              value={newProduct.subCategory}
              onChange={handleInputChange}
            />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-left text-gray-700 mb-1">
                Product Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border border-gray-200 rounded-lg focus:border-accent outline-none"
              />
              {newProduct.imagePreview && (
                <div className="mt-2">
                  <img
                    src={newProduct.imagePreview}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="w-full p-3 border border-gray-200 rounded-lg focus:border-accent outline-none sm:col-span-2"
              value={newProduct.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto mt-4 px-6 py-3 bg-accent text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>
        </form>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-gray-100 text-sm text-gray-800">
                <th className="p-3 text-center">Image</th>
                <th className="p-3 text-center">Name</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Category</th>
                <th className="p-3 text-center">Sub Category</th>
                <th className="p-3 text-center">Description</th>
                <th className="p-3 text-left pl-[45px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">${product.price}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">{product.subCategory}</td>
                  <td className="p-3">{product.description}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      className="px-3 py-1 bg-secondary text-white rounded-lg hover:bg-orange-600 transition-colors"
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsPage;

// import React, { useState } from "react";

// const ProductsPage = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Apple",
//       price: 10,
//       category: "Fruit",
//       subCategory: "Fresh",
//       description: "Fresh apples",
//       image: "https://via.placeholder.com/100",
//     },
//     {
//       id: 2,
//       name: "Banana",
//       price: 5,
//       category: "Fruit",
//       subCategory: "Fresh",
//       description: "Fresh bananas",
//       image: "https://via.placeholder.com/100",
//     },
//   ]);

//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     category: "",
//     subCategory: "",
//     description: "",
//     image: "",
//   });

//   const [editingProduct, setEditingProduct] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     if (editingProduct) {
//       setProducts(
//         products.map((product) =>
//           product.id === editingProduct.id
//             ? { ...newProduct, id: editingProduct.id }
//             : product
//         )
//       );
//       setEditingProduct(null);
//     } else {
//       setProducts([...products, { id: products.length + 1, ...newProduct }]);
//     }
//     setNewProduct({
//       name: "",
//       price: "",
//       category: "",
//       subCategory: "",
//       description: "",
//       image: "",
//     });
//   };

//   const handleDeleteProduct = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const handleEditProduct = (product) => {
//     setEditingProduct(product);
//     setNewProduct({ ...product });
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4 text-center">Products</h2>

//       <form
//         onSubmit={handleAddProduct}
//         className="bg-white p-4 shadow rounded-lg space-y-3 mb-6"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           className="w-full p-2 border rounded"
//           value={newProduct.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="price"
//           placeholder="Price"
//           className="w-full p-2 border rounded"
//           value={newProduct.price}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           className="w-full p-2 border rounded"
//           value={newProduct.category}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="subCategory"
//           placeholder="Sub Category"
//           className="w-full p-2 border rounded"
//           value={newProduct.subCategory}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Image URL"
//           className="w-full p-2 border rounded"
//           value={newProduct.image}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           className="w-full p-2 border rounded"
//           value={newProduct.description}
//           onChange={handleInputChange}
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//         >
//           {editingProduct ? "Update Product" : "Add Product"}
//         </button>
//       </form>

//       <div className="bg-white shadow rounded-lg overflow-x-auto">
//         <table className="w-full min-w-[600px]">
//           <thead>
//             <tr className="bg-gray-200 text-sm">
//               <th className="p-2">Image</th>
//               <th className="p-2">Name</th>
//               <th className="p-2">Price</th>
//               <th className="p-2">Category</th>
//               <th className="p-2">Sub Category</th>
//               <th className="p-2">Description</th>
//               <th className="p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.id} className="border-t text-sm">
//                 <td className="p-2">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-12 h-12 object-cover rounded"
//                   />
//                 </td>
//                 <td className="p-2">{product.name}</td>
//                 <td className="p-2">${product.price}</td>
//                 <td className="p-2">{product.category}</td>
//                 <td className="p-2">{product.subCategory}</td>
//                 <td className="p-2">{product.description}</td>
//                 <td className="p-2 flex flex-col gap-2">
//                   <button
//                     className="bg-yellow-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleEditProduct(product)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                     onClick={() => handleDeleteProduct(product.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
