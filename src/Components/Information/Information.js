import React, { useEffect, useState } from 'react';
import playersData from '../../Data/playersData.json';
import HirePlayer from '../HirePlayer/HirePlayer';
import Player from '../Player/Player';
import './Information.css';

const Information = () => {
    const [players, setPlayers] = useState([])
    const [hirePlayer, setHirePlayer] = useState([]);

    useEffect(() => {
        setPlayers(playersData)
        // console.log(playersData)
    }, [])

    const handleAddPlayer = (player) => {
        const newHirePlayer = [...hirePlayer, player];
        setHirePlayer(newHirePlayer);
    }

    return (
        <div className="information-container">
            <div className="player-container">
                {
                    players.map(player => <Player
                        handleAddPlayer = {handleAddPlayer}
                        player={player}
                        key ={player.born}>
                    </Player>)
                }
            </div>
            <div className="cart-container">
                <HirePlayer hirePlayer={hirePlayer}></HirePlayer>
            </div>

        </div>
    );
};

export default Information;