let boxestayl = document.querySelectorAll(".box");
 let H1=document.getElementById("h");
let trn="x";
let sq=[];
function wineffct(n1,n2,n3){
    trn="";
  setTimeout(()=>{
 H1.innerHTML="......."  ;
boxestayl[n1-1].style.backgroundColor="#fff";
boxestayl[n2-1].style.backgroundColor="#fff";
boxestayl[n3-1].style.backgroundColor="#fff";
   H1.innerHTML=`WINER (${sq[n1]})`      
 
        },300)   
        setInterval(()=>{H1.innerHTML+= "."},1000) ;
  setTimeout(()=>{
location.reload(); 
        },4000);    
}
function win(){
    for(let i=1;i<10;i++){
sq[i]=document.getElementById("b"+i).innerHTML;

    }
if(sq[1]==sq[2]&&sq[2]==sq[3]&&sq[1]!=""){
        wineffct(1,2,3)
    }
  else  if(sq[3]==sq[6]&&sq[6]==sq[9]&&sq[3]!=""){
       wineffct(3,6,9)
}
else if(sq[1]==sq[4]&&sq[4]==sq[7]&&sq[1]!=""){
       wineffct(1,4,7)
    }
else if(sq[5]==sq[4]&&sq[4]==sq[6]&&sq[6]!=""){
        wineffct(5,4,6)
    }
else if(sq[1]==sq[5]&&sq[5]==sq[9]&&sq[1]!=""){
      wineffct(1,5,9)
    }
 else if(sq[3]==sq[5]&&sq[5]==sq[7]&&sq[3]!=""){
        wineffct(3,5,7)
    }
 else if(sq[7]==sq[8]&&sq[8]==sq[9]&&sq[7]!=""){
       wineffct(7,8,9)
    }
 else if(sq[2]==sq[5]&&sq[5]==sq[8]&&sq[2]!=""){
         wineffct(2,5,8)
    }
else if(sq[1]!=""&&sq[2]!=""&&sq[3]!=""&&sq[4]!=""&&sq[5]!=""&&sq[6]!=""&&sq[7]!=""&&sq[8]!=""&&sq[9]!=""){
        trn="";
    setTimeout(()=>{
     H1.innerHTML="......."  
     H1.innerHTML="DRAW ( X AND O )"  
for(let s=0;s<9;s++){
boxestayl[s].style.backgroundColor="#ff0000";
     }
       
        },300)   
    setInterval(()=>{H1.innerHTML+=`.` },1000) 
  setTimeout(()=>{
location.reload(); 
        },3000);    
    }
}

function game(id){
    let elemant=document.getElementById(id)
    if(trn=="x"&&elemant.innerHTML==""){
        elemant.innerText="X";
        trn="o";
        setTimeout(()=>{
                
H1.style.fontStyle="normal";
H1.innerHTML="O"   
H1.style.color="#ffd56c"     
},200)
H1.innerHTML="...."   

    }else if(trn=="o"&&elemant.innerText==""){
          elemant.innerText="O";
             trn="x";
             setTimeout(()=>{
H1.textContent="X"        
        },200)
        H1.textContent="...."   

    }
win();
}













boxestayl.forEach(bs => {
        bs.style.boxShadow= "0px 0px 30px #08085ec0 "; 

});
 