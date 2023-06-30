import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
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
        let availableMoves = [];
        let currentSquare = board.findPiece(this);

        for (let direction of directions) {
            let currentRow = currentSquare.row;
            let currentCol = currentSquare.col;
            availableMoves.push()
        }

        return availableMoves;

    }
}
