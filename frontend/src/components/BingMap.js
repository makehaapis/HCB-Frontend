import BingMapsReact from "bingmaps-react";
import env from "react-dotenv";

const BingMap = ({station}) => {
    if (env === null) {
        return (<div></div>)
    } else {

    const pushPin = {
        center: {
            latitude: station.y,
            longitude: station.x,
        },
        options: {
            title: station.Nimi,
        },
        }
    const pushPins = [pushPin];
    const api_key=process.env.REACT_APP_BING_API_KEY

    {return (
    <BingMapsReact
      bingMapsKey={api_key}
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      pushPins={pushPins}
      viewOptions={{
        center: { latitude: station.y, longitude: station.x },
        mapTypeId: "grayscale",
      }}
    />
    )
    }
}
}
    export default BingMap