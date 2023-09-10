document.addEventListener('DOMContentLoaded',loadcart);

function loadcart(){
    loadContent();

}

function loadContent(){
    //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });


//Product Cart
let cartBtns=document.querySelectorAll('.adcrt');
cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

}



// Remove Item

function removeItem(){
    if(confirm('Are Your Sure to Remove')){
    // console.log('done');
    this.parentElement.remove();
}
}


//Change Quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
      this.value=1;
    }
    loadContent();
  }
  
  let itemList=[];



//Add Cart
function addCart(){
    let cart=this.parentElement;
    let title=cart.querySelector('.card-title').innerHTML;
    let price=cart.querySelector('.card-price').innerHTML;
    let imgSrc=cart.querySelector('.product-image').src;
    console.log(title,price,imgSrc);
}