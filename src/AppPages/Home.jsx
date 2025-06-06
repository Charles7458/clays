
import Header from '../components/Header.jsx'
import '../styles/home.css'
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function ProductPlaceholder({}){
    return(
        <div className='bg-light' style={{maxWidth:'300px'}}>
            <div style={{height:'100px', width:'100%',backgroundColor:'lightgray'}}>

            </div>
            <div className='justify-content-around'>
                <Placeholder animation='wave'>
                    <Placeholder as={Card.Title} xs={8} />
                </Placeholder>
                <Placeholder as={Card.Text} animation='wave' >
                    <Placeholder xs={2}/> <br/>
                    <Placeholder xs={3}/>
                </Placeholder>
            </div>
            
        </div>
    )
}

export default function Home(){
    return(
        <div >
            <Header/>
            <h1 className='tag-line'>Get everyday clay products for your home</h1>
            <div className='products-grid row-gap-3 p-5 justify-content-center align-items-center'>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
            </div>
        </div>
    )
}