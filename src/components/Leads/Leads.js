import React, { useEffect, useState } from 'react';
import Lead from '../Lead/Lead';
import './Leads.css'

const Leads = (props) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(leads => setData(leads));
    }, []);

    return (
        <div className="lead-container">
            {
                data.map(lead => <Lead key = {lead.id} lead = {lead} handleListener={props.handleListener} />)
            }
        </div>
    )
}

export default Leads;