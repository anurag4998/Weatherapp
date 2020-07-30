import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

const Contact = () =>

    (
        <section className="contact-section" id='contact'>
            <h3 className="mb-2 text-center font-weight-bold">Contact Us</h3>
            <div className="mb-5 text-center contact-section-intro">Get in touch if you have any questions or queries</div>

            <div className="container">
                <Fade left>
                    <div id="contact-form" className="col-lg-9 mx-lg-auto formcontainer p-3">
                        <h3 className="mb-4 text-center contact-section-title">Ask a Question</h3>

                        <Form>

                            <FormGroup row className="contactusform">
                                <Col sm={12} md={6}>
                                    <input type="text" className="form-control mb-2" placeholder="Name" minlength="2" required="" />
                                </Col>
                                <Col sm={12} md={6}>

                                    <input type="email" className="form-control" placeholder="Email " color="muted" required="" />
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Label for="exampleText"></Label>
                                    <Input type="textarea" name="text" id="exampleText" rows="10" placeholder="Enter your message" className="form-control align-items-center" autoComplete="off" />
                                </Col>
                            </FormGroup>


                        </Form>
                        <FormGroup row>
                            <Col sm={12}>
                                <Button id="ctl00_MainContentHolder_butSubmit" color="primary" className="btn btn-block btn-primary py-2" >
                                    Submit</Button>
                            </Col>
                        </FormGroup>

                    </div>
                </Fade>
            </div>
        </section>
    )


export default Contact