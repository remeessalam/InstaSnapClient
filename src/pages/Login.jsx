import { GoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, } from "react-router-dom";
import axios from '../services/axios';

export default function Register() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')


    const onSubmit = async (formData) => {
        try {
            const { data } = await axios.post('/auth/login', formData)
            if (data.status === !false) {
                localStorage.setItem('userToken', JSON.stringify(data.token))

                // localStorage.setItem('userid', JSON.stringify(data?.userid))
                // localStorage.setItem('user', JSON.stringify(data?.user))
                // dispatch(userReducer())
                navigate('/')
            }
            else {
                setError(data.error)
            }
        }
        catch (err) {
            console.log('login error=====',err )
        }
    }


    useEffect(() => {
        const token = localStorage.getItem('userToken')
        if (token) {
            navigate('/')
        }
    })

    const googleAuth = (credentialResponse) => {
        console.log(credentialResponse)
    }
    return (
        <>
            <div className="flex w-screen h-screen bg-white justify-center items-center">
                <div className=" bg-white w-[380px] m-2 md:m-7 md:w-3/6 lg:w-2/6 border border-slate-200 shadow-2xl shadow-gray-500 ">

                    <div className="m-6  p-3">

                        {/* application name*/}
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png"
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-center text-3xl font-serif font-light tracking-tight text-sky-900">
                                InstaSnap
                            </h2>

                        </div>



                        {/* form */}
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-col items-center w-full mt-6'>
                                <div className='flex flex-col items-center w-full mb-5'>
                                    <input className=' w-3/4 h-10 border border-gray-300 text-center focus:text-start pl-2 focus:outline-none focus:border-orange-300' type="email" placeholder='Email'
                                        {...register("email", {
                                            required: { value: true, message: "Email is required" },
                                            pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Enter a valid email" }
                                        })} />
                                    {errors.email && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-red-900'>{errors.email.message}</p>}
                                </div>
                                <div className='flex flex-col items-center relative group/item w-full mb-5'>
                                    <input className=' w-3/4 h-10  border border-gray-300 text-center focus:text-start pl-2 focus:outline-none focus:border-green-600' type={showPassword ? 'text' : 'password'} placeholder='Password'
                                        {...register("password", { required: { value: true, message: "Password required" }, minLength: { value: 8, message: "Password should be 8 characters long" } })} />
                                    {errors.password && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-red-900'>{errors.password.message}</p>}
                                    <span className='absolute top-3 lg:right-16 md:right-14 right-10 bg-gray-300 border rounded-full md:w-10 w-9 text-center text-xs invisible group-hover/item:visible' onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'hide' : 'show'}</span>
                                </div>
                            </div>
                            <div className='w-full flex flex-col items-center'>
                                <button
                                    type="submit"
                                    className="flex justify-center w-[300px] rounded-md border border-transparent bg-[#0ea5e9] py-2 px-4  text-sm font-medium text-white hover:bg-sky-600 active:bg-sky-900"
                                >
                                    Log in
                                </button>
                                {
                                    <div>
                                        {error ? <p className='text-center text-red-600 mt-5'>{error}</p>
                                            : <p></p>}
                                    </div>
                                }

                            </div>
                        </form>
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
                        {/* google button */}
                        <button type="submit" className="flex w-full justify-center">
                            <GoogleLogin onSuccess={googleAuth} onError={() => console.log('Login Failed')} />
                        </button>
                    </div>
                    {/* loging page redirect*/}
                    <div className='sticky m-6 pt-[40px] flex justify-center items-center'>
                        <p className='font-Poppins'>Don&rsquo;t have an account? <button className='text-blue-900 text-normal font-semibold'><Link to={'/createaccount'}>Sign up</Link></button></p>
                    </div>
                </div>
            </div>
        </>
    )
}
