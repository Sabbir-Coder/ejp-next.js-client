"use client";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const title = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const productImage = e.target.imageURL.files[0];

    const formData = new FormData();
    formData.append("image", productImage);

    // IMGBB Upload URL
    const imageUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;

    try {
      // Upload image to IMGBB
      const imageRes = await axios.post(imageUrl, formData);
      const uploadedImageUrl = imageRes.data.data.url;

      const newProduct = {
        title,
        description,
        price,
        image: uploadedImageUrl,
      };

      // POST Product to Server
      const res = await fetch(
        "https://ejp-next-js-server.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      const data = await res.json();
      console.log("Product saved:", data);

      Swal.fire({
        title: "Good job!",
        text: "You added a product!",
        icon: "success",
      });

      router.push("/products");
    } catch (error) {
      console.error("Error uploading image or saving product:", error);
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  return (
    <div className="card bg-[#cecece] my-15 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body py-12">
        <h1 className="text-center text-3xl font-bold mb-5 bg-linear-to-r from-purple-900 via-blue-500 to-green-100 bg-clip-text text-transparent">
          Add A New Product
        </h1>

        <form onSubmit={handleAddProduct} className="fieldset">
          <label className="label">Name</label>
          <input
            required
            name="name"
            type="text"
            className="input bg-white"
            placeholder="Product Name"
          />

          <label className="label">Price</label>
          <input
            required
            name="price"
            type="number"
            className="input bg-white"
            placeholder="Product Price"
          />

          <label className="label">Product Image</label>
          <input
            required
            name="imageURL"
            type="file"
            className="file-input bg-white"
          />

          <label className="label">Description</label>
          <textarea
            required
            name="description"
            className="textarea bg-white"
            placeholder="Product Description"
            rows={5}
          ></textarea>

          <button className="btn btn-neutral mt-4">Add Product</button>
        </form>
      </div>
    </div>
  );
}
