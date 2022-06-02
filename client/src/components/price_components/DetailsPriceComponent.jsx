import React from "react";

const DetailsPriceComponent = ({ cardData }) => {

    if (cardData.tcgplayer && cardData.tcgplayer.prices) {
        return (
            <div>
                            
                <div className='makret-price-subheading'><span>{cardData.tcgplayer.prices.normal?.market ? ` $${cardData.tcgplayer.prices.normal.market} Normal` : null}</span></div>
                <div className='makret-price-subheading'><span>{cardData.tcgplayer.prices.reverseHolofoil?.market ? `$${cardData.tcgplayer.prices.reverseHolofoil.market} Reverse Holofoil` : null}</span></div>
                <div className='makret-price-subheading'><span>{cardData.tcgplayer.prices.holofoil?.market ? `$${cardData.tcgplayer.prices.holofoil.market} Holofoil` : null}</span></div>
                <div className='makret-price-subheading'><span>{cardData.tcgplayer.prices['1stEditionHolofoil']?.market ? `$${cardData.tcgplayer.prices['1stEditionHolofoil'].market} 1st Edition Holofoil` : null}</span></div> 
                <div className='makret-price-subheading'><span>{cardData.tcgplayer.prices['1stEditionNormal']?.market ? `$${cardData.tcgplayer.prices['1stEditionNormal'].market} 1st Edition Normal` : null}</span></div> 
                <div className='makret-price-subheading'><span>{cardData.tcgplayer.prices.unlimitedHolfoil?.market ? `$${cardData.tcgplayer.prices.unlimitedHolfoil.market} Unlimited Holofoil` : null}</span></div>
                <div className='makret-price-subheading'><span>{cardData.tcgplayer.prices.unlimited?.market ? `$${cardData.tcgplayer.prices.unlimited.market} Unlimited` : null}</span></div>
            
        </div>
          ) 
    } else {
        return (
            <div>
        
            <ul>
                <li>No Price Data Available</li>
            </ul>
    
        </div>
        )
    }
  
}

export default DetailsPriceComponent;