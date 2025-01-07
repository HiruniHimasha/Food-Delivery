import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

    
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        image: null  // Added image to the state
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", data.image);  // Accessing the image from state
        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "",
                    image: null
                });
                setImage(false);
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error submitting form", error);
        }
    }

    return (
        <div className='add'>
            <form className="flex-col" onSubmit={onSubmitHandler}>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.uploadArea} alt="" />
                    </label>
                    <input onChange={(e) => {
                        setImage(e.target.files[0]);
                        setData(data => ({ ...data, image: e.target.files[0] })); // Update image in data object
                    }} 
                    type='file' 
                    id='image' 
                    hidden 
                    required 
                    />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' required />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write Content here' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name='category' required>
                            <option value="">Select Category</option>
                            <option value="Rice and Curry">Rice and Curry</option>
                            <option value="Kottu">Kottu</option>
                            <option value="Sea Food">Sea Food</option>
                            <option value="Devilled Dishes">Devilled Dishes</option>
                            <option value="Hoppers">Hoppers</option>
                            <option value="Noodles">Noodles</option>
                            <option value="Soup">Soup</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Short Eats">Short Eats</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='Rs.100' required />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add;
