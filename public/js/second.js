
//bill logic

games = document.querySelectorAll(".flip-card-front span");

var info = [];
for (game of games) {
  console.log(game.innerHTML);
  details = document.getElementById(game.innerHTML);
  let x = details.childNodes[3].innerHTML;
  console.log(details.childNodes);
  cost = x.split(':')[1];
  let gamebox = {
    name: game.innerHTML,
    price: cost
  }
  info.push(gamebox);


}
console.log(info);
let myItems = [];

function createMenuItem(name) {

  let div = document.createElement('div');
  // div.className+="bill-items";
  let array = name.split('.');
  console.log(array);

  if (count == 0) {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var buy_date = day + "/" + month + "/" + year;

    console.log(buy_date);

    let span = document.createElement('div');
    let billid = document.createElement('div');

    let generate = document.createElement('div');
    generate.className += "button";
    generate.style.marginBottom = "30px";

    generate.textContent = "generate";
    generate.id = "generate";
    generate.addEventListener("click", function () {
      this.style.display="none";
      for(let k=0;k<buttons.length;k++)
      {
        buttons[k].style.display="none";
      }

      finalbill = [];
      finalnames = [];
      finalfinalbill = [];
      finalbill = (document.querySelectorAll(".rec-row"));
      for (item of finalbill) {

        let item_name = item.childNodes[0].innerHTML;


        let item_price = Number(item.childNodes[1].innerHTML.split(' ')[1]);


        // console.log(item_name+" "+item_price);
        // console.log(sum);
        if (!(finalnames.includes(item_name))) {


          finalnames.push(item_name);
          let billItem = {
            item_name: item_name,
            item_price: item_price,
            item_count: 1,
            total_price: item_price
          }
          finalfinalbill.push(billItem);
        }
        else {
          for (x of finalfinalbill) {
            if (x.item_name == item_name) {
              x.item_count++;
              x.total_price=x.item_count*x.item_price;
            }
          }
        }






      }
      console.log(finalfinalbill);
      // this.parentElement.removeChild(div);
      console.log(this.parentElement);
      var rows = this.parentElement.getElementsByClassName("rec-row");
      while (rows.length > 0) {
        rows[0].parentElement.removeChild(rows[0]);
      }
      dev=document.createElement('div');
      dev.className += "rec4-row";
      tot_pri=document.createElement('span');
      name = document.createElement('span');
      price = document.createElement('span');
      qty = document.createElement('span');
      tot_pri.textContent="Total Price"
      name.textContent = "Name";
      price.textContent = "Price";
      qty.textContent = "Qty";
      dev.appendChild(name);
      dev.appendChild(price);
      dev.appendChild(qty);
      dev.appendChild(tot_pri);
      bill.appendChild(dev);
      let he = document.createElement('hr');
      bill.appendChild(he);
      console.log("here");
      let tot_totpri=0
      for (finalitem of finalfinalbill) {
        finaldiv = document.createElement('div');
        finaldiv.className+="rec4-row";
        tot_totpri+=finalitem.total_price;

        tot_pri=document.createElement('span');
        name = document.createElement('span');
        price = document.createElement('span');
        qty = document.createElement('span');
        name.textContent=finalitem.item_name;
        price.textContent=finalitem.item_price;
        qty.textContent=finalitem.item_count;
        tot_pri.textContent=finalitem.total_price;
       
      finaldiv.appendChild(name);
      finaldiv.appendChild(price);
      finaldiv.appendChild(qty);
      finaldiv.appendChild(tot_pri);
      // bill.appendChild(hr);
      bill.appendChild(finaldiv);
       


      }
      let hr = document.createElement('hr');
      
      finaldiv = document.createElement('div');
      bill.appendChild(hr);
      finaldiv.className+="rec4-row";
        name = document.createElement('span');
        price = document.createElement('span');
        qty = document.createElement('span');
      
      tot_pri=document.createElement('span');
      tot_pri.textContent=tot_totpri;
      finaldiv.appendChild(name);
      finaldiv.appendChild(price);
      finaldiv.appendChild(qty);
      finaldiv.appendChild(tot_pri)
      
      bill.appendChild(finaldiv);
      bill.style.backgroundColor="white";
      bill.style.color="black";
      thanks_text=document.createElement('span');
      thanks_text.textContent="Enjoy your time at the Space Zone !";
      thanks_text.style.color="black";
      thanks_text.fontSize="20px";
      bill.appendChild(thanks_text);

      bill.style.height="auto";






    });
    console.log("there");
    let no = Math.floor(Math.random() * 999999999 + 12345);
    span.textContent = buy_date;
    billid.textContent = "\n Bill id:" + no;
    billid.style.paddingBottom = "30px";

    bill.appendChild(span);
    bill.appendChild(billid);
    bill.appendChild(generate);
  }




  count++;
  let text = document.createElement('span');
  let del = document.createElement('span');
  del.className += "delbutton";
  del.addEventListener("click", function () {
    this.parentElement.parentElement.removeChild(div);


  })
  let price = document.createElement('span');
  price.className += "price";
  price.textContent = array[1];
  let icon = document.createElement('i');
  icon.className += "fas fa-trash-alt";
  // <i class="fas fa-trash-alt"></i>
  del.appendChild(icon);
  text.textContent = array[0];
  text.className += "name";
  let hr = document.createElement('hr');
  div.appendChild(text);
  div.appendChild(price);

  div.appendChild(del);
  div.className += "rec-row";

  div.style.fontSize = "20px";
  // div.style.borderStyle="solid";
  // div.style.borderRadius="2%";
  div.style.margin = "0.5em";
  div.style.color = "white";
  div.appendChild(hr);


  return div;

}
var count = 0;
var bill = document.getElementsByClassName("receipt-card")[0];
var buttons = document.querySelectorAll(".button")
for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i].innerHTML);
  buttons[i].addEventListener("click", function () {
    console.log(buttons[i].parentElement.id);
    let name = buttons[i].parentElement.id;
    for (var j = 0; j < info.length; j++) {
      if (info[j].name == name) {
        console.log(info[j].price);
        myItems.push(info[j]);

        break;
      }
    }

    bill.appendChild(createMenuItem(info[j].name + "." + info[j].price));

  });
}


function myFunction() {
  document.getElementById("myInput").select();
  document.getElementById("myDropdown").classList.toggle("show");
  // console.log("i got clicked");
  // if(click==1)
  // {
  //   document.getElementById("myDropdown").classList.toggle("show");
  //   click=0;

  // }
}

function filterFunction(e) {
  if(e==MouseEvent)
  {
    console.log("ya its me");
  }
 if(e.keyCode==13)
 {
   document.getElementById("search").click();
   e.preventDefault();
 }
  
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");

  for (let i = 0; i < a.length; i++) {
      
  
    txtValue = a[i].textContent ;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
      // console.log("out");
      let c=0;
      for(let j=0;j<a.length;j++)
      {
        // console.log("check");
        if(a[j].style.display=="none")
        {
          c++;
        }
      }
      if(c==a.length-1)
      {

        document.getElementById("myInput").value=a[i].textContent;
        // console.log("mai hua kya");
        document.getElementById("myInput").select();
 

        // for(let j=0;j<a.length;j++)
        // {
         
        //   a[j].style.display=="visible";
          
        // }
        
        
      }

    } else {
      // console.log("hey");
      a[i].style.display = "none";
    }
    // console.log("if ke bahaar");
  }
} 

// let dropdowns=document.querySelectorAll('#myDropdown a');
// for(let i=0;i<dropdowns.length;i++)
// {
//   // console.log("kuch bhi hua kya");
//   dropdowns[i].addEventListener("click",function(){
    
//     myFunction();
//     var click=1;
//   });
// }

search=document.getElementById("search");
search.addEventListener("click",function(){
  let game_name=document.getElementById("myInput").value;
  let ref="#"+game_name;
  this.setAttribute("href",ref);
  const ele=document.getElementById(game_name);
  const flipCard=ele.parentElement.parentElement;
  flipCard.style.borderStyle="solid";
  flipCard.style.borderColor="#25FFFF";
  flipCard.style.fontSize="20px";
  


  flipCard.style.opacity=1;
  
  flipCard.style.color="pink";
  function print(){
    // console.log('chal jaa bro');
    flipCard.style.borderStyle="";
  flipCard.style.borderColor="";
  flipCard.style.opacity=0.8;
  }
  // document.getElementById("myInput").select();
  setTimeout(print,3000);

  
  

  // border-style:dashed;
  // border-color: white;
  // border-radius: 2%;
  
  


})


// a = document.querySelectorAll('a');
// for(i of a){
//   console.log(i.textContent);
// i.addEventListener('click', function(){
//   console.log('hua kya add');
//   game_name = this.textContent;
//   const ele=document.getElementById(game_name);
//   var slide_to="#"+game_name;
//   this.setAttribute("href",slide_to);
//   const flipCard=ele.parentElement.parentElement;
//   flipCard.style.borderStyle="solid";
//   flipCard.style.borderColor="#25FFFF";
//   flipCard.style.fontSize="20px";
  


//   flipCard.style.opacity=1;
  
//   flipCard.style.color="pink";
//   function print(){
//     // console.log('chal jaa bro');
//     flipCard.style.borderStyle="";
//   flipCard.style.borderColor="";
//   flipCard.style.opacity=0.8;
//   }
//   // document.getElementById("myInput").select();
//   setTimeout(print,3000);

// })
// }
