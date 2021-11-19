import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function IconSwitch({icon, onSwitch}) {

    return (
        <span className="material-icons" onClick={onSwitch}>
            {icon}
        </span>
    );

}

function CardsView({cards}) {

    return (
        cards.map((el, idx) => {
            return (
                <div key={idx}>
                    card
                    <ShopCard item={el} />
                </div>
            )
        })
    );

}

function ListView({cards}) {

    return (
        cards.map((el, idx) => {
            return (
                <div key={idx}>
                    list
                    <ShopItem item={el} />
                </div>
            )
        })
    );

}

function ShopCard({el}) {

    return (
        <div>1</div>
    )

}

function ShopItem({el}) {

    return (
        <div>2</div>
    )

}

function Store() {

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
    const [list, setList] = useState(0)
    const onSwitch = () => {
        setList((list) => !list)
    }

    return (
        <>
            <IconSwitch icon={list ? 'view_module' : 'view_list'} onSwitch={onSwitch}/>
            {list ? <ListView cards={products} /> : <CardsView cards={products} />}
        </>
    );
}

export default Store;
