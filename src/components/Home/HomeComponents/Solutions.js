import React from 'react';
import SectionHeader from '../../Shared/SectionHeader'
import SyndicateLogo from '../../../assets/syndicate.svg'

export default function Solutions(props) {
    const items = [
        { itemSrc: SyndicateLogo, title: "Syndicate Reports" },
        { itemSrc: SyndicateLogo, title: "Syndicate Reports" },
        { itemSrc: SyndicateLogo, title: "Syndicate Reports" },
        { itemSrc: SyndicateLogo, title: "Syndicate Reports" },
        { itemSrc: SyndicateLogo, title: "Syndicate Reports" },
        { itemSrc: SyndicateLogo, title: "Syndicate Reports" },
    ]
    return (
        <div className="container">
            <SectionHeader headingText={"Solutions We Provide"} />
            <div className="row">
                {items.map(item => {
                    return (
                        < div class="text-center col-md-2 col-sm-6 shadow-lg p-3 mb-5 bg-white rounded" height="243px">
                            <img src={item.itemSrc} />
                            <h6 className="font-weight-normal p-2">{item.title}</h6>
                        </ div>
                    )
                })}

            </div>
        </div>
    );
}