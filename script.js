let balance = 0;

function addTransaction() {

    let desc = document.getElementById("desc").value;
    let amount = parseInt(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if(desc === "" || isNaN(amount)){
        alert("Enter valid details");
        return;
    }

    if(type === "income"){
        balance += amount;
    }else{
        balance -= amount;
    }

    document.getElementById("balance").innerText = balance;

    let li = document.createElement("li");

    li.innerHTML =
    desc + " - ₹" + amount +
    " <button onclick='this.parentElement.remove()'>Delete</button>";

    document.getElementById("list").appendChild(li);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}