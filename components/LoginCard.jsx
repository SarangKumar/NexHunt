import Link from 'next/link';
import React, { useRef, useState } from 'react'
import Bear from './Bear'
// import { useAuth } from '/assets/contexts/AuthContext';
// import login_user from "/assets/images/icons8-customer.png"
// import login_pass from "/assets/images/icons8-lock.png"
// import login_vid from "/assets/videos/login_vid1.mp4"
// import { Link, useNavigate } from 'react-router-dom'




export default function LoginCard() {
    const emailRef = useRef();
    const passwdRef = useRef();
    // const { login, currentUser } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
    }

    // async function handleSubmit(e) {
    //     console.log("hello");
    //     e.preventDefault()
    //     try {
    //         console.log(emailRef.current.value, passwdRef.current.value);
    //         setError("")
    //         setLoading(true)
    //         await login(emailRef.current.value, passwdRef.current.value);
    //         navigate("/challenges")
    //     }
    //     catch (err) {
    //         var msg = err.message;

    //         setError(msg)
    //     }
    //     setLoading(false)
    // }
    return (
        <div className="logincard_comp">
            <div className="login_side_image" >
                <video height="500px" autoPlay loop muted alt="All the devices">
                    <source src="assets/videos/login_vid1.mp4" type="video/mp4" />
                </video>
            </div>
            <form onSubmit={handleSubmit} className="logincard_form">
                <h2 className="login_heading">Welcome to <span className="login_heading_th">NexHunt</span></h2>
                <div className="logincard_label1 logincard_label_div">
                    <h2 className="login_heading">{error}</h2>
                    <img className="login_image" src="assets/images/icons8-customer.png" alt="loginpic" />
                    <label className="logincard_label" htmlFor="Email">Email</label>
                    <input className="logincard_input" placeholder="Email" ref={emailRef} type="email" name="Email" />
                </div>
                <div className="login-alignment">
                    <div className="login_card_label2 logincard_label_div">
                        <div className="nox_login" >
                            <Bear pupils="display_eyes" pupil_animate="eyes_peep" arm_animate="close_eyes" />
                        </div>
                        <img className="login_pass" src="assets/images/icons8-lock.png" alt="loginpic" />
                        <label className="logincard_label" htmlFor="Password">Password</label>
                        <input className="logincard_input" placeholder="Password" type="password" name="Password" ref={passwdRef} />
                        <div className="login_nox">
                        </div>
                    </div>
                </div>
                <div className="logincard_btn_div">
                    <Link href='/challenges' className="logincard_btn"><button className='logincard_btn_btn' type="submit">Login</button></Link>
                </div>
            </form>
        </div>
    )
}
