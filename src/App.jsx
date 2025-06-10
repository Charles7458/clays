import {HashRouter,Routes,Route} from 'react-router-dom'; 
import Home from './AppPages/Home';
import Header from './components/Header'
import Footer from './components/Footer';


function Page({children}){
return(
    <>
        <Header/>
            {children}
        <Footer/>
    </>
    
)
}

export default function App(){
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </HashRouter>
    )
}