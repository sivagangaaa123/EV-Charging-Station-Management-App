import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddBooking = () => {

    const[input, changeInput]=useState({
        BookingID: "",
        OwnerName: "",
        Email: "",
        Phone: "",
        VehicleRegistrationNumber: "",
        VehicleBrand: "",
        VehicleModel: "",
        BatteryCapacity : "",
        ConnectorType: "",
        ChargingDate: "",
        TimeSlot: "",
        EstimatedUnits: "",
        ChargingBayNumber: ""
        })

    const inputhandler=(event)=>{
        changeInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const readValue= () =>{
        console.log(input)
        axios.post("http://localhost:2000/add-booking",input).then(
            (Response) =>{
                console.log(Response.data)
                alert("Vehicle Booked Successfully")
            }
        ).catch(
            (Error) =>{
                console.log(Error)
            }
        )
    }

  return (
    <div>
<NavigationBar/>
<h1><center> Vehicle Booking</center></h1>
         <div className="container">
             <div className="row">
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <div className="row g-3">
                          <div className="col col-12 col-sm-6">
     <label className="form-label">Booking ID</label>
  <input
        type="text"
        className="form-control"
        required
        name="BookingID"
        value={input.BookingID}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Owner Name</label>
    <input
        type="text"
        className="form-control"
        required
        name="OwnerName"
        value={input.OwnerName}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Email</label>
    <input
        type="email"
        className="form-control"
        required
        name="Email"
        value={input.Email}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Phone </label>
    <input
        type="tel"
        className="form-control"
        name="Phone"
        value={input.Phone}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Vehicle Registration Number</label>
    <input
        type="text"
        className="form-control"
        name="VehicleRegistrationNumber"
        value={input.VehicleRegistrationNumber}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
   <label className="form-label">Vehicle Brand</label>
    <input
        type="text"
        className="form-control"
        name="VehicleBrand"
        value={input.VehicleBrand}
        onChange={inputhandler}
    />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Vehicle Model</label>
    <input
        type="text"
        className="form-control"
        name="VehicleModel"
        value={input.VehicleModel}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Battery Capacity </label>
    <input
        type="text"
        className="form-control"
        name="BatteryCapacity"
        value={input.BatteryCapacity}
        onChange={inputhandler}
    />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Connector Type  </label>
    <input
        type="text"
        className="form-control"
        name="ConnectorType"
        value={input.ConnectorType}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Charging Date </label>
    <input
        type="date"
        className="form-control"
        name="ChargingDate"
        value={input.ChargingDate}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Time Slot</label>
    <input
        type="text"
        className="form-control"
        name="TimeSlot"
        value={input.TimeSlot}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Estimated Units</label>
    <input
        type="number"
        className="form-control"
        name="EstimatedUnits"
        value={input.EstimatedUnits}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label"> Charging Bay Number</label>
    <input
        type="number"
        className="form-control"
        name="ChargingBayNumber"
        value={input.ChargingBayNumber}
        onChange={inputhandler}
    />
</div>

<div className="col-12 text-center">
    <button className="btn btn-success" onClick={readValue}>
        Submit
    </button>
</div>
</div>
</div>
</div>
</div>




    </div>
  )
}

export default AddBooking



