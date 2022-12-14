import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {

        console.log(data);


        const url = `https://young-sands-62072.herokuapp.com/order`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const { data } = result;
               
                // if (data?.insertedId) {
                    alert('Item added');
                    toast('Your item is added');
                // }
            })
            
    }
    return (
        <div>
            <h3 className='text-center text-danger my-5'>Please Add an Item</h3>

            <div className='w-25 mx-auto'>
                <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-1' type='text' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input type="email" value={user?.email} {...register("email")} />
                    <textarea className='mb-1' placeholder='Description' {...register("shortDescription")} />
                    <input className='mb-1' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-1' placeholder='SupplierName' type="text" {...register("supplier")} />
                    <input className='mb-1' placeholder='photoURL' type="text" {...register("img")} />
                    <input type="submit" value='Add New Item' className='btn bg-warning' />
                    <ToastContainer></ToastContainer>
                   
                </form>
               
            </div>
        </div>
    );
};

export default AddItem;