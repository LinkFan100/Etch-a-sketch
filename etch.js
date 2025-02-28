
function divCreate(divsNum,mainDivClass){
    const mainDiv = document.querySelector(mainDivClass);
    if(!mainDiv){
        console.error("No such class exist");
        return;
    }
    for(let i = 0;i<divsNum;i++){
        const divs = document.createElement("div");
        divs.style.border = '1px solid red';
        divs.style.padding = '30px';
        divs.classList.add("gridItem");
        mainDiv.appendChild(divs);
    }
    
}
function getRandomNumber() {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
divCreate(16,".mainDiv");;
const gridItem = document.querySelectorAll(".gridItem");
gridItem.forEach(i => {
    i.addEventListener("mouseover",function(event){
        i.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
        
    })

});
