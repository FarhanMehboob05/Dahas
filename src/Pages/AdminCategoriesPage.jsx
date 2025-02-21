import { useState } from "react";

export default function AdminCategories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Men's Fashion" },
    { id: 2, name: "Women's Fashion" },
    { id: 3, name: "Electronics" },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [editCategory, setEditCategory] = useState(null);
  const [editName, setEditName] = useState("");

  // Add Category
  const addCategory = () => {
    if (!newCategory.trim()) return;
    const newId = categories.length
      ? categories[categories.length - 1].id + 1
      : 1;
    setCategories([...categories, { id: newId, name: newCategory }]);
    setNewCategory("");
  };

  // Edit Category
  const startEdit = (category) => {
    setEditCategory(category.id);
    setEditName(category.name);
  };

  const saveEdit = () => {
    setCategories(
      categories.map((cat) =>
        cat.id === editCategory ? { ...cat, name: editName } : cat
      )
    );
    setEditCategory(null);
    setEditName("");
  };

  // Delete Category
  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Categories</h2>

      {/* Add Category */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={addCategory}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Categories Table */}
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-300">
              <th className="border p-2">ID</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b">
                <td className="border p-2 text-center">{category.id}</td>

                <td className="border p-2">
                  {editCategory === category.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border p-1 w-full"
                    />
                  ) : (
                    category.name
                  )}
                </td>

                <td className="border p-2 text-center space-x-2">
                  {editCategory === category.id ? (
                    <button
                      onClick={saveEdit}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => startEdit(category)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteCategory(category.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
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
  );
}
