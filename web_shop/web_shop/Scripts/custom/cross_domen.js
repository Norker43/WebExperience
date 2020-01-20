function add_to_basket() {
    var ref = document.getElementById("basket");
    var req = new XMLHttpRequest();
    //добавить отправку данных

    if (ref) {
        ref.addEventListener("click", function (e) {
            req.open("GET", "http://localhost:54696");
            req.onreadystatechange = reqReadyStateChange;
            req.withCredentials = true;
            req.send();
        });
    }

    function reqReadyStateChange() {
        if (req.readyState == 4) {
            var status = request.status;
            if (status == 200)
                var result = req.responseText;
            else
                var result = req.statusText;
        }
        console.log(result);
    }
}