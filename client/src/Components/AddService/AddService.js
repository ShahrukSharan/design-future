import axios from 'axios';
import './AddService.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState();
    const onSubmit = data => {
        const eventData = {
            name: data.serviceName,
            description: data.serviceDescription,
            price: data.servicePrice,
            imageURL: imageURL
        };
        console.log(eventData);
        const url = `http://localhost:1590/addServices`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'c757456bf602e2f11f20a19e88267661');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <form className="inputField" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Add Service Title</label>
                <br />
                <input className="service-name" name="name" defaultValue="new service title" {...register("serviceName")} />
                <br />
                <label htmlFor="">Add Service Description</label>
                <br />
                <input className="service-description" name="description" {...register("serviceDescription")} />
                <br/>
                <label htmlFor="">Add Service Price</label>
                <br />
                <input className="service-price" type="text" {...register("servicePrice")} />
                <br/>
                <input className="service-file" type="file" onChange={handleImageUpload} />
                <br/>
                <input className="submit-button" type="submit" />
            </form>
        </div>
    );
};

export default AddService;