import React from 'react';
import { useLittera } from 'react-littera';
import translations from '../../translations/pages';

function Offer() {
  const [translated] = useLittera(translations);
  return (
    <div className="Offer">
        <OfferContainer title={translated.offerTitle01} icon="fas fa-code" desc={translated.offerDesc01} image_url={require('../../assets/development.jpg')} />
        <OfferContainer title={translated.offerTitle02} icon="fas fa-terminal" desc={translated.offerDesc02} image_url={require('../../assets/administrative.jpg')} />
        <OfferContainer title={translated.offerTitle03} icon="fas fa-search-dollar" desc={translated.offerDesc03} image_url={require('../../assets/marketing.jpg')} />
    </div>
  );
}

function OfferContainer({ title, desc, image_url, icon }: { title: string, desc: string, image_url: string, icon: string}) {

  return <div className="Offer__container">
    <div className="Offer__container__side Offer__container__side--text">
      <i className={icon}></i>
      <div style={{flexGrow: 1}}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div> 
    <div className="Offer__container__side Offer__container__side--image">
      <div className="Offer__container__side__image">
        <img src={image_url} alt="random" />
        <div className="Offer__container__side__image__slope"></div>
      </div>
    </div>
  </div>;
}

export default Offer;
