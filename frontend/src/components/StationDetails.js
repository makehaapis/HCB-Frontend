import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';
import stationService from '../services/stations'
import BingMap from './BingMap';


const StationDetails = () => {
    const [station, setStation] = useState()
    const {stationId} = useParams()

    useEffect(() => {
        stationService
          .getDetails(stationId)
          .then(initialStation => {
            setStation(initialStation)
          })
    }, [])
    
    if (!station) return 'loading...';
    return(
        <div className='container'>
        <h1>Details</h1>
        <div>
        <h4>{station.station.Nimi}</h4>
        <hr />
        <dl className="row">
        <dt className="col-sm-3">
            Address: 
        </dt>
        <dd className="col-sm-9">
            {station.station.Osoite}
        </dd>
        <dt className="col-sm-3">
            City: 
        </dt>
        <dd className="col-sm-9">
            {station.station.Kaupunki}
        </dd>
        <dt className="col-sm-3">
            Capacity: 
        </dt>
        <dd className="col-sm-9">
            {station.station.Kapasiteet}
        </dd>
        <dt className="col-sm-3">
            Longitude: 
        </dt>
        <dd className="col-sm-9">
        {station.station.x}
        </dd>
        <dt className="col-sm-3">
            Latitude: 
        </dt>
        <dd className="col-sm-9">
            {station.station.y}
        </dd>
        <dt className="col-sm-3">Total starts</dt>
        <dd className="col-sm-9">{station.totalDepartures}</dd>
        <dt className="col-sm-3">Total returns</dt>
        <dd className="col-sm-9">{station.totalReturns}</dd>
        <dt className="col-sm-3">Average starting journey distance</dt>
        <dd className="col-sm-9">{station.avgDepartureDistance}</dd>
        <dt className="col-sm-3">Average returning journey distance</dt>
        <dd className="col-sm-9">{station.avgReturningDistance}</dd>
    </dl>
</div>
<BingMap station={station.station}/>
<div>
    <br></br>
    <a href="./" className="btn btn-primary">Back to List</a>
</div>
</div>
)}

export default StationDetails