import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Makeup = () => {
  const MakeupAPI = `http://be-node-week-jad3.vercel.app/makeup`

  const [ makeup, setMakeup ] = useState([])
  const axiosGetHandle = async ()=>{
    const makeupDatas = await axios.get( MakeupAPI );
    // const filter = makeupDatas.data.datas.filter(item=>item.brand === 'glossier')
    // setMakeup( [...filter] );
    setMakeup( [...makeupDatas.data.datas] );
  }
  useEffect(()=>{
     axiosGetHandle();
  }, [])
  return (
    <div className='paddingTop'>
      {
        makeup.length <= 0 ? <h2>Loading...</h2> : makeup.map(item=>
            <div className='card'>
                <h2>{item.brand}</h2>
                <p>{item.name}</p>
                <p>{item.price_sign}{item.price}</p>
                <img src={item.image_link} alt={item.name}/>
            </div>
        )
      }
    </div>
  )
}

export default Makeup


