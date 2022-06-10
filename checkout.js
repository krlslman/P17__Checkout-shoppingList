const taxRate = 0.18;
const shippingPrice =15.0;

window.addEventListener("load",()=>{
    localStorage.setItem("taxRate",taxRate);
    localStorage.setItem("shippingPrice",shippingPrice);

})

let products =document.querySelector(".products");
let bigBigParentDiv = document.querySelector("#product-panel2")
window.addEventListener("load",()=>{
    total();
 
})

products.addEventListener("click",(event)=>{
    if(event.target.classList.contains("plus")){
       event.target.previousElementSibling.innerText++

       cartTotal(event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText,event.target.previousElementSibling.innerText,event.target.parentElement.parentElement);
      

 
     
       
    }

    if (event.target.classList.contains("minus")){
        if(event.target.nextElementSibling.innerText>1){
            event.target.nextElementSibling.innerText--;
            
            cartTotal(event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText,event.target.nextElementSibling.innerText,event.target.parentElement.parentElement);

    
          



        }else{
            if(confirm("Bu ürünü sepetten kaldıralım mı?")){
                event.target.parentElement.parentElement.parentElement.remove()
            
        
            }
        }
    }
    if (event.target.classList.contains("remove-product")){
        event.target.parentElement.parentElement.parentElement.remove();
     

    }
    total()
})


function total(){
   
    let subtotal=0;
  
    
    bigBigParentDiv.querySelectorAll(".product-line-price").forEach(x=> {
        subtotal += Number(x.innerText) });
       
    bigBigParentDiv.querySelector("#cart-subtotal").lastElementChild.innerText =subtotal.toFixed(2);
       
    bigBigParentDiv.querySelector("#cart-tax").lastElementChild.innerText= (subtotal*18/100).toFixed(2);
        
    bigBigParentDiv.querySelector("#cart-shipping").lastElementChild.innerText =(bigBigParentDiv.querySelector("#cart-tax").lastElementChild.innerText>0) ? localStorage.getItem("shippingPrice"):0;
    bigBigParentDiv.querySelector("#cart-total").lastElementChild.innerText = (subtotal+ Number(bigBigParentDiv.querySelector("#cart-tax").lastElementChild.innerText)+ Number(bigBigParentDiv.querySelector("#cart-shipping").lastElementChild.innerText)).toFixed(2)


      
    }

function cartTotal(price,quantity,bigParentDiv) {
    bigParentDiv.lastElementChild.innerText = (price*quantity).toFixed(2);
  
 
}
console.log(bigBigParentDiv.querySelector("#cart-shipping"));


