import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllBookings = () => {
          const [data, changeData] = useState([])
   const fetchData = () => {
      axios
      .post("http://localhost:2000/view-all-bookings")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
<NavigationBar/>
<h1><center>View All Bookings</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Booking ID </th>
                  <th>Owner Name</th>
                  <th>Email</th>
                  <th>Phone </th>
                  <th>Vehicle Registration Number </th>
                  <th>Vehicle Brand</th>
                  <th>Vehicle Model</th> 
                  <th>Battery Capacity</th>
                  <th>Connector Type</th>
                  <th>Charging Date</th>
                  <th>Time Slot</th>
                  <th>Estimated Units</th>
                  <th>Charging Bay Number</th>
                </tr>  
              </thead> 
              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.BookingID}</td>
                    <td>{value.OwnerName}</td>
                    <td>{value.Email}</td>
                    <td>{value.Phone}</td>
                    <td>{value.VehicleRegistrationNumber}</td>
                    <td>{value.VehicleBrand}</td>
                    <td>{value.VehicleModel}</td>
                    <td>{value.BatteryCapacity}</td>
                    <td>{value.ConnectorType}</td>
                    <td>{value.ChargingDate}</td>
                    <td>{value.TimeSlot}</td>
                    <td>{value.EstimatedUnits}</td>
                    <td>{value.ChargingBayNumber}</td>
                    <td>
                      <button className="btn btn-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ViewAllBookings


