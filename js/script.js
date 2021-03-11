
// Inizializazione Variabili
var calculateBtn = document.getElementById('calculateBtn');
var totalPrice;
var couponUser;
var price;
var coupons = [
    "coupon1",
    "coupon2",
    "coupon3",
    "coupon4",
    "coupon5" ];

// Selezione checkbox con click sul li 
var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.addEventListener('click', function functionName() {
        this.children[2].checked = !this.children[2].checked;
    })
}


// Lancio funzione dopo il click del bottone
calculateBtn.addEventListener('click', function(){
    var burgerName = document.getElementById('burgerName').value;

    if (burgerName.length < 1) {
        alert("Inserisci un nome, perfavore.")

    }else {

        totalPrice = 10;
        var ingredients = document.getElementsByClassName('ingredient');
        for (var i = 0; i < ingredients.length; i++) {
            var ingredient = ingredients[i];
            if (ingredient.checked) {
                price = parseInt(ingredient.dataset.price);
                totalPrice += price;
            }
        }
        couponUser = document.getElementById("coupon").value;

        var coupon = coupons.includes(couponUser);
        if (coupon) {
            totalPrice = totalPrice * 0.8;
        }
        console.log(couponUser, coupon);


        document.getElementById("prezzoTotale").innerHTML = totalPrice;
    }
})
