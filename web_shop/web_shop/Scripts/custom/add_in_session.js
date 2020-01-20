function add_in_session() {
    let id_span = document.getElementById("id");
    let id = id_span.innerText;
    let cost_span = document.getElementById("cost");
    let cost = cost_span.innerText;
    let name_span = document.getElementById("name");
    let name = name_span.innerText;
    $.get("/Home/Buy", { phone_id: id, phone_cost: cost, phone_name: name });
    $('button[id=buy]').attr('href', 'http://localhost:54696')
    let btn = document.getElementById("buy");
    btn.innerText = "В корзину";
    $('button[id=buy]').attr('id', 'to_basket');
    $('button[id=buy]').attr('onclick', 'to_basket()');
}