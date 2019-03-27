// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
    pepperonni: { name: "Pepperonni", price: 1 },
    mushrooms: { name: "Mushrooms", price: 1 },
    greenPeppers: { name: "Green Peppers", price: 1 },
    whiteSauce: { name: "White sauce", price: 3 },
    glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
    pepperonni: false,
    mushrooms: false,
    greenPeppers: false,
    whiteSauce: false,
    glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
    renderPepperonni();
    renderMushrooms();
    renderGreenPeppers();
    renderWhiteSauce();
    renderGlutenFreeCrust();

    renderButtons();
    renderPrice();
}

function renderPepperonni() {
    document.querySelectorAll(".pep").forEach(function($pep) {
        if (state.pepperonni) {
            $pep.style.visibility = "visible";
        } else {
            $pep.style.visibility = "hidden";
        }
    });
}

function renderMushrooms() {
    // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll(".mushroom").forEach(function($mushroom) {
        if (state.mushrooms) {
            $mushroom.style.visibility = "visible";
        } else {
            $mushroom.style.visibility = "hidden";
        }
    });
}

function renderGreenPeppers() {
    // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll(".green-pepper").forEach(function($greenPepper) {
        if (state.greenPeppers) {
            $greenPepper.style.visibility = "visible";
        } else {
            $greenPepper.style.visibility = "hidden";
        }
    });
}

function renderWhiteSauce() {
    // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    document.querySelectorAll(".sauce.sauce-white").forEach(function($whiteSauce) {
        if (state.whiteSauce) {
            $whiteSauce.style.visibility = "visible";
        } else {
            $whiteSauce.style.visibility = "hidden";
        }
    });
}

function renderGlutenFreeCrust() {
    // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    document.querySelectorAll(".crust.crust-gluten-free").forEach(function($crust) {
        if (state.glutenFreeCrust) {
            $crust.style.visibility = "visible";
        } else {
            $crust.style.visibility = "hidden";
        }
    });
}

function renderButtons() {
    /*document.querySelectorAll(".btn.btn-pepperonni active").forEach(function($button) {
          if (state.btn-pepperonni) {
              $btn-pepperonni.style.visibility = "visible";
          } else {
              $btn-pepperonni.style.btn-pepperonni = "hidden";
          }
      });*/
    document.querySelectorAll(".btn.btn-pepperonni").forEach(function(listItem) {
        listItem.addEventListener("click", evt => {
            evt.target.classList.toggle("active");
        });
    });
    document.querySelectorAll(".btn.btn-mushrooms").forEach(function(listItem) {
        listItem.addEventListener("click", evt => {
            evt.target.classList.toggle("active");
        });
    });
}
let products = [];

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    let ul = document.getElementById("extras");
    let price = basePrice
    ul.innerHTML = "";
    products.forEach(el => {
        price = price + el.price
        let li = document.createElement("li");
        li.innerText = el.name + " $" + el.price;
        ul.appendChild(li);
    });
    document.getElementById('total').innerText =price
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
    if (state.pepperonni) {
        products.splice(products.indexOf(ingredients.pepperonni), 1);
    } else {
        products.push(ingredients.pepperonni);
    }
    state.pepperonni = !state.pepperonni;
    renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
    if (state.mushrooms) {
        products.splice(products.indexOf(ingredients.mushrooms), 1);
    } else {
        products.push(ingredients.mushrooms);
    }
    state.mushrooms = !state.mushrooms;
    renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
    if (state.greenPeppers) {
        products.splice(products.indexOf(ingredients.greenPeppers), 1);
    } else {
        products.push(ingredients.greenPeppers);
    }
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
};
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
    if (state.whiteSauce) {
        products.splice(products.indexOf(ingredients.whiteSauce), 1);
    } else {
        products.push(ingredients.whiteSauce);
    }
    state.whiteSauce = !state.whiteSauce;
    renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function() {
    if (state.glutenFreeCrust) {
        products.splice(products.indexOf(ingredients.glutenFreeCrust), 1);
    } else {
        products.push(ingredients.glutenFreeCrust);
    }
    state.glutenFreeCrust = !state.glutenFreeCrust;
    renderEverything();
};
