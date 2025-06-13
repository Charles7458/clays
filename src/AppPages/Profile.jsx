import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import '../styles/profile.css'

export default function ProfilePage(){

    const [userData, setUserData] = useState(
    {
        name:"guest72401348432",
        code:"+91",
        phone: "1234567890",
        email: "example@gmail.com",
        password: "oldpassword"
    })

    const [isLogged, setIsLogged] = useState(false)
    const [status, setStatus] = useState("idle")
    const navigate = useNavigate();
    const phoneRegex = new RegExp("^\d{10}$")

    function handleChange(e){
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    const countryCodes = ["+1"," +44","+61","+91","+86","+49","+33","+34","+39","+81"]
    return(
        <div>
            <div className="navbar" style={{backgroundColor:'lightgoldenrodyellow'}}>
                <button className='btn' onClick={()=> navigate("/")}>
                    <i className="fa-solid fa-arrow-left-long fa-2xl" style={{color:'brown'}}></i>
                </button>
            </div>

            
            <div className='p-5' >
                { !isLogged &&
                    <button className='custom-btn mb-5'>
                        Sign Up / Login
                    </button>
                }

                { isLogged &&
                    <button className='custom-btn mb-5'>
                        Edit Profile
                    </button>
                }

                <Form onSubmit={e=>{e.preventDefault();console.log(userData);
                }}>
                    <div className='d-flex flex-wrap w-100 column-gap-4'>
                        
                        <Form.Group className='mb-5 col-12 col-md-6' >
                            <Form.Label className='fs-5 fw-semibold text-brown'>Username</Form.Label>
                            <Col xs="12" md="12">
                                <Form.Control size='lg' type='text' value={userData.name} name="name" onChange={e=>handleChange(e)} 
                                disabled={status!="editing"} isInvalid={userData.name.includes(" ")} />
                            </Col>
                        </Form.Group>

                        <Form.Group className='mb-5 col-12 col-md-5'>
                            <Form.Label className='fs-5 fw-semibold text-brown'>Email</Form.Label>
                            <Col xs="12" md="8">
                                <Form.Control size='lg' type='email' disabled={status!="editing"} placeholder='example@gmail.com' required/>
                            </Col>
                        </Form.Group>

                    </div>
                    
                    <div className='d-flex flex-wrap w-100 column-gap-4'>
                        
                        <Form.Group className='mb-5 col-12 col-md-5'>
                            <Form.Label className='fs-5 fw-semibold text-brown'>Phone Number</Form.Label>
                            <div className='d-flex'>
                                <select value={userData.code} onChange={e=>handleChange(e)} className='phoneCode'>
                                    {countryCodes.map(code=> <option value={`${code}`}>{code}</option>)}
                                </select>
                                <Col xs="8">
                                    <Form.Control size='lg' type='number' disabled={status!="editing"} name='phone' value={userData.phone} onChange={e=>handleChange(e)} className='phoneInput' 
                                    required />
                                </Col>
                            </div>
                        </Form.Group>

                        <Form.Group className='mb-5'>
                            <Form.Label className='fs-5 fw-semibold text-brown'>Gender</Form.Label>
                            <div className='mt-3'>
                                <input type="radio" disabled={status!="editing"} name="gender" onChange={e=>handleChange(e)} /><p className='d-inline ms-2 me-5 fs-5'>Male</p>
                                <input type="radio" disabled={status!="editing"} name="gender" onChange={e=>handleChange(e)} /><p className='d-inline ms-2 me-5 fs-5'>Female</p>
                            </div>
                            
                        </Form.Group>
                    </div>

                    <Form.Group>
                        <Form.Label className='fs-5 fw-semibold text-brown'>Address</Form.Label>
                        <Col>
                            <textarea className='add-box' 
                            placeholder='House No.,
Street,
Area,
State
                            '
                            ></textarea>
                        </Col>
                    </Form.Group>

                    <input type="submit" value="Save Changes" className='custom-btn my-5' disabled={status!="editing"}/>
                    

                    
                </Form>
            </div>
        </div>
    )
}