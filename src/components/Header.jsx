import '../styles/header.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'


export default function Header(){

    const navigate = useNavigate()
    const [search,setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    return(
            <div className='navbar px-3' style={{backgroundColor:'lightgoldenrodyellow'}}onClick={()=>setShowSearch(false)}>
                <div className='d-flex '>
                    <h1 style={{color:'brown'}} className="comp-logo cursor-pointer me-5">Clays</h1>
                    <button className='my-btn search-icon d-md-none ms-5' onClick={(e)=>{e.stopPropagation();setShowSearch(true)}}>
                        <i class="fa-solid fa-magnifying-glass cursor-pointer" style={{color:'brown'}}></i>
                    </button>
                    {   showSearch &&
                        <span className='position-absolute' style={{left:'20%',top:'15px'}}>
                            <form onSubmit={e=>{e.preventDefault();navigate(`/search?key=${search}`)}}>
                                <input className='sm-search-bar' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search'></input>
                                <button className='btn search-icon'>
                                    <i class="fa-solid fa-magnifying-glass cursor-pointer" style={{color:'brown'}}></i>
                                </button>
                            </form>
                        </span>
                    }
                    <span className='my-auto d-none d-md-flex'>
                        <form onSubmit={e=>{e.preventDefault();navigate(`/search?key=${search}`)}}>
                            <input className='search-bar' value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search'></input>
                            <button className='btn search-icon'>
                                <i class="fa-solid fa-magnifying-glass cursor-pointer" style={{color:'brown'}}></i>
                            </button>
                        </form>
                    </span>
                </div>
                
                <i className="fa-regular fa-circle-user cursor-pointer" style={{color:'#a64c1c',fontSize:'clamp(25px,4vw,30px)'}}
                onClick={(e)=>{e.stopPropagation();navigate("/profile")}}
                ></i>
            </div> 
    )
}