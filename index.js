let tp1=0;
let nt=0;
let gtp=0;
const pick=document.querySelectorAll(".seat");
for(let pik of pick){
    pik.addEventListener("click", function(){
        const cl=pik.classList.value;
        if(cl.includes("bg-red-300")){
            console.log("Exist");
        }
    //     if(cl"bg-red-300"){
    //         console.log("Exist");
    //     }
        else{
       const et= pik.querySelector("h2")
        const tb=document.getElementById("tb");
        const tr=document.createElement("tr");
       const td1=document.createElement("td");
       const td2=document.createElement("td");
       const td3=document.createElement("td");
        td2.innerText='Economic';
        td1.innerText=et.innerText;
        td3.innerText='500';
       tb.appendChild(tr);
       tr.appendChild(td1);
       tr.appendChild(td2);
       tr.appendChild(td3);
       pik.classList.add('bg-red-300');
       const tp=document.getElementById("tp");
       tp1=tp1+500;
       tp.innerText=tp1;
       const np=document.getElementById("nt");
       nt=nt+1;
       np.innerText=nt;}
    })
}

const couponBtn=document.getElementById("coupon-btn")
     couponBtn.addEventListener("click", function(){
    const couponCode=document.getElementById("coupon").value;
    const coupon=couponCode.toString();
    const tp=parseInt(document.getElementById("tp").innerText);
    if(coupon==="off15"){
      gtp=tp-(tp*15)/100;
      document.getElementById("gtp").innerText=gtp;
    }
   console.log(gtp)
})