import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ListProduct = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[index];

  const handleDelete = () => {
    if (window.confirm("apakah anda yakin akan menghapus product ini?")) {
      const updatedProducts = products.filter((_, i) => i !== parseInt(index));
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      navigate(0);
    }
  };

  const handleEdit = () => {
    navigate("/create-product", { state: { product, index } });
  };

  return (
    <div className="container mt-5 detail-container">
      <h2>Product Details</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Image of Product</th>
            <th>Product Freshness</th>
            <th>Additional Description</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 || !product ? (
            <tr>
              <td colSpan="8" className="text-center">
                Tidak ada produk
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <button
                  className="btn btn-link"
                  onClick={() => navigate(`/account/${index}`)}
                >
                  {parseInt(index) + 1}
                </button>
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.image || "default.png"}</td>
              <td>{product.freshness}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button className="btn btn-success btn-sm" onClick={handleEdit}>
                  Edit
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-end mb-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/create-product")}
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ListProduct;