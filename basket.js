let basketmas = JSON.parse(localStorage.getItem('basket'))
let shopList = JSON.parse(localStorage.getItem('shopList'))
const basketListEl = document.querySelector('#billList')

const GetBill = () => {
    basketListEl.innerHTML = ""
    let basketInfo = []
    basketInfo = shopList.filter(el =>  basketmas.includes(el.name))
    let basketSumm = 0
    basketInfo.forEach(element => {
        basketListEl.innerHTML += `
        <p>${element.name}: ${element.price}</p>        
        `
        basketSumm += Number(element.price)
    });
   
    basketListEl.innerHTML += `
    <p class="basketPrice">Total Price: ${basketSumm}$</p>
    `
}

GetBill()