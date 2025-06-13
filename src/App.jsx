import {HashRouter,Routes,Route} from 'react-router-dom'; 
import Home from './AppPages/Home';
import Header from './components/Header'
import Footer from './components/Footer';
import ProfilePage from './AppPages/Profile';
import SearchPage from './AppPages/Search';


function Page({children}){
return(
    <div style={{minHeight:'100vh'}}>
        <Header/>
            {children}
        <Footer/>
    </div>
    
)
}

export default function App(){
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<Page><Home/></Page>}/>
                <Route path='/search/:keyword' element={<SearchPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </HashRouter>
    )
}