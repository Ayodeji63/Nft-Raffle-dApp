import './index.css'

export function SelectRole({setAsA}){
  return(
    <div className='section'>
      <button className='button' onClick={() => setAsA(true)}>Deploy Contract</button>
      <hr />
      <button className='button' onClick={() => setAsA(false)}>Attach to existing contract</button>
    </div>
  )
}