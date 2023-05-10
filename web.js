let toggle_bar = document.querySelector(".nav-header");

let slidebar = document.querySelector(".slidebar");

toggle_bar.addEventListener("click", function() {
  if (toggle_bar.firstElementChild.classList.contains("fa-bars"))
  {
    toggle_bar.firstElementChild.classList.replace("fa-bars", "fa-times");
  }
  else
  {
    toggle_bar.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
  slidebar.classList.toggle("slidebaractive")
})





const product = [
    {
        id: 0,
        image: 'https://images.pexels.com/photos/4339598/pexels-photo-4339598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Books',
        price: 15,
    },
    {
        id: 1,
        image: 'https://media.istockphoto.com/photos/hand-of-a-lady-selecting-yellow-colored-saree-in-a-shop-picture-id1301740530',
        title: 'Saree',
        price: 10,
    },
    {
        id: 2,
        image: 'https://media.istockphoto.com/photos/black-coffee-maker-with-green-led-lights-picture-id177395430',
        title: 'Coffee Maker',
        price: 30,
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/5816934/pexels-photo-5816934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Washing Machine',
        price: 35,
    },
    {
        id: 4,
        image: 'https://media.istockphoto.com/photos/folded-blue-jeans-on-a-white-background-modern-casual-clothing-flat-picture-id1281304280',
        title: 'Jeans',
        price: 8,
    },
    
      {
        id: 5,
        image: 'https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        title: 'Watch',
        price: 15,
      },
        {
          id: 6,
          image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'Shoes',
          price: 5,
        },
          {
            id: 7,
            image: 'https://images.pexels.com/photos/4295985/pexels-photo-4295985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            title: 'Hoodies',
            price: 17,
          },
            {
              id: 8,
              image: 'https://media.istockphoto.com/photos/vintage-plates-with-silver-teaspoons-picture-id184363070',
              title: 'Dinner Set',
              price: 50,
            },
              {
                id: 9,
                image: 'https://media.istockphoto.com/photos/woman-turning-on-air-conditioner-picture-id1325708905',
                title: 'Air Conditioner',
                price: 55,
              },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}


let suggestions = [
 "Air Conditioner", "Watches", "Jeans", "Hoddies", "Sarees", "Washing machine", "Coffee maker","Telivision","Dinner set", "Shoes", "Microwave","kurtis","Bed","chair","sofa","painting","mobile","phone","sandals","high heels","sneakers","candles","spoon","utensiles","frames"
 
 
];

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if (userData) {
    icon.onclick = () => {
      webLink = `https://www.google.com/search?q=${userData}`;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
    }
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active"); //show autocomplete box
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
}

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = () => {
    webLink = `https://www.google.com/search?q=${selectData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  }
  searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;

}

const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});




