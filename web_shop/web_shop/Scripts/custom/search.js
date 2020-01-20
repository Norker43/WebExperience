function Search() {
    let value = document.getElementById('search');
    let names = document.getElementsByClassName('name');

    let parents = new Array();
    for (let i = 0; i < names.length; i++) {
        parents.push(names[i].parentElement.parentElement.parentElement.parentElement.parentElement);
    }

    let regValue = new RegExp(value.value, 'i');
    let flag = false;

    for (let i = 0; i < names.length; i++) {
        flag = false;
        flag = regValue.test(names[i].innerHTML);
        if (flag) {
            parents[i].style.display = "";
        } else {
            parents[i].style.display = "none";
        }
    }
}