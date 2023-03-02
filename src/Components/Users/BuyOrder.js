import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const BuyOrder = () => {
  
    const [orderdata,setorderdata]  = useState(0)

    // useEffect(()=>{
    //     const url = "/buyorder"; 
    //     axios.get(url, config)
    //     .then(res=>{ console.log(res.data)
    //     setorderdata(res.data)
        
    //     })
    //     .catch(err=> console.log(err))
    
    
    
    //   const config = {
    //     // headers:{
    //     //   "accessToken":sessionStorage.getItem('accessToken')
    //     // }
    //   } 
    // },[orderdata])

  

    return (
    <>
          <div>
              <div style={{ fontSize: '14px', marginBottom: '10px', backgroundColor: '#1B202E', padding:"10px"}}>Buy Order Book</div>
              <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between'}}>
                  <div>Price</div>
                  <div>Amount</div>
                  <div>Total</div>

                </div>
                
 {/* Raw Fake Data=================================================================================================================== */}




 <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

              
                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

              
                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

                <div style={{display:'flex', alignItems:'center' , justifyContent:'space-between' , height:'5vh'}}>
                  <div style={{color:'green'}}>1711.8</div>
                  <div>0.8676</div>
                  <div>2344.90</div>

                </div>

              






            {/* Raw Fake Data=================================================================================================================== */}




                {/* {orderdata && orderdata.map((e) => {
                    return <>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>{orderdata.Price}</div>
                  <div>{orderdata.amount}</div>
                  <div>{orderdata.Total}</div>
                        </div>
                    
                    </>
                })} */}





        </div>

      
      </>
  )
}

export default BuyOrder