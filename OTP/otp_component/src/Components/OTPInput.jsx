import { useState,useRef, useEffect } from "react";

const OTPInput = ({Otplength = 4, onOTPSubmit=()=>{}}) => {
    const [otp,setOtp] = useState(new Array(Otplength).fill(""));
    const inpuRefs = useRef([]);

    useEffect(()=> {
        if(inpuRefs.current[0])
        {
            inpuRefs.current[0].focus();
        }
    },[]);

    const handleChange = (index,e) => {
        let value = e.target.value;
        if(isNaN(value))
        {
            return;
        }

        let newOtp = [...otp];
        newOtp[index]= value.substring(value.length - 1);
        setOtp(newOtp);

        //submit 
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === Otplength) 
        {
            onOTPSubmit(combinedOtp);
        }

        if(value && index < Otplength - 1 && inpuRefs.current[index + 1])
        {
            inpuRefs.current[index + 1].focus();
        }

    };

    const handleClick = (index,e) => {
        inpuRefs.current[index].setSelectionRange(1,1);

        //if clicked on field which is filled but previous is empty then take to that 1st empty place
        if(index > 0 && !otp[index - 1])
        {
            inpuRefs.current[otp.indexOf("")].focus();
        } 

        //if clicked on field which is filled but next is empty then take to that 1st empty place
        if(index < Otplength && !otp[index + 1])
        {
            inpuRefs.current[otp.indexOf("")].focus();
        } 
    };

    const handleKeyDown = (index,e) => {
        if(e.key==="Backspace" && !otp[index] && index > 0 && inpuRefs.current[index - 1])
        {
            inpuRefs.current[index - 1].focus();
        }
    };


    return (
        otp.map((value,index)=>{
            return <input
                    key={index}
                    type="text"
                    value={value}
                    ref={(input)=>inpuRefs.current[index] = input}
                    onChange={(e) => handleChange(index,e)}
                    onClick={(e)=> handleClick(index,e)}
                    onKeyDown={(e) => handleKeyDown(index,e)}
                    className="otpInput"
                    ></input>
        })
    )
}

export default OTPInput;