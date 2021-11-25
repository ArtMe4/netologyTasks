export function ShopCard({item}) {

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