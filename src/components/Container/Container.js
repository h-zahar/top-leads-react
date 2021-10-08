import React, { useState } from 'react';
import Leads from '../Leads/Leads';
import Worths from '../Worths/Worths';
import './Container.css'

const Container = () => {
    const [show, setShow] = useState(0);
    const [namelist, setNamelist] = useState([]);
    const [count, setCount] = useState(0);

    const handleListener = (name, net_worth) => {
        setCount(count + 1);
        
        let copyNamelist = [...namelist, name];
        setNamelist(copyNamelist);

        let total = net_worth + show;
        
        setShow(Math.round(total * 100) / 100);
    }

    return (
        <div>
            <div className="main-container">
                <Leads handleListener={handleListener} />
                <Worths show={show} namelist={namelist} count={count} />
            </div>
        </div>
    )
}

export default Container;