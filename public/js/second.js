


//bill logic
 
 games=document.querySelectorAll(".flip-card-front span");

let info=[];
for(game of games)
{
  console.log(game.innerHTML);
   details=document.getElementById(game.innerHTML);
  let x=details.childNodes[3].innerHTML;
  console.log(details.childNodes);
  cost=x.split(':')[1];
  let gamebox={
    name:game.innerHTML,
    price:cost
  }
  info.push(gamebox);

  
}
console.log(info);
let myItems=[];

function createMenuItem(name) {
 
  let div = document.createElement('div');
  // div.className+="bill-items";
  let array=name.split('.');
  console.log(array);
 
  if (count==0)
  {
    var d=new Date();
    var year=d.getFullYear();
    var month=d.getMonth()+1;
    var day=d.getDate();
    var buy_date=day+"/"+month+"/"+year;
    
    console.log(buy_date);

    let span=document.createElement('div');
    let billid=document.createElement('div');
    
    let generate=document.createElement('div');
    generate.className+="button";
    generate.style.marginBottom="30px";
  
    generate.textContent="generate";
    generate.id="generate";
    generate.addEventListener("click",function(){
      finalbill=[];
      finalnames=[];
      finalfinalbill=[];
    finalbill=(document.querySelectorAll(".rec-row"));
    for(item of finalbill)
    {
      
      let item_name=item.childNodes[0].innerHTML;
      
      
      let item_price=Number(item.childNodes[1].innerHTML.split(' ')[1]);
      
     
      // console.log(item_name+" "+item_price);
      // console.log(sum);
      if(!(finalnames.includes(item_name)))
      {
        
       
        finalnames.push(item_name);
        let billItem={
          item_name:item_name,
          item_price:item_price,
          item_count:1,
        }
        finalfinalbill.push(billItem);
      }
      else{
        for(x of finalfinalbill)
        {
          if(x.item_name==item_name)
          {
            x.item_count++;
          }
        }
      }

    
     
  

      
    }
    console.log(finalfinalbill);
    // this.parentElement.removeChild(div);
    console.log(this.parentElement);
    var rows=this.parentElement.getElementsByClassName("rec-row");
    while(rows.length>0)
    {
      rows[0].parentElement.removeChild(rows[0]);
    }

    div.className+="rec-row";
    // name=document.createElement('span');
    // price=document.createElement('span');
    // qty=document.createElement('span');
    // name.textContent="Name";
    // price.textContent="Price";
    // qty.textContent="Qty";
    // div.appendChild(name);
    // div.appendChild(price);
    // div.appendChild(qty);
    // bill.appendChild(div);
    for(finalitem of finalfinalbill)
    {
      finaldiv=document.createElement('div');
      
      
    }
  


      

    })
  
    let no=Math.floor(Math.random()*999999999+12345);
    span.textContent=buy_date;
    billid.textContent="\n Bill id:"+no;
    billid.style.paddingBottom="30px";
    
    bill.appendChild(span);
    bill.appendChild(billid);
    bill.appendChild(generate);
    }
    



  count++;
  let text=document.createElement('span');
  let del=document.createElement('span');
  del.className+="delbutton";
  del.addEventListener("click",function(){
    this.parentElement.parentElement.removeChild(div);
    

  })
  let price=document.createElement('span');
  price.className+="price";
  price.textContent=array[1];
  let icon=document.createElement('i');
  icon.className+="fas fa-trash-alt";
  // <i class="fas fa-trash-alt"></i>
  del.appendChild(icon);
 text.textContent=array[0];
 text.className+="name";
  let hr=document.createElement('hr');
  div.appendChild(text);
  div.appendChild(price);
  
  div.appendChild(del);
  div.className+="rec-row";
  
  div.style.fontSize="20px";
  // div.style.borderStyle="solid";
  // div.style.borderRadius="2%";
  div.style.margin="0.5em";
  div.style.color="white";
  div.appendChild(hr);
  

  return div;

}
var count=0;
const bill=document.getElementsByClassName("receipt-card")[0];
buttons=document.querySelectorAll(".button")
for(let i=0;i<buttons.length;i++)
{
  console.log(buttons[i].innerHTML);
  buttons[i].addEventListener("click",function(){
    console.log(buttons[i].parentElement.id);
    let name=buttons[i].parentElement.id;
    for(var j =0;j<info.length;j++)
    {
      if(info[j].name==name)
      {
        console.log(info[j].price);
        myItems.push(info[j]);
        
        break;
      }
    }
    
    bill.appendChild(createMenuItem(info[j].name+"."+info[j].price));
    
  });
}



