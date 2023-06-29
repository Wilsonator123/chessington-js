import Piece from './piece';
import Player from "../player";
import Square from "../square";
import Bishop from "./bishop";
import Rook from "./rook";


export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let availableMoves = [];
        let currentSquare = board.findPiece(this);
        const directions = [
            {dr: 1, dc: 0}, // Up
            {dr: -1, dc: 0}, // Down
            {dr: 0, dc: -1}, // Left
            {dr: 0, dc: 1}, // Right
            {dr: -1, dc: -1}, // Up-left
            {dr: -1, dc: 1},  // Up-right
            {dr: 1, dc: -1},  // Down-left
            {dr: 1, dc: 1}    // Down-right
        ];

        for(let direction of directions){
            let currentRow = currentSquare.row+direction.dr;
            let currentCol = currentSquare.col+direction.dc;

            while(0<=currentRow && currentRow<8 && 0<=currentCol && currentCol<8){
                availableMoves.push(new Square(currentRow, currentCol));
                currentRow += direction.dr;
                currentCol += direction.dc;
            }


        }

        return availableMoves;
    }
}
