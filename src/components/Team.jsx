import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import classes from './Team.module.css';
import AntoniaChenPhoto from '../photo/Antonia_Chen.svg';
import ErmalKaleciPhoto from '../photo/Ermal_Kaleci.svg';
import YuZhuLiuPhoto from '../photo/Yuzhu_Liu.svg';
import JianJiangWangPhoto from '../photo/Jianjiang_Wang.svg';
import HaoQiuPhoto from '../photo/Hao_Qiu.svg';
import JackPlatts from '../photo/Jack_Platts.svg';
import ShaunWang from '../photo/Shaun_Wang.svg';
import AshleyTyson from '../photo/Ashley_Tyson.png';
import DanReecer from '../photo/Dan_Reecer.png';
import QueenaShao from '../photo/Queena_Shao.svg';
import LaminarLogo from '../assets/laminar-logo-team.svg';
import PolkaWalletLogo from '../assets/polkawallet-logo-team.svg';
import Web3FoundationLogo from '../assets/web3-foundation-logo-team.svg';
import { Container } from '../ui-components/Container';
import { ShowAnimation } from '../ui-components/ShowAnimation';
import { ControllArrow } from '../ui-components/ControllArrow';

const MemberItem = React.forwardRef(({ photo, name, title, icon, company }, ref) => (
    <li className={classes.memberItem} ref={ref}>
        <img src={photo} className={classes.memberPhoto} alt={name} />
        <p className={classes.memberName}>{name}</p>
        <p className={classes.memberTitle}>{title}</p>
        <img src={icon} className={clsx(classes.memberCompany, classes[company])} alt={company} />
    </li>
));
const Member = React.forwardRef(({ members }, ref) => {
    return (
        <div className={classes.members}>
            <ul className={classes.content} ref={ref}>
                {
                    members.map((item, index) => {
                        if (index < 5) {
                            return (
                                <ShowAnimation delay={index + 1} key={`team-members-${item.name}`}>
                                    <MemberItem {...item} />
                                </ShowAnimation>

                            );
                        }
                        return <MemberItem {...item} key={`team-member-${index}`} />;
                    })
                }
            </ul>
        </div>
    );
});

const Controll = ({ onNext, onPrev, prevDisabled, nextDisabled }) => {
    return (
        <div className={classes.control}>
            <button className={clsx(classes.controlBtn, classes.prevBtn, { [classes.controlDisabled]: prevDisabled } )} onClick={onPrev}>
                <ControllArrow />
            </button>
            <button className={clsx(classes.controlBtn, classes.nextBtn, { [classes.controlDisabled]: nextDisabled })} onClick={onNext}>
                <ControllArrow />
            </button>
        </div>
    );
}
export const Team = () => {
    const members = useRef([
        {
            photo: AntoniaChenPhoto,
            name: 'Antonia Chen',
            title: 'Chief Economist',
            company: 'laminar',
            icon: LaminarLogo
        },
        {
            photo: ErmalKaleciPhoto,
            name: 'Ermal Kaleci',
            title: 'Senior Software Engineer',
            company: 'laminar',
            icon: LaminarLogo
        },
        {
            photo: YuZhuLiuPhoto,
            name: 'Yuzhu Liu',
            title: 'Head of Collaborations',
            company: 'polkawallet',
            icon: PolkaWalletLogo
        },
        {
            photo: JianJiangWangPhoto,
            name: 'Jianjiang Wang',
            title: 'Chief Technology Officer',
            company: 'polkawallet',
            icon: PolkaWalletLogo
        },
        {
            photo: HaoQiuPhoto,
            name: 'Hao Qiu',
            title: 'Full-stack Engineer',
            company: 'polkawallet',
            icon: PolkaWalletLogo
        },
        {
            photo: JackPlatts,
            name: 'Jack Platts',
            title: 'Advisor',
            company: 'web3-foundation',
            icon: Web3FoundationLogo
        },
        {
            photo: ShaunWang,
            name: 'Shaun Wang',
            title: 'Senior Software Engineer',
            company: 'laminar',
            icon: LaminarLogo,
        },
        {
            photo: QueenaShao,
            name: 'Queena Shao',
            title: 'UI Designer',
            company: 'laminar',
            icon: LaminarLogo,
        },
        {
            photo: DanReecer,
            name: 'Dan Reecer',
            title: 'Advisor/Contributor',
            company: 'web3-foundation',
            icon: Web3FoundationLogo,
        },
        {
            photo: AshleyTyson,
            name: 'Ashley Tyson',
            title: 'Advisor',
            company: 'web3-foundation',
            icon: Web3FoundationLogo,
        }
    ].sort(() => 0.5 - Math.random()));
    const ref = useRef();
    const [count, setCount] = useState(0);
    const [maxCount, setMaxCount] = useState(0);

    useEffect(() => {
        const $list = ref.current;
        if (!$list) return false;
        const $item = $list.querySelector('li');
        const itemWidht = $item.clientWidth;
        const itemMargin = parseInt(window.getComputedStyle($item)['margin-right']);
        setMaxCount(Math.ceil($list.clientWidth / ((itemWidht + itemMargin) * 3)))
    }, []);

    useEffect(() => {
        const $list = ref.current;
        if (!$list) return false;
        const $item = $list.querySelector('li');
        const itemWidht = $item.clientWidth;
        const itemMargin = parseInt(window.getComputedStyle($item)['margin-right']);
        ref.current.style.transform = `translate3d(-${(itemWidht + itemMargin) * 3 * count}px, 0, 0)`;
    }, [count]);

    const onNext = () => {
        const $list = ref.current;
        if (!$list) return false;
        if (count < maxCount) {
            setCount(count + 1);
        }
    };

    const onPrev = () => {
        const $list = ref.current;
        if (!$list) return false;
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <section className={classes.root}>
            <Container>
                <div className={classes.title}>Meet our team</div>
                <Member members={members.current} ref={ref} />
                <Controll onNext={onNext} onPrev={onPrev} prevDisabled={count === 0} nextDisabled={count === maxCount}/>
            </Container>
        </section>
    );
}