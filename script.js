//your JS code here. If required.
let next=document.getElementById("next");
let previous=document.getElementById("previous")
let i=2;
next.addEventListener("click",()=>{
  if(i<6)
  {
    next.disabled=false;
    previous.disabled=false;
    let circle=document.getElementById(`circle-${i}`);
    let line=document.getElementById(`line-${i-1}`);
    // console.log(circle);
    circle.classList.add("active");
    line.classList.add("active");
   
  }
  if(i==5)
  {
    next.disabled=true;
    // alert("You have reached the limit");
  }
  i++;
})
previous.addEventListener("click",()=>{
  if(i>2)
  {
    next.disabled=false;
    previous.disabled=false;
    let circle=document.getElementById(`circle-${i-1}`);
    let line=document.getElementById(`line-${i-2}`);
    // console.log(circle);
    circle.classList.remove("active");
    line.classList.remove("active");
    
  }
  if(i<=3)
  {
    previous.disabled=true;
    // alert("You have reached the limit");
  }
  i--;
})
