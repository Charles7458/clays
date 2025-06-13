
import Header from '../components/Header.jsx'
import '../styles/home.css'
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from 'react';
import clayBottle from '../assets/clayBottle.jpg'
import healingGourd from '../assets/healingGourd.webp'

function ProductPlaceholder(){
    return(
        <div className='bg-light border justify-self-center' style={{maxWidth:'300px'}}>
            <div style={{height:'200px', width:'100%',backgroundColor:'lightgray'}}>

            </div>
            <div className='justify-content-around'>
                <Placeholder animation='wave'>
                    <Placeholder as={Card.Title} xs={3} size='md' />{' '}
                    <Placeholder as={Card.Title} xs={6} size='md' />
                </Placeholder>
                <Placeholder as={Card.Text} animation='wave' >
                    <Placeholder xs={4} size='xs' bg='secondary'/>{' '}
                    <Placeholder xs={2} size='xs' bg='secondary'/><br/>
                    <Placeholder xs={4} size='xs' bg='secondary'/>
                </Placeholder>
            </div>
        </div>
    )
}

function ProductCard({name, price, review, img}){
    return(
        <div>
            <img src={img} height='200px' style={{backgroundColor:'white'}}/>
            <h5>{name}</h5>
            <h4>₹{price}</h4>
        </div>
    )
}

export default function Home(){

    const [status,setStatus] = useState("loading");
    const [products, setProducts] = useState([])
    const productData = [
        {
            id: 101,
            name:"Sekiro Healing Flask | 500ml",
            price: 799,
            review: 4,
            image: healingGourd,
            category: "Sekiro Gourd"
        },
        {
            id:102,
            name: "Portable Clay Bottle | 500ml",
            price: 399,
            review:3,
            image: clayBottle,
            category: "Household"
        }
    ]

    useEffect(()=>{
        async function fetchProducts(){
            const productList = await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(productData)
            },3000)})
            console.log(productList);
            setProducts(productList)
            setStatus("success")
        }

        fetchProducts()     
    },[])

    if(status=="loading")
    return(
        <div  style={{minHeight:"100vh"}}>
            <h1 className='tag-line mb-5'>Get everyday clay products for your home</h1>
            <div className='products-grid mx-lg-5 row-gap-3 col-gap-0'>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
                <ProductPlaceholder/>
            </div>
        </div>
    )

    if(status=="failed") {
        return(
            <div  style={{minHeight:"100vh"}}>
                <h1 className='tag-line mb-5'>Get everyday clay products for your home</h1>

            </div>
        )
    }

    if(status=="success"){
        return(
            <div className='px-2' style={{minHeight:"100vh"}}>
                <h1 className='tag-line mb-5'>Get everyday clay products for your home</h1>
                <div className='products-grid mx-lg-5 row-gap-3 col-gap-0'>
                    { products.map(product =>{
                        if(product.category.includes("Household"))
                        return <ProductCard name={product.name} price={product.price} review={product.review} img={product.image} />
                    })}
                </div>
                <h2>Explore our exclusive Sekiro gourd collection</h2>
                <div className='products-grid mx-lg-5 row-gap-3 col-gap-0'>
                    { products.map(product =>{
                            if(product.category.includes("Sekiro"))
                            return <ProductCard name={product.name} price={product.price} review={product.review} img={product.image} />
                        })}
                </div>
            </div>
        )
    }


}