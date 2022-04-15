// beach page
import * as React from 'react';
import "./Styles.css";
import Forecast from './Forecast.js';


function Beach() {
    return (
    <div className="forecast">
        <h2>
            This is the Beach Page.
        </h2>
        <main>
            <Forecast />
        </main>
    </div>
)
}
export default Beach;