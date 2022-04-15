//commute page
import * as React from 'react';
import "./Styles.css";
import Forecast from './Forecast.js';


function Commute() {
    return (
    <div className="forecast">
        <h2>
            This is the Commuter Page.
        </h2>
        <main>
            <Forecast />
        </main>
    </div>
)
}
export default Commute;