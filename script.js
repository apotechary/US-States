
let states = [];
let allState = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

function displayName() {
    var guess = document.getElementById('userguess').value;
    if (guess === "") {
        alert("Please Enter a State");
        return;
    }
    if (isEntered(guess)) {
        alert("Already entered " + guess.toUpperCase() + " guess again!");
        return;
    }
    if (!isAstate(guess)) {
        alert(guess.toUpperCase() + " is not a state!")
        return;
    }

    states.push(guess.toUpperCase());
    var ul = document.getElementById("allguesses");
    var li = document.createElement('li');

    li.setAttribute("class", "list-group-item states");
    li.appendChild(document.createTextNode(guess.toUpperCase()));
    ul.appendChild(li);
    clearField();
}

function clearField() {
    document.getElementById('userguess').value = "";
}
function isEntered(state) {
    for (let i = 0; i < states.length; i++) {
        if (states[i] === state.toUpperCase()) {
            return true;
        }
    }
    return false;
}


function isAstate(state) {
    for (var j = 0; j < allState.length; j++) {
        if (state.toUpperCase() === allState[j].toUpperCase()) {
            return true;
        }
    }
    return false;
}