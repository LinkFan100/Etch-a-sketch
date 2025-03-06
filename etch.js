const gridSizeButton = document.querySelector(".inputSubmit");
  let gridSize = 16*16;
function divCreate(divsNum,mainDivClass,paddingSize){
    const mainDiv = document.querySelector(mainDivClass);
    if(paddingSize==null){
        paddingSize = 16;
    }
    if(paddingSize==1){
        paddingSize = 2;
    }
    if(!mainDiv){
        console.error("No such class exist");
        return;
    }
    const mainDivSize = divsNum;
    if(divsNum>960){
        mainDiv.style.height = `${960}px`;
    mainDiv.style.width = `${960}px`;
    }else{
    mainDiv.style.height = `${mainDivSize}px`;
    mainDiv.style.width = `${mainDivSize}px`;}
    for(let i = 0;i<divsNum;i++){
        const divs = document.createElement("div");
        divs.style.border = '1px solid black';
        if(divsNum>960){
      divs.style.height = `${(960/paddingSize)-2}px`
        divs.style.width = `${(960/paddingSize)-2}px`
        }
        else
        {divs.style.height = `${paddingSize-2}px`
        divs.style.width = `${paddingSize-2}px`}
        divs.classList.add("gridItem");
        mainDiv.appendChild(divs);
    }
    colorChange();
    
}
function getRandomNumber() {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  gridSizeButton.addEventListener("click",function(){
    const mainDiv = document.querySelector(".mainDiv");

    
    const gridSizeInput = document.querySelector(".inputGrid");
    const gridSizeValue = gridSizeInput.value;

    
    if(gridSizeValue > 100 || gridSizeValue <= 0 || gridSizeValue == null){
        alert("Invalid input must be a number greater than 0 or less then or equal to 100. Please try again.")
        return null;
    }
    else 
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.lastChild);
      }
    gridSize = gridSizeValue * gridSizeValue;
    divCreate(gridSize,".mainDiv",gridSizeValue);
  })
divCreate(gridSize,".mainDiv",null);
function colorChange(){
const gridItem = document.querySelectorAll(".gridItem");
gridItem.forEach(i => {
    i.addEventListener("mouseover",function(event){
        i.style.backgroundColor = `rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    
        if(i.style.opacity!="0"){
        i.style.opacity = (parseFloat(i.style.opacity) || 1) - 0.1;}
        
        
    
    })

});}
