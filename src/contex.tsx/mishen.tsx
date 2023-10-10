import { useParams } from 'react-router-dom'
import {useState,useEffect} from "react";
import { Link } from 'react-router-dom';
export default function Mishen(){
    type parms = {
            userId: number,
            id: number,
            title: string,
            completed: boolean
          }
    const params = useParams()
    const [dataM,setData]=useState<parms[] | null>(null)
    useEffect(()=>{
        const data = async ()=>{
            const mishen = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const mishenj:parms[] = await mishen.json()
            const newArr = []
            for (let arr of mishenj){
                if(arr.userId.toString() === params.id){
                    newArr.push(arr)
                }
            }
            setData(newArr)
        }
        data()
       
    },[])
   if(dataM)
    return(
        dataM.map((arr)=><div>{arr.title}</div>)
    )
}