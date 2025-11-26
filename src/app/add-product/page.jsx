"use client"
import React from 'react'

export default function page() {

    const handleAddProduct = async (e) => {
        e.preventDefault()
        const title = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const image = e.target.imageURL.files[0];
        const newProduct = { title, description, price, image }
        // console.log(title, description, price);
        // console.log(image);
        const productImage=e.target.imageURL.files[0];
        const formData=new formData()
        formData.append('image',productImage)
        

        const res = await fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();


    }

    return (
        <div className="card bg-base-100 my-15 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body py-12">
                <h1 className='text-center text-3xl font-bold mb-5'>Add A New Product</h1>
                <form onSubmit={handleAddProduct} className="fieldset">
                    <label className="label">Name</label>
                    <input required name='name' type="text" className="input" placeholder="Product Name" />
                    <label className="label">Price</label>
                    <input required name='price' type="number" className="input" placeholder="Product Price" />
                    <label className="label">Product Image</label>
                    <input required name='imageURL' type="file" className="file-input" placeholder="Product Image URL" />
                    <label className="label">Description</label>
                    <textarea required name='description' className="textarea" placeholder="Product Description" rows={5} ></textarea>

                    <button className="btn btn-neutral mt-4">Add Product</button>
                </form>
            </div>
        </div>


    )
}
