import React, { useState } from "react";
import { addUser } from "../service/api.js";

const Form = () =>{

    const [user, setUser] = useState({
        name:'',
        mobile:'',
        image:''
    })

    const fileData = (e) =>{
        setUser({...user, image:e.target.files[0]});
    }

    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user)
    }

    const formSubmit = async(e) =>{
        e.preventDefault();
        const {name,mobile,image} = user;
        if(!name){
            alert("Enter Your Name");
        }else if(!mobile){
            alert("Enter Your Mobile");
        }else if(!image){
            alert("Please Upload Image");
        }else{

            const formData = new FormData();
            formData.append('image', user.image, user.image.name)
            formData.append('name', user.name)
            formData.append('mobile', user.mobile)

            const res = await addUser(formData);
            if(res.status === 201){
                alert("Data Successfully Inserted");
            }else{
                alert("Something Went Wrong");
            }
        }
    }

    return(
        <>
            <form>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => onValueChange(e)} placeholder="Enter Name"></input>

                <label>Mobile Number</label>
                <input type="number" name="mobile" onChange={(e) => onValueChange(e)} placeholder="Enter Mobile"></input>

                <label>Image</label>
                <input type="file" onChange={fileData} name="image"></input>

                <button onClick={formSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Form