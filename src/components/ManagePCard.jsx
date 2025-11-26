"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

export default function ManagePCard({ product, onDelete,index }) {

  const handleDeleteProduct = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:5000/products/${_id}`, {
          method: 'DELETE'
        });
        const data = await res.json();

        if (data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success"
          });
          onDelete(_id);
        }
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  };

  return (
    <div className="h-20 mb-2.5 rounded-lg px-3 md:px-10 bg-[#d4d4d4] w-full flex justify-center items-center">
        <p className="font-bold mr-8">
            {index+1}.
        </p>
      <div className="flex-1">
        <div className="relative w-15 h-15 shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
      <div className="flex-1 font-semibold">
        <h1>{product.title}</h1>
      </div>
      <div className="flex-1 font-bold text-blue-800">
        <h1>${product.price}</h1>
      </div>
      <button 
        onClick={() => handleDeleteProduct(product._id)} 
        className="btn btn-error border-0 mr-5"
      >
        Delete
      </button>
      <Link 
        key={product._id} 
        href={`/products/${product._id}`} 
        className="cursor-pointer bg-indigo-600 text-white py-5 rounded-lg px-7 border-0 btn font-medium hover:bg-indigo-700 transition"
      >
        View
      </Link>
    </div>
  );
}
