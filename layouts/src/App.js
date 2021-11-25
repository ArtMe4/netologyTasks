import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {IconSwitch} from './components/Store/IconSwitch/IconSwitch'
import {CardsView} from './components/Store/CardsView/CardsView'
import {ListView} from './components/Store/ListView/ListView'
import PropTypes from "prop-types";

const products = [
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    },
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    },
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    },
    {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    },
    {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    },
    {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }
];

function Store() {

    const [list, setList] = useState(0)
    const onSwitch = () => {
        setList((list) => !list)
    }

    return (
        <>
            <div className="container">
                <IconSwitch icon={list ? 'view_module' : 'view_list'} onSwitch={onSwitch}/>
                {list ? <ListView cards={products} /> : <CardsView cards={products} />}
            </div>
        </>
    );
}

IconSwitch.defaultProps = {

    icon: 'view_list',
    list: 0,
    onSwitch: () => {}

}

ListView.defaultProps = {
    cards: [
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }
    ]
}

CardsView.defaultProps = {
    cards: [
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }
    ]
}

IconSwitch.propTypes = {
    icon: PropTypes.string,
    list: PropTypes.number,
    onSwitch: PropTypes.func
}

ListView.propTypes = {
    cards: PropTypes.array
}

CardsView.propTypes = {
    cards: PropTypes.array
}

export default Store;
