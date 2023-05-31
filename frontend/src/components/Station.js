import { NavLink } from "react-router-dom";

const Station = (station) => {
    station = station.station
return (
    <tr>
        <td>{station.Nimi}</td>
        <td>{station.Osoite}</td>
        <td>{station.Kapasiteet}</td>
        <td>
            <NavLink to={`/stations/${station.id}`} className="btn btn-primary">Details</NavLink>
        </td>
    </tr>
    )
}
export default Station