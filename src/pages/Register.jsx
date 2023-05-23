import { GoogleLogin } from '@react-oauth/google';
import axios from '../services/axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('userToken')
        if (token) {
            navigate('/')
        }
    })

    const onSubmit = async (formData) => {
        try{
            const { data } = await axios.post(`/auth/register`, formData)
            if (data.error) {
                setError(data.error)
            } else {
                setError('')
            }
            console.log(data, 'data received')
            if (data.status === true) {
                (localStorage.setItem('userToken', JSON.stringify(data.token)))
                navigate('/')
            }
            else {
                setError(data.error)
                console.log(data.error)
            }
        }catch(err){
            console.log('signin err====',err)
        }
    }

    const googleAuth = (credentialResponse) => {
        console.log(credentialResponse)
    }

    return (
        <>
            <div className="flex w-screen h-screen bg-white justify-center items-center">
                <div className=" bg-white w-[380px] m-2 md:m-7 md:w-3/6 lg:w-2/6 border border-slate-200 shadow-2xl shadow-gray-500 ">

                    <div className="m-6  p-3">

                        {/* application name*/}
                        <h1 className="text-center text-5xl font-Poppins font-light tracking-tight text-sky-900">
                            InstaSnap
                        </h1>
                        <p className='text-center text-gray-400 font-bold mt-9 mb-10 pb-4'>Sign up to see photos and videos from <br /> <span>your friends.</span></p>

                        {/* google button */}
                        <button type="submit" className="flex w-full justify-center">
                            <GoogleLogin onSuccess={googleAuth} onError={() => console.log('Login Failed')} />
                        </button>

                        {/* sepration */}
                        <div className='flex mx-auto mt-12 mb-7'>
                            <div className='w-5/12 h-7 flex flex-col justify-center'>
                                <hr className='bg-black-700' />
                            </div>
                            <h4 className='text-center font-semibold decoration-[#4a4b4b] px-2 w-2/12'> OR </h4>
                            <div className='w-5/12 h-7 flex flex-col justify-center'>
                                <hr className='bg-black-700' />
                            </div>
                        </div>

                        {/* form */}
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col items-center w-full '>
                                <div className='w-full mb-5' >
                                    <input className=' w-full h-10 border border-gray-300 text-center focus:text-start pl-2 focus:outline-none focus:border-red-600 text-sky-900 ' type="text" placeholder='Full Name'
                                        {...register("fullName", {
                                            required: { value: true, message: "Enter Full Name" },
                                            minLength: { value: 4, message: 'Enter Name' }
                                        })} />
                                    {errors.fullName && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-red-900'>{errors.fullName.message}</p>}
                                </div>
                                <div className='w-full mb-5'>
                                    <input className=' w-full h-10 border border-gray-300 text-center focus:text-start pl-2 focus:outline-none focus:border-orange-300 text-sky-900' type="email" placeholder='Email'
                                        {...register("email", {
                                            required: { value: true, message: "Email is required" },
                                            pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Enter a valid email" }
                                        })} />
                                    {errors.email && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-red-900'>{errors.email.message}</p>}
                                </div>
                                <div className='relative group/item w-full mb-5'>
                                    <input className=' w-full h-10 border border-gray-300 text-center focus:text-start pl-2 focus:outline-none focus:border-green-600 text-sky-900' type={showPassword ? 'text' : 'password'} placeholder='Password'
                                        {...register("password", { required: { value: true, message: "Password required" }, minLength: { value: 8, message: "Password should be 8 characters long" } })}
                                    />
                                    {errors.password && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-red-900'>{errors.password.message}</p>}

                                    <span className='absolute top-3 right-2     bg-gray-300 border rounded-full md:w-10 w-9 text-center text-xs invisible group-hover/item:visible' onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'hide' : 'show'}</span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col items-center'>
                                <button
                                    type="submit"
                                    className="flex justify-center w-[300px] rounded-md border border-transparent bg-[#0ea5e9] py-2 px-4  text-sm font-medium text-white hover:bg-sky-600 active:bg-sky-900"
                                >
                                    Sign up
                                </button>
                                {
                                    <div>
                                        {error ? <p className='text-center text-red-600 mt-5'>{error}</p>
                                            : <p></p>}
                                    </div>
                                }

                            </div>
                        </form>
                    </div>
                    {/* login page redirect*/}
                    <div className='sticky m-6 pt-[40px] flex justify-center items-center'>
                        <p className='font-Poppins'>Have an account ? <button className='text-blue-900 text-normal font-semibold'><Link to={'/login'}>log in</Link></button></p>
                    </div>
                </div>
            </div>
        </>
    )
}
