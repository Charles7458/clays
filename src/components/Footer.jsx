import '../styles/footer.css'

function FList({children}) {
    return(
        <ul className='nav flex-column'>
            {children}
        </ul>
    )
}

function ListHead({children}){
    return(
        <li style={{color:'white'}} className='my-0'><h5>{children}</h5></li>
    )
}

function ListItem({children,link}){
    return(
        <li className="list-links cursor-pointer mt-2"><a onClick={()=>navigate({link})}>{children}</a></li>
    )
}

export default function Footer(){
    return(
        <footer className="bg-secondary d-flex w-100" style={{bottom:'0',fontFamily:"Roboto, sans-serif",color:'lightgray'}}>
            <div className="px-3 d-flex flex-column align-items-center justify-content-center">
                <h1 style={{color:'lightgray'}} className="comp-logo cursor-pointer mb-5">Clays</h1>
                <div>
                    <a href='#'><i className="fa-brands fa-square-x-twitter fa-2xl social-links"></i></a>
                    <a href='#'><i className="fa-brands fa-square-youtube fa-2xl social-links"></i></a>
                    <a href='#'><i className="fa-brands fa-square-instagram fa-2xl social-links"></i></a>
                </div>
                <p className='mt-4'>Clays &copy; .All Rights Reserved.</p>
            </div>
            <div className="d-flex gap-5 px-5" style={{paddingBlock:"100px"}}>

                <FList>
                    
                </FList>
                <FList>
                    <ListHead>About</ListHead>
                    <ListItem link="/about">About Us</ListItem>
                    <ListItem link="/tandc">Terms & Conditions</ListItem>
                    <ListItem link="/privacy">Privacy Policy</ListItem>
                </FList>
                <FList>
                    <ListHead>Customer Care</ListHead>
                    <ListItem link="/feedback">Feedback</ListItem>
                </FList>
            </div>
        </footer>
    )
}