window.onload = function () {
    const inputs = document.getElementsByClassName("input-otp")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function (event) {
            event.preventDefault();
            if (event.key == "Backspace") {
                setInputTagValue(inputs[i], null)
                if (inputs[i].tabIndex != 1) inputs[i - 1].focus()
            } else {
                setInputTagValue(inputs[i], String.fromCharCode(event.keyCode))
                if (inputs[i + 1] && inputs[i + 1].tabIndex != 1) {
                    inputs[i + 1].focus();
                } else {
                    inputs[i].focus();
                }
            }
        });
    }
}
function setInputTagValue(inputTag, value) {
    console.log(value, inputTag)
    inputTag.value = value;
}
