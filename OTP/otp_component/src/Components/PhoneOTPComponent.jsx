import { useState } from "react";
import OTPInput from "./OTPInput";

const PhoneOTPComponent = () =>{
    const [PhoneNumber,setPhoneNumber] = useState("");
    const [showOTPInput,setShowOTPInput] = useState(false);
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = (e) => {
     e.preventDefault();

     //Validation
     const regex = /[^0-9]/g;

     if(PhoneNumber.length < 10 || regex.test(PhoneNumber))
     {
        alert("Invalid Phone Number");
        return;
     }

     //passing data to backend and sending otp once otp is recieved then set below state
     setShowOTPInput(true);
    }


    const onOTPSubmit = (otp) => {
        console.log("Login succesful",otp);
        alert("Login successful");
    }

    return (!showOTPInput ? (<form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter mobile number" value={PhoneNumber} onChange={handlePhoneNumber} height={"40px"}></input>
                    <button type="submit">Submit</button>
            </form>) : (
                <div>
                            <h2>Enter OTP recieved on {PhoneNumber} </h2>
                            <OTPInput length={4} onOTPSubmit={onOTPSubmit} />
                </div>
            ));
            
}

export default PhoneOTPComponent;