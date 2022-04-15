// outdoor page
import * as React from 'react';
import "./Styles.css";  
import Forecast from './Forecast.js';

function Outdoor() {
    return (
    <div className="forecast">
        <h2>
            This is the Outdoor Sports Page.
        </h2>
        <main>
            <Forecast />
        </main>

    </div>
    )
}
export default Outdoor;
