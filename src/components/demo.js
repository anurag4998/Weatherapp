import React, { useState } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import { FiArrowRightCircle } from "react-icons/fi";


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

const Demo = (props) => {

    const [inputvalue, setInputvalues] = useState()
    const [flag, setflag] = useState(0)

    onsubmit = (e) => {
        e.preventDefault();
        let input = e.target.location.value.trim()
        if (input) {

            let url1 = 'https://api.weatherapi.com/v1/current.json?key=7b652cc06264447ba7174608202707&q=' + input
            fetch(url1, requestOptions)
                .then(response => response.json())
                .then((result) => {

                    // for (const [key, value] of Object.entries(result.location)) {
                    //     setInput(inputvalue.push(`${key}: ${value}`));
                    // }
                    setInputvalues(result)
                    setflag(1)
                })
        }
    }
    // var items = flag ? Object.entries(inputvalue).map(([key, value]) => {
    //     return (
    //         <div>{key} : {value}</div>
    //     );
    // }) : undefined
    // var items = flag ?
    //     Object.keys(inputvalue["location"]).map((each) => { return (<li key={each} > {`"${each}"`} : {`${inputvalue["location"][each]},`} </li>) }) : undefined


    // Object.keys(jsonObj["location"]).map((each) => ({ key: `"${each}"`, value: `"${jsonObj["location"][each]}"` }))

    return (

        <section className="demo-container" id="documentation" >

            <h3 className="mb-2 text-center demo-section-title">Complete weather data coverage</h3>
            <div className="mb-5 text-center demo-section-intro">Get Real-time and accurate weather information</div>
            <Form onSubmit={onsubmit}>

                <div className="container">

                    <FormGroup row>

                        <Label className="label" sm={2} for="inputlocation">LOCATION</Label>
                        <Col sm={10} md={5}>
                            <Input type="text" className="form-control" id="inputlocation" name="location" autoComplete="off" />
                        </Col>
                        <Col sm={10} md={5}>
                            <div className="formtext">
                                Enter any city name, Latitude,Longitude(decimal degree) or IP address.
                        </div>
                        </Col>
                    </FormGroup>
                </div>


                <button className="col-4 col-md-2 submitbutton">Enter</button>

                <div href="#" className="demo-more-features">
                    <h6>View Complete Documentation </h6>
                    <FiArrowRightCircle className="demo-more-features-icons" />
                </div>
            </Form>




            <div className="container jsoncontainer">
                <div className="row">
                    <div className="col-12">
                        {flag ? <h3>Response </h3> : undefined}
                        <JSONPretty data={inputvalue} theme={JSONPrettyMon}></JSONPretty>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Demo

// <div>
//                     {
//                         inputvalue ? Object.keys(inputvalue.location).map((key, i) => (
//                             <p key={i}>
//                                 <span> "{key}":</span>
//                                 <span> {inputvalue.location[key]}</span>
//                             </p>
//                         )) : undefined}

//                 </div>