const container = document.querySelector(".container");
const btn= document.querySelector("button");
btn.addEventListener("click",()=>{
    
    createGrid(prompt("number of squares"));
})





function createGrid(number){
    container.innerHTML= '';
    for (let i=0; i<number; i++)
        {
            const row = document.createElement("div");
            row.className='row';
            for (let j=0; j<number; j++){
                const column = document.createElement("div");
                column.className='column';
                row.appendChild(column);
            }
            container.appendChild(row);
        }
    const columns= document.querySelectorAll(".column");
    columns.forEach(column=>{
        column.addEventListener('mouseover',()=>{
            column.classList.add("hovered");
    
        })
        column.addEventListener('mouseout',()=>{
            column.classList.remove("hovered");
    
        })
    })
}