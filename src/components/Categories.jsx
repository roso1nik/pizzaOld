import React from "react";

const Categories = ({ value, onClickCategory }) => {
    const categoriesName = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    return (
        <div className="categories">
            <ul>
                {categoriesName.map((el, i) => (
                    <li
                        onClick={() => onClickCategory(i)}
                        className={value === i ? "active" : ""}
                        key={i}
                    >
                        {el}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
