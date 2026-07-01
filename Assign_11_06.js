function addPerson() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var city = document.getElementById("city").value;

    var card = document.createElement("div");
    card.className = "card";

    var nameText = document.createElement("div");
    lastName.className = "txtOrange";
    nameText.innerHTML = firstName + " " + "<br>" + lastName;

    var cityText = document.createElement("div");
    cityText.className = "city";
    cityText.innerHTML = city;

    card.appendChild(nameText);
    card.appendChild(cityText);

    document.getElementById("cardContainer").appendChild(card);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("city").value = "";
}


<input type="text" id="firstName" placeholder="First Name">
<input type="text" id="lastName" placeholder="Last Name">
<input type="text" id="city" placeholder="City">

<button onclick="addPerson()">Submit</button>

<div id="cardContainer"></div>


#cardContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.card {
    height: 150px;
    background-color: rgb(128, 128, 128);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    
    border-radius: 10px;
}

.city {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 14px;
    color: white;
}

.txtOrange {
    color: orange;
}