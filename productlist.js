const shoplistEl = document.querySelector('#shoplist')
let shoplistitem = []
if (localStorage.getItem('shopList')){
    shoplistitem = JSON.parse(localStorage.getItem('shopList'))
}
//localStorage.setItem('shopList', JSON.stringify(shoplistitem))
const formCreate = 
{
    img: document.querySelector('#productimg'),
    name: document.querySelector('#name'),
    price: document.querySelector('#price'),
    btn: document.querySelector('#listbtn')
}
let basketList = [
name= 'TV1',
amount = 0
]

const GetProducts = () =>{
    shoplistEl.innerHTML = ""
    shoplistitem.forEach(element => {
        shoplistEl.innerHTML += `
        <li class="main_shop_list_item">
        ${
            element.img.length != 0 
            ?`<img class="main_shop_list_item_img" src="Images/${element.img}"/>`
            : '<img class="main_shop_list_item_img" src="Images/default_bag.svg"/>'
        }
       
        <p class="main_shop_list_item_title">${element.name}</p>
        <p class="main_shop_list_item_price">${element.price}</p>
        <button 
            class="btnBuy"
            id="listbtn"
            nameProduct="${element.name}"
            >Buy</button>
        </li>
        `
    });
    const btnsBuyArr = document.querySelectorAll('.btnBuy')

    btnsBuyArr.forEach(btnItem => {
        btnItem.addEventListener('click', () =>{
            let basketcheck = true
            basketList.forEach(basketItem => {
                if(basketItem == btnItem.getAttribute("nameProduct")){
                    basketItem.amount += 1
                    basketcheck = false
                }
                
            })
            if(basketcheck){
                basketList =  [
                    ...basketList,
                    btnItem.getAttribute("nameProduct")
                ]
                console.log(basketList)
                localStorage.setItem("basket", JSON.stringify(basketList))
            }
        })
    });
}

formCreate.btn.addEventListener("click", () =>{

    let productCandidate = {
    name: formCreate.name.value,
    price: formCreate.price.value,
    img: formCreate.img.value
}

formCreate.name.value = ""
formCreate.price.value = ""
formCreate.img.value = ""

shoplistitem = [ ...shoplistitem, productCandidate]
localStorage.setItem('shopList', JSON.stringify(shoplistitem))

GetProducts()
})



GetProducts()
