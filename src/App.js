import React from "react";
import { useRef } from "react";
import Modal from './components/Modal';
import './App.css';
export default function App() {
  const [show, setShow] = React.useState(false);
  const [otp, setOtp] = React.useState(new Array(6).fill(""));
  
    const inputRefs = useRef([]);
  
    const handleKeyDown=(event, index)=> {
      if (event.key === "Backspace" && event.target.value === "") {
        event.preventDefault();
        const prevIndex = index - 1;
        if (prevIndex >= 0) {
          const prevInputRef = inputRefs.current[prevIndex];
          prevInputRef.focus();
        }
      }
    }

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };
  return (
    <div className="container text-center">

     <div class="center">
      <button className="btn1" onClick={() => setShow(true)} >Click Here</button></div> 
    
     <Modal show={show} onClose={() => setShow(false)}>
      <div className="row">
                <div className="col text-center">
                    <h2>PHONE VERIFICATION</h2>
                    <p>Enter the OTP sent om xxxxx90</p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                ref={(ref) => {
                                  inputRefs.current[index] = ref;
                                }}
                                onChange={e => handleChange(e.target, index)}
                                onKeyDown={(event) => handleKeyDown(event, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <button
                            className="btn"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Resend
                        </button>
                        <button
                            className="btn2"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                    </p>
                </div>
            </div>
          
       </Modal>
    </div>
  );
}
