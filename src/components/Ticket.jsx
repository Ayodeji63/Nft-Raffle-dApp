import React from 'react'

const Ticket = ({src, submit, num}) => {
  return (
    <div className='ticket' onClick={() => submit(num)}>
            <p>Raffle Ticket</p> 
            <img src={`https://${src}.ipfs.dweb.link/`}  alt="" />
            <span className='mt-2 text-2xl'>{num}</span>
          </div>
  )
}

export default Ticket