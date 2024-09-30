import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {
    const [pizzaCount, setPizzaCount] = React.useState(0);

    const [activeIndexSize, setActiveIndexSize] = React.useState(0);
    const [activeIndexType, setActiveIndexType] = React.useState(0);

    return (
        <div className="pizza-block">
            {imageUrl.complete ? (
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt={title}
                />
            ) : (
                <ContentLoader
                    speed={2}
                    width={280}
                    height={230}
                    viewBox="0 0 280 250"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="250" y="112" rx="0" ry="0" width="17" height="0" />
                    <rect x="89" y="113" rx="0" ry="0" width="28" height="0" />
                    <rect x="24" y="76" rx="0" ry="0" width="31" height="0" />
                    <rect x="100" y="87" rx="0" ry="0" width="24" height="0" />
                    <circle cx="140" cy="120" r="100" />
                </ContentLoader>
            )}

            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((el, i) => (
                        <li
                            onClick={() => setActiveIndexType(i)}
                            className={activeIndexType === i ? "active" : ""}
                            key={i}
                        >
                            {el === 0 ? "тонкое" : "традиционное"}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizes.map((el, i) => (
                        <li
                            onClick={() => setActiveIndexSize(i)}
                            className={activeIndexSize === i ? "active" : ""}
                            key={i}
                        >
                            {el}&nbsp;см
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <button
                    className="button button--outline button--add"
                    onClick={() => setPizzaCount(pizzaCount + 1)}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{pizzaCount}</i>
                </button>
            </div>
        </div>
    );
};

export default PizzaBlock;
