/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sort, { popupItems } from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import PaginationBlock from "../components/Pagination";
import { SearchContext } from "../context";
import { useSelector, useDispatch } from "react-redux";
import {
    setCategoryId,
    setCurrentPage,
    setFilters,
} from "../redux/slices/filterSlice";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // useRef позвволяет сохранить нам первоначальную переменную, даже после перерендера
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    const { categoryId, sort, currentPage } = useSelector(
        (state) => state.filter
    );
    const sortType = sort.sortProperty;

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const onChangePage = (num) => {
        dispatch(setCurrentPage(num));
    };

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { searchValue } = React.useContext(SearchContext);

    const fetchPizzas = () => {
        setIsLoading(true);
        const order = sortType.includes("-") ? "asc" : "desc";
        const sortBy = sortType.replace("-", "");
        const category = categoryId > 0 ? `category=${categoryId}` : ``;
        const search = searchValue ? `search=${searchValue}` : ``;

        // fetch(
        //     `https://65b64609da3a3c16ab007957.mockapi.io/items?${category}&${search}&sortBy=${sortBy}&order=${order}&limit=4&page=${page}`
        // )
        //     .then((res) => res.json())
        //     .then((arr) => {
        //         setItems(arr);
        //         setIsLoading(false);
        //     });

        axios
            .get(
                `https://65b64609da3a3c16ab007957.mockapi.io/items?${category}&${search}&sortBy=${sortBy}&order=${order}&limit=4&page=${currentPage}`
            )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });
    };

    // пока нет первого рендера, то не надо вшивать параметры
    React.useEffect(() => {
        //проверка на ПЕРВЫЙ рендер после перезагрузки страницы, если был - вшиваем
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType,
                categoryId,
                currentPage,
            });

            navigate(`?${queryString}`);
        }
        //после первого рендера уже может записывать query запросы
        isMounted.current = true;
    }, [categoryId, sortType, searchValue, currentPage, navigate]);

    // если был первый рендер проверяем query запросы и зашиваем их в редакс
    React.useEffect(() => {
        if (window.location.search) {
            //берем параметры из ссылки без знака вопросса
            const params = qs.parse(window.location.search.substring(1));

            //находим им нужную пару смотря на наш массив
            const sort = popupItems.find(
                (obj) => obj.sortProperty === params.sortProperty
            );

            //записываем параметры в initialState
            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            //при переходе на страницу с query запросами, а именно чтобы избежать двойного запроса и рендера
            isSearch.current = true;
        }
    }, [dispatch]);

    // нужно ли делать запрос на изменение пицц(есть ли параметры в ссылке)
    React.useEffect(() => {
        window.scrollTo(0, 0);

        // логика которая помогает избежать двойного запроса на сервер
        if (!isSearch.current) {
            fetchPizzas();
        }

        isSearch.current = false;
    }, [categoryId, sortType, searchValue, currentPage]);

    //генерируем скелетон из 12 объектов
    const skeleton = [...new Array(12)].map((el, i) => <Skeleton key={i} />);

    const pizzas = items
        // .filter((obj) => {
        //     if (
        //         obj.title
        //             .toLocaleLowerCase()
        //             .includes(searchValue.toLocaleLowerCase())
        //     ) {
        //         return true;
        //     }
        //     return false;
        // })
        .map((el) => <PizzaBlock {...el} key={el.id} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onClickCategory={onClickCategory}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {/* {items.map((el) => isLoading ? <Skeleton /> : (
                            <PizzaBlock {...el} key={el.id} />
                        ))} */}
                {isLoading ? skeleton : pizzas}
            </div>
            <PaginationBlock page={currentPage} setPage={onChangePage} />
        </div>
    );
};

export default Home;
