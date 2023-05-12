import { GoogleLogin } from '@react-oauth/google';
import { useForm } from 'react-hook-form';

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (formData) => {
        console.log(formData)
    }
    return (
        <>
            <div className="flex h-screen w-screen  justify-center bg-white">
                <div className="bg-white w-[380px] m-2 md:m-7 md:w-3/6 lg:w-2/6 border border-slate-200 shadow-2xl shadow-gray-500 ">

                    <div className="m-6  p-3">

                        {/* application name*/}
                        <h1 className="text-center text-5xl font-Poppins font-light tracking-tight text-sky-900">
                            InstaSnap
                        </h1>
                        <p className='text-center text-gray-400 font-bold mt-9 mb-10 pb-4'>Sign up to see photos and videos from <br /> <span>your friends.</span></p>

                        {/* google button */}
                        <button type="submit" className="flex w-full justify-center">
                            <GoogleLogin onSuccess={response => console.log(response)} onError={() => console.log('Login Failed')} />
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
                                    <input className=' w-full h-10 border border-gray-300 text-center focus:text-start pl-2 focus:outline-none focus:border-orange-300' type="email" placeholder='Email'
                                        {...register("email", {
                                            required: { value: true, message: "Email is required" },
                                            pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Enter a valid email" }
                                        })} />
                                    {errors.email && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-red-900'>{errors.email.message}</p>}
                                </div>
                                <div className='w-full mb-5'>
                                    <input className=' w-full h-10 border border-gray-300 text-center focus:text-start pl-2 focus:outline-none focus:border-green-600' type="password" placeholder='Password'
                                        {...register("password", { required: { value: true, message: "Password required" }, minLength: { value: 8, message: "Password should be 8 characters long" } })} />
                                    {errors.password && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-red-900'>{errors.password.message}</p>}
                                    {/* <span className='fixed'>hide</span> */}
                                </div>
                            </div>
                            <div className='w-full flex justify-center'>
                                <button
                                    type="submit"
                                    className="flex w-[300px] justify-center rounded-md border border-transparent bg-[#0ea5e9] py-2 px-4 text-sm font-medium text-white hover:bg-sky-600 "
                                >
                                    Sign up
                                </button>
                                {/* {
                                error ? <p className='text-center text-red-600 pt-3'>{error}</p>
                                    : <p></p>
                            } */}

                            </div>
                        </form>
                    </div>
                    {/* loging page redirect*/}
                    <div className=' m-6 h-36 flex justify-center items-center'>
                        <p className='font-Poppins'>Have an account ? <button className='text-blue-900 text-normal font-semibold'>login</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}
{/* <form className="mt-8 space-y-6" action="" onSubmit={handleSubmit} method="">
<input type="hidden" name="remember" defaultValue="true" />
<div className="-space-y-px rounded-md shadow-sm">
    <div>
        <input type="text" placeholder='Full Name' className="relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
            {...register("fullName", {
                required: { value: true, message: "Enter Full Name" },
                minLength: { value: 4, message: 'Enter Name' }
            })} />
        {errors.fullName && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-gray-900'>{errors.fullName.message}</p>}
    </div>
    <div>
        <input type="text" placeholder='Email' className="relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-3"
            {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Enter a valid email" }
            })} />
        {errors.email && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-gray-900'>{errors.email.message}</p>}
    </div>
    <div>
        <input type="password" placeholder='Password' className="relative block w-full appearance-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mt-3"
            {...register("password", { required: { value: true, message: "Password required" }, minLength: { value: 8, message: "Password should be 8 characters long" } })} />
        {errors.password && <p className=' mt-1 text-center text-1xl font-sans font-light tracking-tight text-gray-900'>{errors.password.message}</p>}
    </div>
</div>

<div>
    <button
        type="submit"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#0ea5e9] py-2 px-4 text-sm font-medium text-white hover:bg-[#0ea5e9] "
    >

        Sign up
    </button>
    {
        error ? <p className='text-center text-red-600 pt-3'>{error}</p>
            : <p></p>
    }

</div>
</form> */}