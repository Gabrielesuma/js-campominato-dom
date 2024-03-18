document.querySelector('button#play-button').addEventListener('click', function(){
    const cellNum = parseInt(document.querySelector('select#play-select').value);
    newGame(cellNum);
});

function newGame(numberOfSquares){
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    let list = [];
    for(i = 0; i < 16; i++){
        let uniqueNum = generateUniqueRandomNumber(1, numberOfSquares, list);
        list.push(uniqueNum);
    }
    console.log(list);

    for(i = 0; i < numberOfSquares; i++){
        const newSquare = document.createElement('article');
        newSquare.classList.add('square');


        if(numberOfSquares === 81){
            newSquare.classList.add('nine');
            newSquare.addEventListener('click', function(){
                for(i = 0; i < numberOfSquares; i++){
                    if(list.includes(i + 1)){
                        newSquare.classList.add('clicked-red');
                        console.log('Mi dispiace ma hai perso');
                    } else {
                        newSquare.classList.add('clicked');
                    }
                }
            });
        } else if(numberOfSquares === 49){
            newSquare.classList.add('seven');
        }

        newSquare.addEventListener('click', function(){
            newSquare.classList.add('clicked');
        });
    
        const spanContent = document.createElement('span');
        spanContent.append(i + 1);
    
        newSquare.appendChild(spanContent);
        grid.appendChild(newSquare);
    }
};



/*if(uniqueNum === i + 1){
        newSquare.addEventListener('click', function(){
            newSquare.classList.add('clicked-red');
            console.log('Mi dispiace ma hai perso');
        });
    }*/



function generateUniqueRandomNumber(min, max, blacklist){
    let isFound = false;
    let randomNumber;

    while(isFound === false){
        randomNumber = getRandomInt(min, max);

        if(blacklist.includes(randomNumber) === false){
            isFound = true;
        }
    }
    return randomNumber;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}