import React from "react";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { SearchContext } from "./context/index";

//#region main
const App = () => {
    const [searchValue, setSearchValue] = React.useState("");

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <AppRouter />
                </div>
            </div>
        </SearchContext.Provider>
    );
};

export default App;
