
import Header from '../components/Header.jsx'
import '../styles/home.css'
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';

function ProductPlaceholder({}){
    return(
        <div className='bg-light border justify-self-center' style={{maxWidth:'300px'}}>
            <div style={{height:'100px', width:'100%',backgroundColor:'lightgray'}}>

            </div>
            <div className='justify-content-around'>
                <Placeholder animation='wave'>
                    <Placeholder as={Card.Title} xs={8} size='md' />
                </Placeholder>
                <Placeholder as={Card.Text} animation='wave' >
                    <Placeholder xs={5} size='xs' bg='secondary'/>
                    <Placeholder xs={8} size='xs' bg='secondary'/>
                </Placeholder>
            </div>
            
        </div>
    )
}

export default function Home(){

    const [status,setStatus] = useState("loading");
    

    if(status=="loading")
    return(
        <div >
            <Header/>
            <h1 className='tag-line mb-5'>Get everyday clay products for your home</h1>
            <div className='products-grid p-2 row-gap-3  justify-content-center align-items-center'>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
            </div>
        </div>
    )
}