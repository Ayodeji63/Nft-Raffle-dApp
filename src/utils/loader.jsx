import logo from '../logo.svg'
import './index.css'

export function Loader(){
  return <div className='section'><img src={logo} className='loader' alt='loader'/></div>
}