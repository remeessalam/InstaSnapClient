import { Link, useNavigate } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect, useRef } from "react"

export const SideBar = () => {

    const laptopView = useMediaQuery({ query: '(min-width: 1260px)' })
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [not, setNot] = useState(false)
    const [Search, setSearch] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    let user = ''
    function logout() {
        localStorage.clear()
        navigate('/login')
    }
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])
    return (
        <>
            <div>
                {

                    laptopView &&
                    <div className="flex w-screen h-screen">

                        {/*sideBar page area*/}

                        <div className="flex-none  bg-gray-100 w-[260px]  border-r h-full p-3">
                            {/**title name */}

                            <div className="flex w-full h-24 p-3 pt-4 ">
                                <h1 className="font-serif  text-3xl  font-normal font-sky-900">InstaSnap</h1>
                            </div>

                            {/** Menu items */}
                            <div className="flex flex-col gap-2 w-full h-[600px]">

                                {/**Home button name */}
                                <Link to={'/'}>
                                    <div className="flex flex-row group/items items-center  w-full h-14 hover:bg-gray-200 active:bg-gray-300  rounded-md  ">
                                        <div className='w-10 ml-1'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 group-hover/items:scale-110 duration-300 ">
                                                <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                        <div className="flex  w-full h-full" >
                                            <button className=' flex  items-center min-w-full h-full focus:font-bold '>Home</button>
                                        </div>
                                    </div>
                                </Link>

                                <div className='flex flex-row group/items items-center  w-full h-14  hover:bg-gray-200 active:bg-gray-300  rounded-md  ' onClick={() => setSearch(!Search)}>
                                    <div className='w-10 ml-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 group-hover/items:scale-110 duration-300">
                                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                    <div className="flex  w-full h-full">
                                        <button className=' flex  items-center min-w-full h-full focus:font-bold '>Search</button>

                                    </div>
                                </div>

                                <Link to={'/chat'}>
                                    <div className='flex flex-row group/items items-center w-full h-14  hover:bg-gray-200 active:bg-gray-300 rounded-md   '>
                                        <div className='w-10 ml-1'>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 group-hover/items:scale-110 duration-300">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 group-hover/items:scale-110 duration-300">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                            </svg>


                                        </div>
                                        <div className="flex  w-full h-full">
                                            <button className=' flex  items-center min-w-full h-full focus:font-bold '>Message</button>

                                        </div>
                                    </div>
                                </Link>

                                <div className='flex flex-row group/items items-center w-full h-14 hover:bg-gray-200 active:bg-gray-300 rounded-md    ' onClick={() => setNot(!not)}>
                                    <div className='w-10 ml-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 group-hover/items:scale-110 duration-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>

                                    </div>
                                    <div className="flex  w-full h-full">
                                        <button className=' flex  items-center min-w-full h-full focus:font-bold '>Notifications</button>
                                    </div>
                                </div>

                                <div onClick={() => setOpen(true)} className='flex flex-row group/items items-center w-full h-14  hover:bg-gray-200 active:bg-gray-300 rounded-md    '>
                                    <div className='w-10 ml-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 group-hover/items:scale-110 duration-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>


                                    </div>

                                    <div className="flex  w-full h-full">
                                        <button className=' flex  items-center min-w-full h-full focus:font-bold '>Create</button>
                                    </div>

                                </div>

                                <Link to={'/profile'}>
                                    <div className='flex flex-row group/items items-center w-full h-14 hover:bg-gray-200 active:bg-gray-300 rounded-md   '>
                                        <div className='w-10 ml-1'>
                                            <img
                                                className="h-7 w-7 rounded-full aspect-square object-cover group-hover/items:scale-110 duration-300"
                                                src="https://res.cloudinary.com/dgveluvei/image/upload/v1684829707/id5yzihsyttskgfjzbuu.jpg"
                                                alt=""
                                            />
                                             {/* {
                                                : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 group-hover/items:scale-110 duration-300">
                                                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                                                </svg>
                                            } */}
                                        </div>
                                        <div className="flex  w-full h-full">
                                            <button className=' flex  items-center min-w-full h-full focus:font-bold '>Profile</button>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                            {/** Menu items Ends*/}

                            <div className="flex  w-full h-40 pt-16 p- pr-">
                                <div className="flex flex-row w-full items-center " onClick={handleMenuToggle}>
                                    <div className="flex  w-10 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>

                                    </div>
                                    <div className="w-full h-full ml-3">
                                        <button className="flex  items-center min-w-full h-full focus:font-bold "  >More</button>
                                        {isMenuOpen && (
                                            <div ref={menuRef} className="absolute bottom-20 left-4 mt-8 bg-white w-72 max-h-96 p-2 rounded-md shadow-md">
                                                {/* Menu content */}
                                                <ul className="flex flex-col  items-center justify-center p-1">
                                                    <li className="py-3 pl-4 w-full h-12 active:bg-gray-300 text-start text-sm justify-center hover:bg-gray-200 rounded-md">
                                                        <div className="flex flex-row items-center w-full gap-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                                            </svg>
                                                            <button className="w-full text-start">Switch appearance</button>


                                                        </div>
                                                    </li>
                                                    <li className="py-3 pl-4 w-full h-12 active:bg-gray-300 text-start text-sm justify-center hover:bg-gray-200 rounded-md">
                                                        <div className="flex flex-row items-center w-full gap-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                            </svg>
                                                            <button className="w-full text-start">Saved</button>

                                                        </div>
                                                    </li>
                                                    <div className="w-full h-full  border-b-4 pb-2 border-slate-100">
                                                    </div>
                                                    <div className="w-full h-full pt-2  border-slate-50">
                                                        <li className="py-3 pl-4 w-full h-12 active:bg-gray-300 text-start text-sm justify-center hover:bg-gray-200 rounded-md">
                                                            <button className="w-full text-start"  >Switch accounts</button>
                                                        </li>
                                                        <hr className="w-full border mt-3 mb-3 border-slate-100" />
                                                        <li className="py-3 pl-4 w-full h-12 active:bg-gray-300  text-sm justify-center hover:bg-gray-200 rounded-md">
                                                            <button className="w-full text-start" onClick={logout} >logout</button>
                                                        </li>
                                                    </div>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*home page area*/}
                        <div className="flex shrink justify-center  w-full h-screen bg--100 pt-6 overflow-hidden overflow-y-auto">

                            <div className="flex flex-col   w-[600px] h-full  gap-9   px-16">



                                {/* post area */}
                                <div className="flex flex-col border-b  w-full min-h-[800px]">
                                    <div className="flex flex-row items-center w-full h-14  pl-1 pb-2">
                                        <div className="">
                                            <img className="rounded-full object-cover w-8 h-8" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="no" />
                                        </div>
                                        <div className=" max-w-[351px] flex flex-col h-full justify-center">
                                            <h4 className="font-semibold text-sm truncate max-w-[350px] ml-2">muhammed_remees_ <span><p className="inline text-md text-gray-500 text-center h-full">. </p></span><span><p className="inline  text-gray-500">1d</p></span></h4>
                                            <h4 className="font-normal text-xs truncate max-w-[350px] ml-2">kottayam,kerala,india</h4>
                                        </div>
                                    </div>
                                    <div className="border rounded border-gray-200 bg-violet-200 min-h-[552px] w-full  max-h-[553px] overflow-hidden">
                                        <img className="max-h-[553px] object-cover w-full " src="https://res.cloudinary.com/dgveluvei/image/upload/v1684834514/ef9cookzczgfiqnzfhfc.jpg" alt="" />
                                    </div>
                                    <div className=" h-40">
                                        <div className="flex justify-between  items-center h-12">
                                            <div className="flex gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                </svg>

                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col justify-evenly h-28">
                                            <div>
                                                <p className="text-sm font-semibold">ishal_make_over 𝕹𝖊𝖜𝕺𝖓𝖊♥️🖇️</p>
                                            </div>
                                            <div>
                                                <button className="text-sm text-gray-500">more</button>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">view all 5 comments</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className=" flex flex-wrap justify-between items-start w-full h-full">
                                        {/* <input className=" flex flex-wrap w-11/12 min-h-10 text-sm focus:outline-0 max-h-26 resize-none" type="text" placeholder="Add comments...." /> */}
                                        <textarea className=" flex flex-wrap w-11/12  text-sm focus:outline-0 max-h-10 resize-none" placeholder="Add comments..."></textarea>
                                        <button className="w-1/12 text-md font-semibold  text-blue-400">post</button>
                                    </div>
                                </div>
                                {/* End post area */}


                                {/**---------------------------------------------- COPY-------------------------------------------------- */}

                                <div className="flex flex-col border-b  w-full min-h-[800px]">
                                    <div className="flex flex-row items-center w-full h-14  pl-1 pb-2">
                                        <div className="">
                                            <img className="rounded-full w-8 h-8" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="no" />
                                        </div>
                                        <div className=" max-w-[351px] flex flex-col h-full justify-center">
                                            <h4 className="font-semibold text-sm truncate max-w-[350px] ml-2">muhammed_remees_ <span><p className="inline text-md text-gray-500 text-center h-full">. </p></span><span><p className="inline  text-gray-500">1d</p></span></h4>
                                            <h4 className="font-normal text-xs truncate max-w-[350px] ml-2">kottayam,kerala,india</h4>
                                        </div>
                                    </div>
                                    <div className="border rounded border-gray-200 bg-violet-200 min-h-[552px] w-full  max-h-[553px] overflow-hidden">
                                        <img className="max-h-[553px] object-cover w-full " src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="" />
                                    </div>
                                    <div className=" h-40">
                                        <div className="flex justify-between  items-center h-12">
                                            <div className="flex gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                </svg>

                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col justify-evenly h-28">
                                            <div>
                                                <p className="text-sm font-semibold">ishal_make_over 𝕹𝖊𝖜𝕺𝖓𝖊♥️🖇️</p>
                                            </div>
                                            <div>
                                                <button className="text-sm text-gray-500">more</button>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">view all 5 comments</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className=" flex flex-wrap justify-between items-start w-full h-full">
                                        {/* <input className=" flex flex-wrap w-11/12 min-h-10 text-sm focus:outline-0 max-h-26 resize-none" type="text" placeholder="Add comments...." /> */}
                                        <textarea className=" flex flex-wrap w-11/12  text-sm focus:outline-0 max-h-10 resize-none" placeholder="Add comments..."></textarea>
                                        <button className="w-1/12 text-md font-semibold  text-blue-400">post</button>
                                    </div>
                                </div>
                                <div className="flex flex-col border-b  w-full min-h-[800px]">
                                    <div className="flex flex-row items-center w-full h-14  pl-1 pb-2">
                                        <div className="">
                                            <img className="rounded-full w-8 h-8" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="no" />
                                        </div>
                                        <div className=" max-w-[351px] flex flex-col h-full justify-center">
                                            <h4 className="font-semibold text-sm truncate max-w-[350px] ml-2">muhammed_remees_ <span><p className="inline text-md text-gray-500 text-center h-full">. </p></span><span><p className="inline  text-gray-500">1d</p></span></h4>
                                            <h4 className="font-normal text-xs truncate max-w-[350px] ml-2">kottayam,kerala,india</h4>
                                        </div>
                                    </div>
                                    <div className="border rounded border-gray-200 bg-violet-200 min-h-[552px] w-full  max-h-[553px] overflow-hidden">
                                        <img className="max-h-[553px] object-cover w-full " src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="" />
                                    </div>
                                    <div className=" h-40">
                                        <div className="flex justify-between  items-center h-12">
                                            <div className="flex gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                </svg>

                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col justify-evenly h-28">
                                            <div>
                                                <p className="text-sm font-semibold">ishal_make_over 𝕹𝖊𝖜𝕺𝖓𝖊♥️🖇️</p>
                                            </div>
                                            <div>
                                                <button className="text-sm text-gray-500">more</button>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">view all 5 comments</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className=" flex flex-wrap justify-between items-start w-full h-full">
                                        {/* <input className=" flex flex-wrap w-11/12 min-h-10 text-sm focus:outline-0 max-h-26 resize-none" type="text" placeholder="Add comments...." /> */}
                                        <textarea className=" flex flex-wrap w-11/12  text-sm focus:outline-0 max-h-10 resize-none" placeholder="Add comments..."></textarea>
                                        <button className="w-1/12 text-md font-semibold  text-blue-400">post</button>
                                    </div>
                                </div>
                                <div className="flex flex-col border-b  w-full min-h-[800px]">
                                    <div className="flex flex-row items-center w-full h-14  pl-1 pb-2">
                                        <div className="">
                                            <img className="rounded-full w-8 h-8" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="no" />
                                        </div>
                                        <div className=" max-w-[351px] flex flex-col h-full justify-center">
                                            <h4 className="font-semibold text-sm truncate max-w-[350px] ml-2">muhammed_remees_ <span><p className="inline text-md text-gray-500 text-center h-full">. </p></span><span><p className="inline  text-gray-500">1d</p></span></h4>
                                            <h4 className="font-normal text-xs truncate max-w-[350px] ml-2">kottayam,kerala,india</h4>
                                        </div>
                                    </div>
                                    <div className="border rounded border-gray-200 bg-violet-200 min-h-[552px] w-full  max-h-[553px] overflow-hidden">
                                        <img className="max-h-[553px] object-cover w-full " src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="" />
                                    </div>
                                    <div className=" h-40">
                                        <div className="flex justify-between  items-center h-12">
                                            <div className="flex gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                </svg>

                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col justify-evenly h-28">
                                            <div>
                                                <p className="text-sm font-semibold">ishal_make_over 𝕹𝖊𝖜𝕺𝖓𝖊♥️🖇️</p>
                                            </div>
                                            <div>
                                                <button className="text-sm text-gray-500">more</button>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">view all 5 comments</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className=" flex flex-wrap justify-between items-start w-full h-full">
                                        {/* <input className=" flex flex-wrap w-11/12 min-h-10 text-sm focus:outline-0 max-h-26 resize-none" type="text" placeholder="Add comments...." /> */}
                                        <textarea className=" flex flex-wrap w-11/12  text-sm focus:outline-0 max-h-10 resize-none" placeholder="Add comments..."></textarea>
                                        <button className="w-1/12 text-md font-semibold  text-blue-400">post</button>
                                    </div>
                                </div>
                                <div className="flex flex-col border-b  w-full min-h-[800px]">
                                    <div className="flex flex-row items-center w-full h-14  pl-1 pb-2">
                                        <div className="">
                                            <img className="rounded-full w-8 h-8" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="no" />
                                        </div>
                                        <div className=" max-w-[351px] flex flex-col h-full justify-center">
                                            <h4 className="font-semibold text-sm truncate max-w-[350px] ml-2">muhammed_remees_ <span><p className="inline text-md text-gray-500 text-center h-full">. </p></span><span><p className="inline  text-gray-500">1d</p></span></h4>
                                            <h4 className="font-normal text-xs truncate max-w-[350px] ml-2">kottayam,kerala,india</h4>
                                        </div>
                                    </div>
                                    <div className="border rounded border-gray-200 bg-violet-200 min-h-[552px] w-full  max-h-[553px] overflow-hidden">
                                        <img className="max-h-[553px] object-cover w-full " src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="" />
                                    </div>
                                    <div className=" h-40">
                                        <div className="flex justify-between  items-center h-12">
                                            <div className="flex gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                </svg>

                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col justify-evenly h-28">
                                            <div>
                                                <p className="text-sm font-semibold">ishal_make_over 𝕹𝖊𝖜𝕺𝖓𝖊♥️🖇️</p>
                                            </div>
                                            <div>
                                                <button className="text-sm text-gray-500">more</button>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">view all 5 comments</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className=" flex flex-wrap justify-between items-start w-full h-full">
                                        {/* <input className=" flex flex-wrap w-11/12 min-h-10 text-sm focus:outline-0 max-h-26 resize-none" type="text" placeholder="Add comments...." /> */}
                                        <textarea className=" flex flex-wrap w-11/12  text-sm focus:outline-0 max-h-10 resize-none" placeholder="Add comments..."></textarea>
                                        <button className="w-1/12 text-md font-semibold  text-blue-400">post</button>
                                    </div>
                                </div>
                                <div className="flex flex-col border-b  w-full min-h-[800px]">
                                    <div className="flex flex-row items-center w-full h-14  pl-1 pb-2">
                                        <div className="">
                                            <img className="rounded-full w-8 h-8" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="no" />
                                        </div>
                                        <div className=" max-w-[351px] flex flex-col h-full justify-center">
                                            <h4 className="font-semibold text-sm truncate max-w-[350px] ml-2">muhammed_remees_ <span><p className="inline text-md text-gray-500 text-center h-full">. </p></span><span><p className="inline  text-gray-500">1d</p></span></h4>
                                            <h4 className="font-normal text-xs truncate max-w-[350px] ml-2">kottayam,kerala,india</h4>
                                        </div>
                                    </div>
                                    <div className="border rounded border-gray-200 bg-violet-200 min-h-[552px] w-full  max-h-[553px] overflow-hidden">
                                        <img className="max-h-[553px] object-cover w-full " src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="" />
                                    </div>
                                    <div className=" h-40">
                                        <div className="flex justify-between  items-center h-12">
                                            <div className="flex gap-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                                </svg>

                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                                </svg>

                                            </div>
                                        </div>

                                        <div className="w-full flex flex-col justify-evenly h-28">
                                            <div>
                                                <p className="text-sm font-semibold">ishal_make_over 𝕹𝖊𝖜𝕺𝖓𝖊♥️🖇️</p>
                                            </div>
                                            <div>
                                                <button className="text-sm text-gray-500">more</button>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">view all 5 comments</p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className=" flex flex-wrap justify-between items-start w-full h-full">
                                        {/* <input className=" flex flex-wrap w-11/12 min-h-10 text-sm focus:outline-0 max-h-26 resize-none" type="text" placeholder="Add comments...." /> */}
                                        <textarea className=" flex flex-wrap w-11/12  text-sm focus:outline-0 max-h-10 resize-none" placeholder="Add comments..."></textarea>
                                        <button className="w-1/12 text-md font-semibold  text-blue-400">post</button>
                                    </div>
                                </div>





                                {/**---------------------------------------- END COPY----------------------------------------- */}
                            </div>


                            {/** ---------------------------------  Friend suggetion area ------------------------ */}


                            <div className="flex flex-col items-end gap-5 w-96  pt-6 pl-16">



                                <div className="flex gap-4 items-center w-80 h-14 pl-4">
                                    <img className="w-11 h-11 object-cover rounded-full" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684829707/id5yzihsyttskgfjzbuu.jpg" alt="" />
                                    <div className="flex flex-col">
                                        <h3 className="text-sm font-semibold">rem_ee_s__sa_lam_</h3>
                                        <h3 className="text-sm text-gray-500">REMEES SALAM</h3>
                                    </div>
                                </div>


                                <div className="flex flex-col items-between w-full">


                                    <div className="flex justify-between w-full">
                                        <p className="text-sm text-gray-500 font-semibold">Suggested for you</p>
                                        <button className="text-xs font-medium">See All</button>
                                    </div>




                                    <div className="flex gap-4 justify-center items-center justify-between w-80 h-14 ">
                                        <div className="flex gap-2">
                                            <div className="w-12 h-12">
                                                <img className="w-11 h-11 object-cover rounded-full" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684736154/drkinnk8rbtjswy1rcyy.jpg" alt="" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-sm font-semibold">mahinsha</h3>
                                                <div className="flex flex-wrap">
                                                    <p className="text-xs text-gray-500 ">Followed by </p>
                                                    <p className="text-xs text-gray-500 truncate max-w-[90px] ml-1 mr-1"> ad_hil_mohammed_</p>
                                                    <p className="text-xs text-gray-500">+14 more</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className="text-xs text-sky-400 font-semibold">Follow</button>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-center items-center justify-between w-80 h-14 ">
                                        <div className="flex gap-2">
                                            <div className="w-12 h-12">
                                                <img className="w-11 h-11 object-cover rounded-full" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684834514/ef9cookzczgfiqnzfhfc.jpg" alt="" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-sm font-semibold">manikandan</h3>
                                                <div className="flex flex-wrap">
                                                    <p className="text-xs text-gray-500 ">Followed by </p>
                                                    <p className="text-xs text-gray-500 truncate max-w-[90px] ml-1 mr-1"> tom_happy_cruse</p>
                                                    <p className="text-xs text-gray-500">+5 more</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className="text-xs text-sky-400 font-semibold">Follow</button>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-center items-center justify-between w-80 h-14 ">
                                        <div className="flex gap-2">
                                            <div className="w-12 h-12">
                                                <img className="w-11 h-11 object-cover rounded-full" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684834540/drlwuacbpooompoxi952.jpg" alt="" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-sm font-semibold">mr.thoppi</h3>
                                                <div className="flex flex-wrap">
                                                    <p className="text-xs text-gray-500 ">Followed by </p>
                                                    <p className="text-xs text-gray-500 truncate max-w-[90px] ml-1 mr-1">s_pider_man__</p>
                                                    <p className="text-xs text-gray-500">+3 more</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className="text-xs text-sky-400 font-semibold">Follow</button>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 justify-center items-center justify-between w-80 h-14 ">
                                        <div className="flex gap-2">
                                            <div className="w-12 h-12">
                                                <img className="w-11 h-11 object-cover rounded-full" src="https://res.cloudinary.com/dgveluvei/image/upload/v1684754082/bi9azxd1mdtz4gxif2wy.jpg" alt="" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className="text-sm font-semibold">tom halland</h3>
                                                <div className="flex flex-wrap">
                                                    <p className="text-xs text-gray-500 ">Followed by </p>
                                                    <p className="text-xs text-gray-500 truncate max-w-[90px] ml-1 mr-1"> tom_cruise_</p>
                                                    <p className="text-xs text-gray-500 truncate">+1 more</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className="text-xs text-sky-400 font-semibold">Follow</button>
                                        </div>
                                    </div>


                                   



                                </div>
                            </div>


                            {/** --------------------------------- End Friend suggetion area ------------------------ */}

                        </div>
                    </div>
                }
            </div>
        </>
    )
}








