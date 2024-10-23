import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/images/bootstrap-logo.png";
import "../assets/styles/CreateProduct.css";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const imageInputRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    const parsedProducts = savedProducts ? JSON.parse(savedProducts) : [];
    setProducts(parsedProducts);
  }, []);

  useEffect(() => {
    if (location.state && location.state.product) {
      const { product } = location.state;
      setValue("productName", product.name);
      setValue("productCategory", product.category);
      setValue("productImage", product.image);
      setValue("productFreshness", product.freshness);
      setValue("productDescription", product.description);
      setValue("productPrice", product.price);
    }
  }, [location.state, setValue]);

  const onSubmit = (data) => {
    const newProduct = {
      name: data.productName,
      category: data.productCategory,
      image: URL.createObjectURL(data.productImage[0]),
      freshness: data.productFreshness,
      description: data.productDescription,
      price: data.productPrice,
    };

    const savedProducts = localStorage.getItem("products");
    const productsList = savedProducts ? JSON.parse(savedProducts) : [];

    if (location.state && location.state.index !== undefined) {
      const updatedProducts = [...productsList];
      updatedProducts[location.state.index] = newProduct;
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      // Tambah produk baru
      const updatedProducts = [...productsList, newProduct];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }

    // Reset Form setelah submit
    Object.keys(data).forEach((field) => setValue(field, ""));
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }

    // Reset kategori produk
    setValue("productCategory", ""); 

    // Refresh daftar produk
    setProducts(JSON.parse(localStorage.getItem("products")));
    navigate("/create-product");
  };

  // Filter produk berdasarkan pencarian
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="container mt-5 detail-container">
      <div className="text-center mb-4">
        <img src={logo} alt="Logo" className="mb-2" />
        <h2>{location.state ? "Edit Product" : "Create Product"}</h2>
        <p
          className="text-muted"
          style={{ maxWidth: "750px", margin: "0 auto" }}
        >
          Below is an example form built entirely with Bootstrap’s form
          controls.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-100"
        style={{ maxWidth: "600px" }}
      >
        <div className="form-group mb-3">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            className={`form-control ${errors.productName ? "is-invalid" : ""}`}
            {...register("productName", {
              required: "Product Name is required",
              pattern: {
                value: /^[a-zA-Z0-9\s]{1,25}$/,
                message:
                  "Product Name must be 1-25 characters and contain only letters, numbers, and spaces.",
              },
            })}
          />
          <div className="invalid-feedback">{errors.productName?.message}</div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="productCategory">Product Category</label>
          <select
            className="form-select"
            {...register("productCategory", {
              required: "Please select a valid product category.",
            })}
          >
            <option value="" disabled selected>
              Choose...
            </option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
          <div className="invalid-feedback">
            {errors.productCategory?.message}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="productImage">Image of Product</label>
          <input
            type="file"
            className={`form-control ${
              errors.productImage ? "is-invalid" : ""
            }`}
            id="productImage"
            ref={imageInputRef}
            {...register("productImage", {
              required: "Please upload a product image.",
              validate: {
                validFileType: (files) => {
                  if (
                    files[0]?.type !== "image/jpeg" &&
                    files[0]?.type !== "image/png"
                  ) {
                    return "Only JPEG and PNG images are allowed.";
                  }
                  return true;
                },
              },
            })}
          />
          <div className="invalid-feedback">{errors.productImage?.message}</div>
        </div>

        <div className="form-group mb-3">
          <label>Product Freshness</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("productFreshness", {
                required: "Please select a freshness option.",
              })}
              value="Brand New"
            />
            <label className="form-check-label">Brand New</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("productFreshness")}
              value="Second Hand"
            />
            <label className="form-check-label">Second Hand</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              {...register("productFreshness")}
              value="Refurbished"
            />
            <label className="form-check-label">Refurbished</label>
          </div>
          <div className="invalid-feedback">
            {errors.productFreshness?.message}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="productDescription">Additional Description</label>
          <textarea
            className="form-control"
            id="productDescription"
            rows="4"
            {...register("productDescription", {
              required: "Description is required.",
            })}
          />
          <div className="invalid-feedback">
            {errors.productDescription?.message}
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="productPrice">Product Price</label>
          <input
            type="number"
            className={`form-control ${
              errors.productPrice ? "is-invalid" : ""
            }`}
            id="productPrice"
            placeholder="$1"
            {...register("productPrice", {
              required: "Product Price is required.",
              pattern: {
                value: /^\d+(\.\d{1,2})?$/,
                message: "Product Price must be a valid number.",
              },
            })}
            min="0"
          />
          <div className="invalid-feedback">{errors.productPrice?.message}</div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {location.state ? "Update Product" : "Submit"}
        </button>
      </form>

      {/* Tabel list product */}
      <h3 className="mt-5 text-center">List Product</h3>
      <div className="search-box mt-4 d-flex justify-content-end mb-4"></div>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Image of Product</th>
            <th>Product Freshness</th>
            <th>Additional Description</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <button
                    className="btn btn-link"
                    onClick={() =>
                      navigate(`/product/${index}`, {
                        state: { product, index },
                      })
                    }
                  >
                    {product.name}
                  </button>
                </td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{product.freshness}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pencarian */}
      <div className="search-box mt-4 d-flex justify-content-end mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by Product Name"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => setSearchProduct(searchProduct)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;