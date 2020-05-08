import React from 'react';
import { ReactComponent as CreatingWebsites } from  '../../assets/creating_websites.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function Offer() {
  return (
    <div className="Offer">
        <OfferContainer title="Creating websites" icon="fab fa-accusoft" desc="We'll create a very nice website for you!" image_url="https://source.unsplash.com/random"/>
        <OfferContainer title="SEO" icon="fab fa-accusoft" desc="Your site will be everywhere" image_url="https://source.unsplash.com/random" />
        <OfferContainer title="Website migration" icon="fab fa-accusoft" desc="Your fucking site will be on the new server!" image_url="https://source.unsplash.com/random" />
    </div>
    
  );
}

function OfferContainer({ title, desc, image_url, icon }: { title: string, desc: string, image_url: string, icon: string}) {

  return <div className="Offer__container">
    <div className="Offer__container__side" style={{ maxWidth: "30%", margin: "0 auto" }}>
      <i className={icon}></i>
      <div style={{flexGrow: 1}}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div> 
    <div className="Offer__container__side">
      <div className="Offer__container__side__image">
        <img src={image_url} alt="random" />
        <div className="Offer__container__side__image__slope"></div>
      </div>
    </div>
  </div>;
}

export default Offer;
