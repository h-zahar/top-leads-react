import React from 'react';
import './Lead.css';

const Lead = (props) => {
    const {img, name, age, died, birth_place, net_worth, website} = props.lead;

    let netWorth = net_worth;
    if (net_worth == 'Unknown') {
        netWorth = '$0 billion';
    }

    let isDead = false; 
    if (died) {
        isDead = '(Died)';
    }

    else {
        isDead = '';
    }

    return (
        <div>
            <div className="lead-card">
                <div className="image-container">
                    <img src={img} />
                </div>

                <div className="info-container">
                    <p>Name: {name}</p>
                    <p>Age: {age} {isDead}</p>
                    <p>Birth Place: {birth_place}</p>
                    <p>Net Worth: {net_worth}</p>
                    <p>Website: <a href={website}>Click Here</a></p>
                        <div className="button-container">
                            <button className="button-style" onClick={() => props.handleListener(name, netWorth)}><i class="fa-solid fa-check"></i>Add</button>
                        </div>

                    <div className="icon-social">
                    <i class="fa-brands fa-facebook-square"></i>
                    <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lead;