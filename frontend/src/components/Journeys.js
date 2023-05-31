import { useState, useEffect } from 'react'
import journeyService from '../services/journeys'
import "../App.css";

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Journeys = () => {
    const [journeys, setJourneys] = useState()
    const[pageNumber, setPageNumber] = useState(1); 

    useEffect(() => {
        journeyService
        .getAll(`?pageNumber=${pageNumber}`)
        .then(initialJourneys => {
        setJourneys(initialJourneys.journey)
      })
    },[pageNumber])

    const handlePreviousPage = () => {
        let page = pageNumber
        if (pageNumber === 1) {console.log("On the first page already")}
        else {setPageNumber(Number(page) - 1)}
      }
    
      const handleNextPage = () => {
        let page = pageNumber
        setPageNumber(Number(page) + 1)
      }
    


    if (!journeys) return 'loading...';
    else {
        return (
            <div>
              <table className='table'>
              <thead>
                  <tr>
                  <th>Departure Time</th>
                  <th>Return Time</th>
                  <th>Departure Station</th>
                  <th>Return Station</th>
                  <th>Distance</th>
                  <th>Duration</th>
                  </tr>
                  </thead>
                  {journeys.map(journey=>(
                    <tbody  key={journey._id}>
                    <tr>
                        <td>{journey.departureTime}</td>
                        <td>{journey.returnTime}</td>
                        <td><a href={`/stations/${journey.departureStationID}`}>{journey.departureStationName}</a></td>
                        <td><a href={`/stations/${journey.returnStationID}`}>{journey.returnStationName}</a></td>
                        <td>{journey.distance} (m)</td>
                        <td>{journey.duration} (s)</td>
                    </tr>
                </tbody>
                    ))}
               </table>
                    <Button className="btn" handleClick={handlePreviousPage} text="previous"/>
                    <Button handleClick={handleNextPage} text="next"/>
            </div>
        )
    }
}


export default Journeys