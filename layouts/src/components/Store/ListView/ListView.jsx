import {ShopItem} from '../ShopItem/ShopItem'

export function ListView({cards}) {

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