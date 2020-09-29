import React from 'react';
import classes from './Partners.module.css';

import polychain from '../assets/polychain.svg';
import kr1 from '../assets/kr1.svg';
import p2pCaptital from '../assets/p2p-capital.svg';
import hashkey from '../assets/hashkey.svg';
import snz from '../assets/snz.svg';
import stakeZone from '../assets/stakeZone.svg';
import w3 from '../assets/w.svg';
import goodmore from '../assets/goodmore.svg';
import web3Foundation from '../assets/web3-foundation.svg';
import p2pValidator from '../assets/p-2-p-validator.svg';
import hypersphere from '../assets/hypersphere.svg';
import berkeley from '../assets/berkeley.svg';
import arrington from '../assets/arrington-xrp-capital.svg';
import digitalRenaissance from '../assets/digitalRenaissance.svg';
import parafi from '../assets/parafi.svg';
import s1confirmation from '../assets/1confirmation.svg';
import spartan from '../assets/spartan.svg';
import altonomy from '../assets/altonomy.svg';
import CMS from '../assets/CMS.svg';
import divergence from '../assets/divergence.svg';
import coinfund from '../assets/coinfund.svg';
import dcg from '../assets/dcg.svg';
import zeePrime from '../assets/zee-prime.svg';
import dantons from '../assets/dentons.svg';

import { Container } from '../ui-components/Container';

const ListItem = React.forwardRef(({ name, img, link, onClick, style }, ref) => {
    return (
        <li className={classes.item} ref={ref} onClick={() => { onClick(link) }}>
            <img src={img} alt={name} className={classes[name]} style={style} />
        </li>
    );
});
const List = ({ list }) => {
    list = list.sort(() => 0.5 - Math.random());

    const onClick = link => link && window.open(link);

    return (
        <ul className={classes.list}>
            {
                list.map((item, index) => (
                    <ListItem {...item} onClick={onClick} key={`partners-${item.name}`} />
                ))
            }
        </ul>
    );
}

export const Partners = () => {
    const list = [
        { name: 'polychain', img: polychain, link: 'https://polychain.capital' },
        { name: 'kr1', img: kr1, link: 'https://kr1.io' },
        { name: 'p2pCaptital', img: p2pCaptital, link: 'https://www.p2pcap.com' },
        { name: 'hashkey', img: hashkey, link: 'https://www.hashkey.com' },
        { name: 'snz', img: snz, link: 'https://snzholding.com' },
        { name: 'web3Capital', img: w3, link: 'https://web3.capital' },
        { name: 'stakeZone', img: stakeZone, link: 'http://stake.zone' },
        { name: 'goodmore', img: goodmore, link: 'https://goodmore.capital' },
        { name: 'web3Foundation', img: web3Foundation, link: 'https://web3.foundation' },
        { name: 'berkeley', img: berkeley, link: 'https://www.xcelerator.berkeley.edu' },
        { name: 'drf', img: digitalRenaissance, link: 'https://drf.ee' },
        { name: 'p2pValidator', img: p2pValidator, link: 'https://p2p.org' },
        { name: 'hypersphere', img: hypersphere, link: 'https://www.hypersphere.ventures' },
        { name: '1confirmation', img: s1confirmation, link: 'https://www.1confirmation.com' },
        { name: 'arrington', img: arrington, link: 'http://arringtonxrpcapital.com', style: { maxWidth: '60%' } },
        { name: 'parafi', img: parafi, link: 'https://www.parafi.capital' },
        { name: 'spartan', img: spartan, link: 'https://www.spartangroup.io' },
        { name: 'altonomy', img: altonomy, link: 'https://www.altonomy.com' },
        { name: 'CMS', img: CMS, link: 'http://cmsholdings.io', style: { maxWitdh: '60%' } },
        { name: 'divergence', img: divergence, link: 'https://www.div.vc' },
        { name: 'coinfund', img: coinfund, link: 'https://coinfund.io' },
        { name: 'dcg',  img: dcg, link: 'https://dcg.co', style: { maxHeight: '80%' } },
        { name: 'zeePrime', img: zeePrime, link: 'https://zeeprime.capital', style: { maxHeight: '60%' } },
        { name: 'dantons', img: dantons, link: 'https://www.dentons.com' }
    ];

    return (
        <section>
            <Container>
                <div className={classes.title}>Partners</div>
                <List list={list} />
            </Container>
        </section>
    );
}