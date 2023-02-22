import { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/trabajoRemoto.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'




export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const onSubmit = (values)=>{
    form.resetFields();
  }




  const SERVICE_ID = 'service_xt70lk4';
  const TEMPLATE_ID = 'template_g8lie9a';

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [formValues, setFormValues] = useState(formInitialDetails);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
   // e.target.reset(
   
  };

  useEffect((e) => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
      console.log("Sin Error");

      setButtonText("Sending...");

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, '9Emssxvb_7f-8dA13')
        .then((result) => {
          setStatus({ succes: true, message: 'Message sent successfully' });

          setFormValues({ ...formValues, ['firstName']: ''});
          setFormValues({ ...formValues, ['lastName']: ''});
          setFormValues({ ...formValues, ['email']: ''});
          setFormValues({ ...formValues, ['phone']: ''});
          setFormValues({ ...formValues, ['message']: ''});

          
        }, (error) => {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
          console.log(error.text);
          
        }
        );

    setButtonText("Send");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const FIRST_NAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    const LAST_NAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const PHONE_REGEX = /^([8-9])([1-9])(\d{2})(-?|\040?)(\d{5})$/g;

    if(!values.firstName){
      errors.firstName = "First Name is required!";
    } else if( !FIRST_NAME_REGEX.test(values.firstName)){
      errors.firstName = "This is not a valid first name format!";
    }

    if(!values.lastName){
      errors.lastName = "Last Name is required!";
    } else if( !LAST_NAME_REGEX.test(values.lastName)){
      errors.lastName = "This is not a valid last name format!";
    }

    if(!values.email){
      errors.email = "Email is required!";
    } else if( !EMAIL_REGEX.test(values.email)){
      errors.email = "This is not a valid email format!";
    }

    if(!values.phone){
      errors.phone = "Phone is required!";
    } else if( !PHONE_REGEX.test(values.phone)){
      errors.phone = "This is not a valid phone format!";
    }

    if(!values.message){
      errors.message = "Message is required!";
    }

    return errors;
  };



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}> 
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} value={ setFormDetails.firstName}/> 
                        <p>{ formErrors.firstName }</p>
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
                        <p>{ formErrors.lastName }</p>
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input  name="email" type="email" placeholder="Email Address" onChange={handleChange} />
                        <p>{ formErrors.email }</p>
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input  name="phone" type="tel" placeholder="Phone No." onChange={handleChange} />
                        <p>{ formErrors.phone }</p>
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea  name="message" rows="6" placeholder="Message" onChange={handleChange}></textarea>
                        <p>{ formErrors.message }</p>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>

                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

