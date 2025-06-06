import '../styles/header.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';

function NavItem({name,isActive,setActive,setHover, isHover}){
    const navigate = useNavigate();

    return(
        <li className='my-nav-item' onMouseEnter={()=>setHover(name)} onMouseLeave={()=>setHover()}  onClick={()=>setActive(name)} >
            {name}
            <div className={isActive||isHover ? 'line' : 'noline'}></div>
        </li>
    )
}

export default function Header(){

    const navs = ["Contact","About"]
    const [activeNav,setActiveNav] = useState('');
    const [prevactiveNav,setPrevActiveNav] = useState('');
    const [hoverNav,setHoverNav] = useState('');
    return(
            <div className='navbar' style={{backgroundColor:'lightgoldenrodyellow'}}>
                <h1 style={{color:'brown'}} className="ms-4 comp-logo">Clays</h1>   
                <ul className='nav mx-3 d-none d-md-flex' >
                    {navs.map( Item=> {
                        return <NavItem key={Item} name={Item} isActive={activeNav==Item} setActive={setActiveNav} setHover={setHoverNav} isHover={hoverNav==Item}/>
                    })}
                </ul>
                <button className='btn d-md-none'>
                    <i className='fa-solid fa-bars fa-lg'></i>
                </button>
            </div> 
    )
}