var calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function(){
    var burgerName = document.getElementById('burgerName').value;

    if (burgerName.length < 0) {
        alert("Inserisci un nome, perfavore.")

    }else {

        var totalPrice = 10;
        var ingredients = document.getElementsByClassName('ingredient');
        for (var i = 0; i < ingredients.length; i++) {
            var ingredient = ingredients[i];
            var checkedState = ingredient.checked;
            // console.log(ingredient, checkedState);
            if (checkedState) {
                var price = parseInt(ingredient.dataset.price);
                totalPrice += price;
            }else {
            }
        }

    }
})
