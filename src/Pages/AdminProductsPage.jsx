import { useState, useEffect } from "react";

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    subCategory: "",
    description: "",
    image: null,
    imagePreview: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost/Dahas/php/get_products.php");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/Dahas/php/add_product.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const result = await response.json();

      if (result.message) {
        alert("Product added successfully!");
        setProducts([...products, { id: Date.now(), ...newProduct }]);
        setNewProduct({
          name: "",
          price: "",
          category: "",
          subCategory: "",
          description: "",
          image: null,
          imagePreview: "",
        });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} className="input-field" />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} className="input-field" />
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} className="input-field" />
        <input type="text" name="subCategory" placeholder="Subcategory" value={newProduct.subCategory} onChange={handleInputChange} className="input-field" />
        <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} className="input-field"></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} className="input-field" />
        {newProduct.imagePreview && <img src={newProduct.imagePreview} alt="Preview" className="w-24 h-24 mt-2" />}
        <button type="submit" className="btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
