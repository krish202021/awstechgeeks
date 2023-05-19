import react, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Snackbar, Alert, TextField, Autocomplete } from '@mui/material';
import * as API from '../API/Fetch';
export default function Contact() {
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
                setSuccMessage("Thank You We Will Be Reply You Soon.")
                reset();
                const timer = setTimeout(() => {
                    setSuccMessage('')
                }, 5000);
                return () => clearTimeout(timer);
            } else {
                setOpen(true);
                setSubmitBut(false)
                console.log('error');
            }
        })
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <form className="blog-page-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">

                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="crumina-module crumina-heading">
                            <h2 class="heading-title">Contact our Experts</h2>
                            <h6 class="heading-sup-title">Share your requirement now, we don’t let you look back!</h6>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field">
                            <label>Full Name <span class="mandatory-text">*</span></label>
                            <input {...register("name", { required: "Enter your name!" })} name="name" type="text" placeholder="Name" />
                            <div className="error-msg" style={{ marginTop: -15, marginBottom: 15, color: 'red' }}>
                                <ErrorMessage style={{ color: 'red' }} errors={errors} name="name" />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field">
                            <label>Email Address <span class="mandatory-text">*</span></label>
                            <input {...register("email", { required: "Enter your email!" })} name="email" type="text" placeholder="Enter Your email" />
                            <div className="error-msg" style={{ marginTop: -15, marginBottom: 15, color: 'red' }}>
                                <ErrorMessage style={{ color: 'red' }} errors={errors} name="email" />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field">
                            <label>Phone No <span class="mandatory-text">*</span></label>
                            <input {...register("phone", { required: "Enter your Phone no!" })} name="phone" placeholder="Phone No" type="text" />
                            <div className="error-msg" style={{ marginTop: -15, marginBottom: 15, color: 'red' }}>
                                <ErrorMessage style={{ color: 'red' }} errors={errors} name="phone" />
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field select-box">
                            <label>Select Project Type <span class="mandatory-text">*</span></label>
                            <select {...register("project_type", { required: "Select your project type!" })} name="project_type" class="form-select" aria-label="Default select example">
                                <option value="">Select Project Type</option>
                                <option value="ERP">ERP</option>
                                <option value="Website">Website</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="CRM">CRM</option>
                                <option value="Website & Mobile App">Website & Mobile App</option>
                                <option value="Others">Others</option>
                            </select>
                            <div className="error-msg" style={{ marginTop: -15, marginBottom: 15, color: 'red' }}>
                                <ErrorMessage style={{ color: 'red' }} errors={errors} name="project_type" />
                            </div>
                            <span class="angle-down-arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field select-box">
                            <label>Select Industry <span class="mandatory-text">*</span></label>
                            <select {...register("industry", { required: "Select industry!" })} class="form-select" aria-label="Default select example">
                                <option value="">Select Industry</option>
                                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                                <option value="E-Commerce">E-Commerce</option>
                                <option value="Education">Education</option>
                                <option value="Entertainment & Arts">Entertainment & Arts</option>
                                <option value="Finance">Finance</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Hotels &  Restaurants">Hotels &  Restaurants</option>
                                <option value="Logistics">Logistics</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Tour & Travel">Tour & Travel</option>
                                <option value="Others">Others</option>
                            </select>
                            <div className="error-msg" style={{ marginTop: -15, marginBottom: 15, color: 'red' }}>
                                <ErrorMessage style={{ color: 'red' }} errors={errors} name="industry" />
                            </div>
                            <span class="angle-down-arrow nw"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field select-box">
                            <label>Select Project Duration <span class="mandatory-text">*</span></label>
                            <select {...register("project_duration", { required: "Select project duration!" })} name="project_duration" class="form-select" aria-label="Default select example">
                                <option value="">Select Project Duration</option>
                                <option value="1 month">1 month</option>
                                <option value="Less than 3 months">Less than 3 months</option>
                                <option value="3-6 months">3-6 months</option>
                                <option value="Less than 1 year">Less than 1 year</option>
                                <option value="More than 1 year">More than 1 year</option>
                                <option value="Not sure">Not sure</option>
                            </select>
                            <div className="error-msg" style={{ marginTop: -15, marginBottom: 15, color: 'red' }}>
                                <ErrorMessage style={{ color: 'red' }} errors={errors} name="project_duration" />
                            </div>
                            <span class="angle-down-arrow nw"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field">
                            <label>Website </label>
                            <input {...register("website")} name="website" type="text" placeholder="Enter Your website" />
                            
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="frm_form_field form-field">
                            <label>Description <span class="mandatory-text">*</span></label>
                            <textarea {...register("message", { required: "Enter your message!" })} name="message" placeholder="Description"></textarea>
                            <div className="error-msg" style={{ marginTop: -15, marginBottom: 15, color: 'red' }}>
                                <ErrorMessage style={{ color: 'red' }} errors={errors} name="message" />
                            </div>
                        </div>
                    </div>

                    <div class="g-recaptcha"
                        data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR">
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        {submitBut ?
                            <button className="btn send-btn">Wait....</button>
                            :
                            <button type="submit" className="btn send-btn">Send</button>
                        }
                    </div>
                    <p style={{marginTop:10}}>{succMessage}</p>

                </div>
            </form>
        </div>
    )
}
