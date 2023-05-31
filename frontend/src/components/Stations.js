import { useState, useEffect } from 'react'
import Station from './Station'
import stationService from '../services/stations'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Stations = () => {
  const [stations, setStations] = useState([])
  const[pageNumber, setPageNumber] = useState(1); 

  useEffect(() => {
    stationService
      .getAll(`?pageNumber=${pageNumber}`)
      .then(initialStations => {
        setStations(initialStations)
      })
  }, [pageNumber])

  const handlePreviousPage = () => {
    let page = pageNumber
    if (pageNumber === 1) {console.log("On the first page already")}
    else {setPageNumber(Number(page) - 1)}
  }

  const handleNextPage = () => {
    let page = pageNumber
    setPageNumber(Number(page) + 1)
  }

  if (stations) {
  return (
    <div>
      <table className='table'>
      <thead>
          <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Capacity</th>
          </tr>
          </thead>
      {stations.map(station=>(
          <tbody  key={station.id}>
            <Station station={station}/>
            </tbody>
       ))}
       </table>
       <Button className="btn" handleClick={handlePreviousPage} text="previous"/>
      <Button handleClick={handleNextPage} text="next"/>
    </div>
  )
      }
      else {
        return (
          <div>
            something went wrong
          </div>
        )
      }
}



export default Stations