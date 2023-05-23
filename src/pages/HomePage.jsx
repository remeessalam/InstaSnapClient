import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { SideBar } from "../layout/sideBar"


export default function HomePage() {
    
    const navigate = useNavigate()
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('userToken'))
        if (token) {
            navigate('/')
        } else {
            navigate('/login')
        }
    }, [navigate])
    return (
        <>
            <SideBar />
            
        </>
    )
}