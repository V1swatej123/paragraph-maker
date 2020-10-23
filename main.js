
function submita() {
    var input = [];

    for ( var i = 1; i <= 6; i++) {
        input.push(document.getElementById("input_" + i).value);
    }

    document.getElementById("display_para").innerHTML = input.join(". ");
    console.log(input);
}

function submitb() {
    var input = [];

    for ( var i = 7; i <= 12; i++ ) {
        input.push(document.getElementById("input_" + i).value);
    }

    document.getElementById("display_para2").innerHTML = input.join(". ");
    console.log(input);
}