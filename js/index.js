/* index.js for To_Do_List */
const BtnInput = document.getElementById("btn");
let input = document.getElementById("addInput")

let store = [];

BtnInput.addEventListener('click', addText = (event) => {
    if (input.value !== "") {
        document.getElementById("Err").innerHTML = "";
        event.preventDefault();
        let obj = {
            userId: Math.floor(Math.random() * 100),
            userinput: input.value
        }
        let localStorageData = localStorage.getItem("user");
        if (localStorageData !== null) {
            let Storage = JSON.parse(localStorageData);
            Storage.push(obj);
            localStorage.setItem("user", JSON.stringify(Storage));
            dis();
        } else {
            store.push(obj);
            localStorage.setItem("user", JSON.stringify(store));
            dis();
        }

        input.value = "";
        dis();
    } else {
        document.getElementById("Err").innerHTML = "Please Enter Your Task";
    }
})


dis = (() => {
    let dis = JSON.parse(localStorage.getItem("user"))
    let HtTable = '';

    for (i in dis) {
        HtTable += `
      <tr>
        <td>${dis[i].userinput}</td>  
        <td>
            <button onclick='remove(${dis[i].userId})'>Delete</button> 
        </td>
      <tr>
    `
    }
    document.getElementById("tbody").innerHTML = HtTable;
})
dis();

remove = ((userId) => {
    let UseCon = JSON.parse(localStorage.getItem('user'));

    for (i in UseCon) {
        if (UseCon[i].userId == userId) {
            console.log(UseCon[i].userId);
            UseCon.splice(i, 1);
        }
        localStorage.setItem('user', JSON.stringify(UseCon));
    }
    dis();
})
