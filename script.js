const grid = document.querySelector("#grid");
let gridInfo = grid.getBoundingClientRect();
let width = gridInfo.width;
let heigth = gridInfo.height;
let size = 16;
let random = false;

function createGrid(size){
    for (let i = 0; i < size*size; i++){
        let box = document.createElement("div");
        box.addEventListener("mouseover", (e) => {
            if (random === false){
                box.style.backgroundColor = "white";
            }
            else {
                box.style.backgroundColor = getRandomColor();
            }
        })
        box.classList.add("item");
        grid.appendChild(box);
    }
}

deleteChildren();
createGrid(size)


const changeSize = document.querySelector("#changeSize");
changeSize.addEventListener("click", (e) => {
    //let tempSize = 0;
    do{
        size = prompt("Enter new size between 10 and 100");
    }
    while (size < 10 || size > 100);
    document.documentElement.style.setProperty('--columns', size);
    deleteChildren();
    createGrid(size)
});

function deleteChildren(){
    const myNode = document.getElementById("grid");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

const reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
    size = 16;
    random = false;
    document.documentElement.style.setProperty('--columns', size);
    deleteChildren();
    createGrid(size);
})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const randomButton = document.getElementById("random")
randomButton.addEventListener("click", (e) => {
    if (random === false)
        {
            random = true
        }
    else {
        random = false;
    };
    document.documentElement.style.setProperty('--columns', size);
    deleteChildren();
    createGrid(size);
})

