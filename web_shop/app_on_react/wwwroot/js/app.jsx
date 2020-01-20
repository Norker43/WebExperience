class Brand extends React.Component {
    render() {
        return (
            <div className="d-flex align-items-center">
                <a href="http://localhost:57745/Home/Index" className="navbar-brand">
                    <h1>Rushop</h1>
                </a>
                <h2 className="title">Корзина</h2>
            </div>
        )
    }
}

class HeaderComponents extends React.Component {
    render() {
        return (
            <div class="d-flex">
                <a href="/" class="basket">
                    <img src="images/basket.png" />
                </a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <Brand />
        <HeaderComponents />
    </nav>,
    document.getElementById("header")
);