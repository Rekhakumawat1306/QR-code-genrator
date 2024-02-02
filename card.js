
import  React, {useState} from 'react'

const Card = ()=>
{
    const [input,setInput] =useState("")
    const [qr,setQr]=useState("")
    const [isLoading,setIsLoading]=useState("false")
const getQRcode = async (e) =>
{
    e.preventDefault()
    try{
        setIsLoading(true)
        const res= await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
          console.log(res);

        setQr(res.url)

           }
           catch(error){
               console.log(error);
               }
         finally{
        setIsLoading(false);
           }
}



    return (
        <form className ="form" onSubmit = {getQRcode}>
            <h1 className= "title">Qr code generator </h1>
            <input
            type="text"
            className = "input"
            value ={input}

             onChange={(e)=>setInput(e.target.value)}
             required
             placeholder="Enter url or text"
       />    

      {isLoading && <div className ="loading"><span></span>..</div>}
 {!isLoading &&( qr ? <img className='qr_code' src = {qr} alt ="qr_code" />:
 <div className="loading">Generate qr code</div>)}
 <input type="submit" className="submit" value="Generate Qr code"/>


     </form>
    )
}

export default Card

