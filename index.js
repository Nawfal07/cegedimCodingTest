// Coding test

const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const vertical = [1, 2, 3, 4, 5, 6, 7, 8]

const moveUp = (pos, counter) => {
    return { x: pos.x, y: pos.y + counter }
}

const moveDown = (pos, counter) => {
    return { x: pos.x, y: pos.y - counter }
}

const moveLeft = (pos, counter) => {
    const index = horizontal.indexOf(pos.x);
    let newX = -1;
    if (index - counter >= 0) {
        newX = horizontal[index - counter];
    }
    return { x: newX, y: pos.y }
}

const moveRight = (pos, counter) => {
    const index = horizontal.indexOf(pos.x);
    let newX = -1;
    if (index + counter < horizontal.length) {
        newX = horizontal[index + counter];
    }
    return { x: newX, y: pos.y }
}

const checkIfPositionContainsChessPiece = (pos, occupiedPositions) => {
    const result = occupiedPositions.filter(elt => elt.x === pos.x && elt.y === pos.y);
    return result.length > 0
}

const displayMovement = (oldPosition, newPosition, eatEnemie = false) => {
    const separator = eatEnemie ? 'x' : '-';
    console.log('T' + oldPosition.x + oldPosition.y + separator + newPosition.x + newPosition.y);

}
// Testing
let positionTour = {
    x: 'd',
    y: 5
}

const main = () => {
    let intialPosition = {
        x: 'd',
        y: 5
    }

    const allies = [
        {
            x: 'd',
            y: 2
        },
        {
            x: 'g',
            y: 5
        }
    ]

    const enemies = [
        {
            x: 'd',
            y: 7
        }
    ]

    let canMoveUp = true;
    let canMoveDown = true;
    let canMoveLeft = true;
    let canMoveRight = true;

    // Move DOWN
    let counter = 1;
    while (canMoveDown && counter < 8) {
        const newPosition = moveDown(intialPosition, counter);
        if (vertical.includes(newPosition.y)) {
            // Check if enemy is next position
            if (checkIfPositionContainsChessPiece(newPosition, enemies)) {
                displayMovement(intialPosition, newPosition, true);
                canMoveDown = false;
            }
            else if (checkIfPositionContainsChessPiece(newPosition, allies)) {
                canMoveDown = false;
            }
            else {
                displayMovement(intialPosition, newPosition);
                counter++;
            }
        } else {
            canMoveDown = false
        }
    }

    // Move RIGHT
    counter = 1;
    while (canMoveRight && counter < 8) {
        const newPosition = moveRight(intialPosition, counter);
        if (newPosition.x !== -1) {
            // Check if enemy is next position
            if (checkIfPositionContainsChessPiece(newPosition, enemies)) {
                displayMovement(intialPosition, newPosition, true);
                canMoveRight = false;
            }
            else if (checkIfPositionContainsChessPiece(newPosition, allies)) {
                canMoveRight = false;
            }
            else {
                displayMovement(intialPosition, newPosition);
                counter++;
            }
        } else {
            canMoveRight = false
        }
    }

    counter = 1;
    // move UP
    while (canMoveUp && counter < 8) {
        const newPosition = moveUp(intialPosition, counter);
        if (vertical.includes(newPosition.y)) {
            // Check if enemy is next position
            if (checkIfPositionContainsChessPiece(newPosition, enemies)) {
                displayMovement(intialPosition, newPosition, true);
                canMoveUp = false;
            }
            else if (checkIfPositionContainsChessPiece(newPosition, allies)) {
                canMoveUp = false;
            }
            else {
                displayMovement(intialPosition, newPosition);
                counter++;
            }
        } else {
            canMoveUp = false
        }

    }



    // Move LEFT
    counter = 1;
    while (canMoveLeft && counter < 8) {
        const newPosition = moveLeft(intialPosition, counter);
        if (newPosition.x !== -1) {
            // Check if enemy is next position
            if (checkIfPositionContainsChessPiece(newPosition, enemies)) {
                displayMovement(intialPosition, newPosition, true);
                canMoveLeft = false;
            }
            else if (checkIfPositionContainsChessPiece(newPosition, allies)) {
                canMoveLeft = false;
            }
            else {
                displayMovement(intialPosition, newPosition);
                counter++;
            }
        } else {
            canMoveLeft = false
        }
    }
}


main()


// Nawfal Hamdi