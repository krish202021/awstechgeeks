import react, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from '../../includes/Footer';
import Header from '../../includes/Header';
import { ErrorMessage } from '@hookform/error-message';
import { Snackbar, Alert, TextField, Autocomplete } from '@mui/material';
import ContactUs from '../Common/Contact';
import * as API from '../API/Fetch';
import SeoTag from "../seo/SeoTag";
function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [stateError, setStateError] = useState('');
    const [succMessage, setSuccMessage] = useState(false);
    const [open, setOpen] = useState(false);
    const [submitBut, setSubmitBut] = useState(false)
    const [textArea, setTextArea] = useState('');
    const [vertical, setVertical] = useState('bottom');
    const [horizontal, setHorizontal] = useState('center');
    
    const onSubmit = (data) => {
        setSubmitBut(true)
        API.api(data, 'user/save-contact').then(res => {
            if (res) {
                setOpen(true);
                setSubmitBut(false)
                setTextArea('')
                reset();
            } else {
                console.log('error');
            }
        })
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Header />
            <SeoTag page_id={14}/>
            <div className="content-wrapper">


                <section className="contact-details contact-page-section">
                    <div className="container">
                        <div className="row">
                            <div className="crumina-module crumina-heading text-center">
                                <h2 className="heading-title">Contact our Experts</h2>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                                <div className="row office-info">
                                    <div className="col-lg-2 col-md-2 col-2 col-xxl-2">
                                        <div className="cont-icon"><span className="mobile-icon"><i className="fa fa-mobile" aria-hidden="true"></i></span></div>
                                    </div>

                                    <div className="col-lg-10 col-md-10 col-10 col-xxl-10">
                                        <div className="cont-info">
                                            <h4>+91 9319239730 <span className="office-cont-light">- Office Contact</span></h4>
                                            <p>For any query, you can directly reach us at the above contact number.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row office-info">
                                    <div className="col-lg-2 col-md-2 col-2 col-xxl-2">
                                        <div className="cont-icon"><span><i className="fa fa-envelope" aria-hidden="true"></i></span></div>
                                    </div>

                                    <div className="col-lg-10 col-md-10 col-10 col-xxl-10">
                                        <div className="cont-info">
                                            <h4>info@techsgeeks.in</h4>
                                            <p>Sometimes, we might be busy in addressing other customer queries. Please contact us on the above email and we will reply you within the next 24 hours.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row office-info">
                                    <div className="col-lg-2 col-md-2 col-2 col-xxl-2">
                                        <div className="cont-icon"><span className="map-marker-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span></div>
                                    </div>

                                    <div className="col-lg-10 col-md-10 col-10 col-xxl-10">
                                        <div className="cont-info">
                                            <h4>Our Offices:</h4>
                                            <p><b>Registerd Office:</b> 226, Sec 4, Vaishali, Ghaziabad.</p>
                                            <p><b>Branch Office:</b> Opp. Godavari Appt, Ashiyana Digha Road, Patna, India.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 box-second">
                                <ContactUs/>
                            </div>
                        </div>

                    </div>
                </section>
                <Snackbar open={open} autoHideDuration={2000} anchorOrigin={{ vertical, horizontal }} onClose={handleClose}>
                    <Alert style={{ backgroundColor: 'green', color: 'white' }} severity="success" sx={{ width: '100%' }}>
                        Send Email SUccessfully!
                    </Alert>
                </Snackbar>

            </div>
            <Footer />
        </div>
    )
}

export default Contact