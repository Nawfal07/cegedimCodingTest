// Coding test

const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const vertical = [1, 2, 3, 4, 5, 6, 7, 8]

const moveUp = (pos, counter) => {
    const newY = pos.y + counter;
    return newY <= 8 ? { x: pos.x, y: newY } : { x: pos.x, y: -1 };
}

const moveDown = (pos, counter) => {
    const newY = pos.y - counter;
    return newY >= 1 ? { x: pos.x, y: newY } : { x: pos.x, y: -1 };
}

const moveLeft = (pos, counter) => {
    const index = horizontal.indexOf(pos.x);
    return index - counter >= 0 ? { x: horizontal[index - counter], y: pos.y } : { x: -1, y: pos.y }
}

const moveRight = (pos, counter) => {
    const index = horizontal.indexOf(pos.x);
    return index - counter < horizontal.length ? { x: horizontal[index + counter], y: pos.y } : { x: -1, y: pos.y }
}

const checkIfPositionContainsChessPiece = (pos, occupiedPositions) => {
    const result = occupiedPositions.filter(elt => elt.x === pos.x && elt.y === pos.y);
    return result.length > 0
}

const displayMovement = (oldPosition, newPosition, eatEnemie = false) => {
    const separator = eatEnemie ? 'x' : '-';
    console.log('T' + oldPosition.x + oldPosition.y + separator + newPosition.x + newPosition.y);
}

const move = (moveCallback, intialPosition, enemies, allies) => {
    let counter = 1;
    let canMoveToDirection = true;
    while (canMoveToDirection && counter < 8) {
        const newPosition = moveCallback(intialPosition, counter);
        if (newPosition.x !== -1 && newPosition.y !== -1) {
            // Check if enemy is in new position
            if (checkIfPositionContainsChessPiece(newPosition, enemies)) {
                displayMovement(intialPosition, newPosition, true);
                canMoveToDirection = false;
            }
            // Check if ally is in new position
            else if (checkIfPositionContainsChessPiece(newPosition, allies)) {
                canMoveToDirection = false;
            }
            else {
                displayMovement(intialPosition, newPosition);
                counter++;
            }
        } else {
            canMoveToDirection = false
        }
    }
}

const main = () => {
    let intialPosition = {
        x: 'd',
        y: 5
    }

    const alliesPositions = [
        {
            x: 'd',
            y: 2
        },
        {
            x: 'g',
            y: 5
        }
    ]

    const enemiesPositions = [
        {
            x: 'd',
            y: 7
        },
    ]

    const movementsCallbacks = [moveDown, moveRight, moveUp, moveLeft];

    movementsCallbacks.forEach(movement => {
        move(movement, intialPosition, enemiesPositions, alliesPositions);
    })
}

main();

// Nawfal Hamdi