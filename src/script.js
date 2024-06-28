document.querySelectorAll('.numberButton').forEach(function(button) {
    button.addEventListener('click', function() {
        var input = document.getElementById('textInput');
        var number = this.getAttribute('data-number');
        input.value += number;
    });
});

document.querySelectorAll('.operatorButton').forEach(function(button) {
    button.addEventListener('click', function() {
        var input = document.getElementById('textInput');
        var operator = this.getAttribute('data-operator');
        input.value += operator;
    });
});

document.getElementById('backspaceButton').addEventListener('click', function() {
    var input = document.getElementById('textInput');
    input.value = input.value.slice(0, -1);
});


document.getElementById('resultButton').addEventListener('click', function() {
    var input = document.getElementById('textInput');
    try {
        var result = math.evaluate(input.value);
        input.value = result;
    } catch (error) {
        input.value = 'Erro';
    }
});