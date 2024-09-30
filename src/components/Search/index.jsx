import React from "react";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
import { SearchContext } from "../../context";

const Search = () => {
    const [value, setValue] = React.useState("");
    const { setSearchValue } = React.useContext(SearchContext);
    const inputRef = React.useRef();

    const onClickClear = () => {
        setSearchValue("");
        setValue("");
        inputRef.current.focus();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSeachValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 500),
        []
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSeachValue(event.target.value);
    };

    return (
        <div className={styles.root}>
            <svg className={styles.icon} version="1.1" viewBox="0 0 512 512">
                <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.clear}
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <style>
                            {
                                ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"
                            }
                        </style>
                    </defs>
                    <title />
                    <g id="cross">
                        <line className="cls-1" x1="7" x2="25" y1="7" y2="25" />
                        <line className="cls-1" x1="7" x2="25" y1="25" y2="7" />
                    </g>
                </svg>
            )}
        </div>
    );
};

export default Search;
