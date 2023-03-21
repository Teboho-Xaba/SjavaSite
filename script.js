const removeBtn = document.getElementsByClassName("btn-danger")

for (let i = 0; i < removeBtn.length; i++){
    let buttons = removeBtn[i]
    buttons.addEventListener("click", function(event){
        const buttonClick = event.target
        buttonClick.parentElement.parentElement.remove()
        cartTotal()
    })
}

function cartTotal (){
    const cartItemContainer = document.getElementsByClassName("table-shop")[0]
    const cartItem = cartItemContainer.getElementsByClassName("table-row")
    const total = 0
    for (let i = 0; i < cartItem.length; i++){
        let shopItem = cartItem[i]
        let priceEl = shopItem.getElementsByClassName("table-price")[0]
        let quantEl = shopItem.getElementsByClassName("input-btn")[0]
        let price = parseFloat(priceEl.innerText.replace("R", " "))
        let quantity = quantEl.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName("total-price")[0].innerText = "R" + total
}