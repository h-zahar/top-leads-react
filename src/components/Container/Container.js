import React, { useState } from 'react';
import Leads from '../Leads/Leads';
import Worths from '../Worths/Worths';
import './Container.css'

const Container = () => {
    const [show, setShow] = useState({name: '', totalWorth: 0});
    const [namelist, setNamelist] = useState([]);
    const [count, setCount] = useState(0);

    const handleListener = (name, net_worth) => {
        setCount(count + 1);
        
        let copyNamelist = [...namelist, name];
        setNamelist(copyNamelist);

        let total = net_worth.split('$')[1].split(' ')[0] * 1;

        if (net_worth.includes('million')) {
            total /= 1000;
        }

        total+= parseFloat(show.totalWorth);

        let stringTotal = '';

        if (total == 0) {
            stringTotal = total.toString();
        }

        else {
            stringTotal = total.toFixed(2);
        }
        
        setShow({name: name, totalWorth: stringTotal});
    }

    return (
        <div>
            <div className="main-container">
                <Leads handleListener={handleListener} />
                <Worths show={show} setShow={setShow} namelist={namelist} count={count} />
            </div>
        </div>
    )
}

export default Container;