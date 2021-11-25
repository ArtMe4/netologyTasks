import {ShopCard} from '../ShopCard/ShopCard'

export function CardsView({cards}) {

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