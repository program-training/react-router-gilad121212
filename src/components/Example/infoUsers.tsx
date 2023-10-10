import { useParams } from 'react-router-dom'
import {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
interface OutletContext{
    id: number,
    name: string,
    username: string,
    email: number,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    }
}
type contactParms = {
    userId:string
}
export default function UsersInfo(){
    const params = useParams()
    const [user,setUser]=useState<OutletContext | null>(null)
    const [userId]=useState(params.id)
    useEffect(()=>{
        const data = async ()=>{
            console.log(userId)
            const User = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const userJ = await User.json()
            setUser(userJ)
        }
        data()
    })
   if (user)
    return(
        <>
        <h1>id: {user.id}</h1>
        <h3> name: {user.email}</h3>
        <h3>address: {user.address.city}</h3>
        <Link to={`/mishen/${user.id}`}>mishen</Link>
        <Link to="/">Home</Link>
        </>
    )
}






