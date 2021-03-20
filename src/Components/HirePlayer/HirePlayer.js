import React from 'react';
import './HirePlayer.css';

const HirePlayer = (props) => {
    const hirePlayer = props.hirePlayer;
    // console.log(hirePlayer);
    const total = hirePlayer.reduce((total, pl) => total + pl.salary, 0)

    return (
        <div className="hire-player">
            <h2>Hire Players For Club</h2>
            <h4>Selected Players : {hirePlayer.length}</h4>
            {
                hirePlayer.map(player =>{
                    return(
                        <div>
                            <img src={player.image} alt=""/>
                            <h4>{player.name}</h4>
                            <h4>Cost : {player.salary}</h4>
                        </div>
                    )
                })
            }
            <h4 className="budget">Total Budget : {total}</h4>
        </div>
    );
};

export default HirePlayer;