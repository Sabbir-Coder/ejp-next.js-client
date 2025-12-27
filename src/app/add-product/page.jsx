"use client";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { FaBox, FaDollarSign, FaCloudUploadAlt, FaAlignLeft, FaFileAlt, FaMagic, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    const title = e.target.name.value;
    const description = e.target.description.value;
    const longDescription = e.target.longDescription.value;
    const price = e.target.price.value;
    const fileInput = e.target.imageURL;
    const productImage = fileInput.files[0];

    // Basic Validation
    if (!productImage && !imagePreview) {
      Swal.fire("Error", "Please select an image", "warning");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", productImage);

    const imageUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;

    try {
      const imageRes = await axios.post(imageUrl, formData);
      const uploadedImageUrl = imageRes.data.data.url;

      const newProduct = {
        title,
        description,
        longDescription,
        price,
        image: uploadedImageUrl,
      };

      const res = await fetch(
        "https://asset-verse-backend.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      const data = await res.json();

      Swal.fire({
        title: "Product Published!",
        text: "Your product is now live in the store.",
        icon: "success",
        confirmButtonColor: "#2563eb",
      });

      router.push("/products");
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error!", "Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => router.back()} className="flex items-center text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Products
        </button>

        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 border border-slate-100 ring-1 ring-slate-900/5">

          {/* Left Panel: Visual & Image Upload */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight mb-2">Create New Product</h2>
              <p className="text-blue-100 text-sm opacity-90 leading-relaxed">Showcase your item to the world. High-quality images attract more buyers.</p>
            </div>

            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="mt-8 relative z-10 flex-grow flex flex-col justify-center">
              <div className="w-full aspect-square bg-white/10 backdrop-blur-md rounded-3xl border-2 border-dashed border-white/30 flex items-center justify-center relative overflow-hidden group hover:bg-white/20 transition-all cursor-pointer shadow-lg">
                <input
                  type="file"
                  name="imageURL"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  title="Upload Image"
                  required
                />

                {imagePreview ? (
                  <div className="relative w-full h-full">
                    <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-semibold flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"><FaMagic /> Change Image</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-6 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm shadow-inner">
                      <FaCloudUploadAlt className="text-3xl text-white" />
                    </div>
                    <p className="font-bold text-lg">Upload Photo</p>
                    <p className="text-xs mt-2 text-blue-100 opacity-80">Click or Drag & Drop</p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-center text-xs mt-6 text-blue-200 opacity-70">Supported: JPG, PNG, WEBP</p>
          </div>

          {/* Right Panel: Form Fields */}
          <div className="lg:col-span-3 p-8 lg:p-12 bg-white">
            <form onSubmit={handleAddProduct} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control group">
                  <label className="label text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ">
                    <FaBox className="text-blue-500" /> Product Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="input w-full bg-slate-50 border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl transition-all font-medium text-slate-800 placeholder:text-slate-400 h-12"
                    placeholder="e.g. Ergonomic Chair"
                  />
                </div>

                <div className="form-control group">
                  <label className="label text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FaDollarSign className="text-blue-500" /> Price
                  </label>
                  <input
                    required
                    name="price"
                    type="number"
                    step="0.01"
                    className="input w-full bg-slate-50 border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl transition-all font-medium text-slate-800 placeholder:text-slate-400 h-12"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FaAlignLeft className="text-blue-500" /> Short Description
                </label>
                <textarea
                  required
                  name="description"
                  className="textarea w-full bg-slate-50 border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl transition-all font-medium text-slate-800 placeholder:text-slate-400 h-24 resize-none leading-relaxed text-sm py-3"
                  placeholder="A quick summary (max 150 chars)..."
                  maxLength={150}
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FaFileAlt className="text-blue-500" /> Detailed Description
                </label>
                <textarea
                  required
                  name="longDescription"
                  className="textarea w-full bg-slate-50 border-slate-300 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl transition-all font-medium text-slate-800 placeholder:text-slate-400 h-40 resize-none leading-relaxed text-sm py-3"
                  placeholder="Provide full details, specs, and features..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  disabled={loading}
                  className="btn w-full h-14 bg-slate-900 hover:bg-blue-600 text-white border-none rounded-xl text-lg font-bold shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? <span className="loading loading-dots loading-md"></span> : (
                    <>Publish Product <FaMagic className="group-hover:rotate-12 transition-transform" /></>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

        <p className="text-center text-slate-400 text-sm mt-8 pb-8">
          &copy; 2025 NextBuy Seller Central • Secure Publishing
        </p>
      </div>
    </div>
  );
}
