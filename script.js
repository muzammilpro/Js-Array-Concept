
var userData = [];

function Submit() {
    var username = document.getElementById("Name").value;
    var useremail = document.getElementById("Email").value;
    var userPhoneNumber = document.getElementById("phoneNumber").value;

    var inputData = {
        name: username,
        email: useremail,
        phone: userPhoneNumber
    };
    userData.push(inputData);
    displayData();
}

function displayData() {
    var toDisplay = "toDisplay";
    var displayDataHTML = "";

    for (let index = 0; index < userData.length; index++) {
        var currentData = userData[index];
        displayDataHTML += `
                    <div>
                        <h1>Name: ${currentData.name}</h1>
                        <p>Email: ${currentData.email}</p>
                        <span>Phone: ${currentData.phone}</span>
                    </div>
                `;
    }

    document.getElementById(toDisplay).innerHTML = displayDataHTML;
}