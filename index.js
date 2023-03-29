let total = 0;
let a = ["AA","AB","AC","AD","2A","2B","2C","2D","3A","3B","3C","3D","4A","4B","4C","4D","5A","5B","5C","5D","6A","6B","7A","7B","7C","7D","8A","8B","8C","8D","9A","9B","9C","9D","10A","10B","10C","10D","JA","JB","JC","JD","QA","QB","QC","QD","KA","KB","KC","KD"];
let arr =[];
for(var i=0;i<a.length;i++)
{
    arr[i]="../images/"+a[i]+".png";
}
console.log(arr);
let card = document.getElementById("card");
let sum = document.getElementById("sum");
let result= document.getElementById("result");
let chance = document.getElementById("chance");
function addCard()
{
    let newCard= Math.floor(Math.random()*14);
    console.log("newCard = "+newCard);
    var d1="<img src='";
    var d2="' alt='test' width='150px' height='200px'/>";
    
    let val=0;
    if(Math.floor(newCard/4)==0)
    {
        val=11;
    }
    else if(newCard/4<9)
    {
        val=Number((Math.floor(newCard/4))+1);
    }
    else
    {
        val=10;
    }
    

    if(total+val>21)
    {
        total+=val;
        card.innerHTML += d1+arr[newCard]+d2; 
        sum.textContent = "Sum: "+ total;
        chance.innerHTML= "";
        result.innerHTML="<h1>Sad.. You lost!😢 <h1>";
        console.log("total = "+total+" LOST!");
    }
    else if(total+val<21)
    {
        total+=val;
        card.innerHTML += d1+arr[newCard]+d2;
        sum.textContent = "sum: "+ total;
    }
    else
    {
        total+=val;
        card.innerHTML += d1+arr[newCard]+d2; 
        sum.textContent = total;
        chance.innerHTML="";
        result.innerHTML+="<h1>Congratulation! You won the Game! 🥳<h1>"
        console.log("total = "+total+" WON! ");
    }
}
