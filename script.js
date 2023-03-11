let areas = {
    a: null,
    b: null,
    c: null
}

//Events Item
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd)
});

//Events Area
document.querySelectorAll('.area').forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', drop);
})

//Events neutralArea
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutralArea);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutralArea);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutralArea);

//Functions Item
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}

//Functions Area
function dragOver(e) {
    if(e.currentTarget.querySelector('.item') === null){
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}

function drop(e) {
    e.currentTarget.classList.remove('hover');

    if(e.currentTarget.querySelector('.item') === null){
        let dragItem = document.querySelector('.dragging');
        e.currentTarget.appendChild(dragItem);
        updateAreas();
    }
}

//Functions NeutralArea
function dragOverNeutralArea(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeaveNeutralArea(e) {
    e.currentTarget.classList.remove('hover');
}

function dropNeutralArea(e) {
    e.currentTarget.classList.remove('hover');
    let dragItem = document.querySelector('.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas()
}

function updateAreas(){
    
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');

        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        }else{
            areas[name] = null;
        }
    })

    if(areas.a === '1' && areas.b === '2' && areas.c === '3'){
        document.querySelector('.areas').classList.add('correct');
        document.querySelector('.btn-reiniciar').style.display = "block";
        document.querySelector('.neutralArea').classList.add('acertou');
        document.querySelector('.neutralArea').innerHTML = "ACERTOU!!!";
        //console.log("ACERTOU");
    }else{
        document.querySelector('.areas').classList.remove('correct');
        //console.log("ERROU");
    }

}