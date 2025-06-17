import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const RecruiterLogin = () => {

    const [state, setState] = useState('Login');
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textSubmited, setTextSubmited] = useState(false);
    const { recruiterLogin, setRecruiterLogin } = useContext(AppContext);

    const onSubmitHandler = async (e)=>{

        e.preventDefault();

        if( state == 'SignUp' && !textSubmited){
            setTextSubmited(true);
        }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return ()=>{
            document.body.style.overflow = 'unset'
        }
    },[])

    return (
        <div>
            {
                recruiterLogin && (
                    <div className='flex justify-center items-center z-10 absolute right-0 top-0 bottom-0 left-0 backdrop-blur-sm bg-black/30'>
                        <form onSubmit={e=>onSubmitHandler(e)} className='relative bg-white p-10 rounded-xl text-slate-500'>
                            <h2 className='text-2xl text-center font-medium text-neutral-700'>Recruiter {state}</h2>
                            <p className='text-sm'>Welcome back! Please {state} in to continue</p>

                            { state == 'SignUp' && textSubmited ? 
                                    <>
                                    <div className='flex items-center gap-4 my-10'>
                                    <label htmlFor="image">
                                        <img className='w-16 rounded-full' src={image? URL.createObjectURL(image): assets.upload_area} alt='company logo' />
                                        <input onChange={e=>setImage(e.target.files[0])} type="file" id='image' hidden />
                                    </label>
                                    <p>Upload Company <br /> logo</p>
                                    </div>
                                    </>
                                :
                              <>
                            { state == 'SignUp' && 
                                <div className='border rounded-full px-4 py-2 mt-5 flex items-center gap-2'>
                                <img src={assets.person_icon} alt="person_icon" />
                                <input className='outline-none border-none text-sm' onChange={e => setName(e.target.value)} type="text" value={name} placeholder='Company Name' required />
                                </div>
                            }
                            
                            <div className='border rounded-full px-4 py-2 mt-5 flex items-center gap-2'>
                                <img src={assets.email_icon} alt="email-icon" />
                                 <input className='outline-none border-none text-sm' onChange={e => setEmail(e.target.value)} type="email" value={email} placeholder='Email Id' required />
                                 </div>
                        
                            <div className='border rounded-full px-4 py-2 mt-5 flex items-center gap-2'>
                                <img src={assets.lock_icon} alt="lock-icon" />
                                 <input className='outline-none border-none text-sm' onChange={e => setPassword(e.target.value)} type="password" value={password} placeholder='Password' required />
                                 </div>
                             </>     
                            }

                             {
                                state == 'Login' && (<p className='text-sm mt-4 text-blue-600 cursor-pointer '>Forgot Password?</p>)
                             }
                            
                            <button type='submit' className='w-full my-5 bg-blue-500 text-white py-2 rounded-full cursor-pointer'  >{state == 'Login' ? "Login": textSubmited ? "Create Account" : "Next"}</button>
                            
                            {
                                state == "Login" ?
                                <p className='text-center'>Don't have an Account? <span className='text-blue-600 cursor-pointer' onClick={e=>setState('SignUp')}>Sign Up</span></p>
                                : <p className='text-center'>Already hava an Account? <span className='text-blue-600 cursor-pointer' onClick={e=>setState('Login')}>Login</span></p>
                            }
                            <img onClick={e=>setRecruiterLogin(false)} src={assets.cross_icon} alt="cross" className='absolute top-5 right-5 cursor-pointer' />
                        </form>
                        
                    </div>
                )
            }
        </div>
    )
}

export default RecruiterLogin