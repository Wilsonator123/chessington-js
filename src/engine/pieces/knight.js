import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const directions = [
            {dr: -2, dc: -1}, // Up->Left
            {dr: -2, dc: 1}, // Up->Right
            {dr: -1, dc: -2}, // Left->Up
            {dr: 1, dc: -2}, // Left->Down
            {dr: 2, dc: -1}, // Down->Left
            {dr: 2, dc: 1},  // Down->Right
            {dr: -1, dc: 2},  // Right->Up
            {dr: 1, dc: 2}    // Right->Down
        ];

        let availableMoves = [];
        let currentSquare = board.findPiece(this);

        for(let direction of directions){
            let currentRow = currentSquare.row+direction.dr;
            let currentCol = currentSquare.col+direction.dc;

            if(0<=currentRow && currentRow<8 && 0<=currentCol && currentCol<8){
                availableMoves.push(new Square(currentRow, currentCol));
            }

        }

        return availableMoves;
    }
}
