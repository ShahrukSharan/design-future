import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container"> <div className=" text-center mt-5 ">
            <h3>Please Contact With Us</h3>
        </div>
            <div className="row ">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form id="contact-form">
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_name">Firstname *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="" required="required" data-error="Firstname is required." /> </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group"> <label htmlFor="form_lastname">Lastname *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="" required="required" data-error="Lastname is required." /> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group"> <label htmlFor="form_email">Email *</label> <input id="form_email" type="email" name="email" className="form-control" placeholder="" required="required" data-error="Valid email is required." /> </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group"> <label htmlFor="form_message">Message *</label> <textarea id="form_message" name="message" className="form-control" placeholder=" " rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} /> </div>
                                            </div>
                                            <div className="col-md-12 mx-auto"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " defaultValue="Send Message" /> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> {/* /.8 */}
                </div> {/* /.row*/}
            </div>
        </div>

    );
};

export default Contact;