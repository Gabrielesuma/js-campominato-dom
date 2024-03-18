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

    let score = 0;

    for(i = 0; i < numberOfSquares; i++){
        const newSquare = document.createElement('article');
        newSquare.classList.add('square');

        newSquare.addEventListener('click', function(){
            let num = parseInt(newSquare.innerHTML);

            if(list.includes(num)){
                newSquare.classList.add('clicked-red');
                console.log(`Mi dispiace ma hai perso, il tuo punteggio è di ${score}`);
            } else {
                newSquare.classList.add('clicked');
                score++;
            }
        });

        if(numberOfSquares === 81){
            newSquare.classList.add('nine');
            
        } else if(numberOfSquares === 49){
            newSquare.classList.add('seven');
        }

        newSquare.addEventListener('click', function(){
            newSquare.classList.add('clicked');
        });
    
        newSquare.innerHTML = i + 1;
        grid.appendChild(newSquare);
    }
};

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