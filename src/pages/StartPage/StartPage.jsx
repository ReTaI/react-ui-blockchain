import React, { memo, useEffect, useState } from 'react';
import { getHouses } from '../../API';
import Authorization from './Authorization';
import Registration from './Registration';

const StartPage = () => {
    const [ allHouses, setAllHouses ] = useState([]);
    useEffect(()=>{
        getHouses().then(data => setAllHouses(data));
        console.log(allHouses);
    }, [allHouses])
    return(
        <>
            {allHouses.map(house => {
                return (
                    <div>chin</div>
                )
            })}
        </>
    )
}

export default memo(StartPage);