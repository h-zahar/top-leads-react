import React from 'react';
import Namelist from '../Namelist/Namelist';
import './Worths.css';

const Worths = (props) => {
    const {show} = props;

    return (
        <div>
            <div className="worth-container">
                <h3>Added: {props.count}</h3>
                <h3>Total Worth:<br />${show} Billion</h3>

                <div className="p-container">{
                    props.namelist.map(elem => <Namelist name={elem} />)
                }</div>
            </div>
        </div>
    )
}

export default Worths;