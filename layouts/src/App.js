import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

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

function IconSwitch({icon, onSwitch}) {

    return (
        <div className={"view-switcher"}>
            <span className="material-icons" onClick={onSwitch}>
                {icon}
            </span>
        </div>
    );

}

function CardsView({cards}) {

    return (
        <div className={"card-items"}>
            {
                cards.map((el, idx) => {
                    return (
                        <ShopCard key={idx} item={el}/>
                    )
                })
            }
        </div>
    );

}

function ListView({cards}) {

    return (
        <div className={"list-items"}>
            {
                cards.map((el, idx) => {
                    return (
                        <ShopItem key={idx} item={el}/>
                    )
                })
            }
        </div>
    );

}

function ShopCard({item}) {

    return (
        <div className={"card-items__item"}>
            <div className={"item-name"}>
                {item.name}
            </div>
            <div className={"item-color"}>
                {item.color}
            </div>
            <div className={"item-image"}>
                <img src={item.img} alt=""/>
            </div>
            <div className={"item-down"}>
                <div className={"item-price"}>
                    ${item.price}
                </div>
                <div className={"item-btn"}>
                    Add to cart
                </div>
            </div>
        </div>
    )

}

function ShopItem({item}) {

    return (
        <div className={"list-items__item"}>
            <div className={"item-image"}>
                <img src={item.img} alt=""/>
            </div>
            <div className={"item-name"}>
                {item.name}
            </div>
            <div className={"item-color"}>
                {item.color}
            </div>
            <div className={"item-price"}>
                ${item.price}
            </div>
            <div className={"item-btn"}>
                Add to cart
            </div>
        </div>
    )

}

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

export default Store;
