import React from 'react';
import Namelist from '../Namelist/Namelist';
import './Worths.css';

const Worths = (props) => {
    const {totalWorth} = props.show;

    return (
        <div>
            <div className="worth-container">
                <h3>Added: {props.count}</h3>
                <h3>Total Worth:<br />${totalWorth} Billion</h3>

                <div className="p-container">{
                    props.namelist.map(elem => <Namelist name={elem} />)
                }</div>
            </div>
        </div>
    )
}

export default Worths;