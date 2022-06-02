import React from "react";

const PriceComponent = ({ cards }) => {

    if (cards.tcgplayer && cards.tcgplayer.prices) {
        return (
            <div>
                            
                <div className='makret-price-subheading'><span>{cards.tcgplayer.prices.normal?.market ? ` $${cards.tcgplayer.prices.normal.market} Normal` : null}</span></div>
                <div className='makret-price-subheading'><span>{cards.tcgplayer.prices.reverseHolofoil?.market ? `$${cards.tcgplayer.prices.reverseHolofoil.market} Reverse Holofoil` : null}</span></div>
                <div className='makret-price-subheading'><span>{cards.tcgplayer.prices.holofoil?.market ? `$${cards.tcgplayer.prices.holofoil.market} Holofoil` : null}</span></div>
                <div className='makret-price-subheading'><span>{cards.tcgplayer.prices['1stEditionHolofoil']?.market ? `$${cards.tcgplayer.prices['1stEditionHolofoil'].market} 1st Edition Holofoil` : null}</span></div> 
                <div className='makret-price-subheading'><span>{cards.tcgplayer.prices['1stEditionNormal']?.market ? `$${cards.tcgplayer.prices['1stEditionNormal'].market} 1st Edition Normal` : null}</span></div> 
                <div className='makret-price-subheading'><span>{cards.tcgplayer.prices.unlimitedHolfoil?.market ? `$${cards.tcgplayer.prices.unlimitedHolfoil.market} Unlimited Holofoil` : null}</span></div>
                <div className='makret-price-subheading'><span>{cards.tcgplayer.prices.unlimited?.market ? `$${cards.tcgplayer.prices.unlimited.market} Unlimited` : null}</span></div>          
        </div>
          ) 
    } else {
        return (
            <div>
                <ul>
                    <li>No Price Data Available...</li>
                </ul>
        </div>
        )
    }
  
}

export default PriceComponent;