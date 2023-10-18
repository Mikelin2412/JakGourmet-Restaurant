import React from 'react';
import mask from '../../assets/images/Mask Group.svg';
import './MainSectionCards.css'

const MainSectionCards = ({ infoForCards }) => {
  return (
    <>
        {infoForCards.map((elem, index) =>
            <div key={index} className='main-section-card'>
                <img
                    src={mask}
                    alt='mask group'
                />
                <h4>{elem.title}</h4>
                <p>{elem.description}</p>
            </div>
        )}
    </>
    )
}

export default MainSectionCards;
