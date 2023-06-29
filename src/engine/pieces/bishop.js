import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board) {
        const directions = [
            {dr: -1, dc: -1}, // Up-left
            {dr: -1, dc: 1},  // Up-right
            {dr: 1, dc: -1},  // Down-left
            {dr: 1, dc: 1}    // Down-right
        ];

        let currentSquare = board.findPiece(this);
        let row = currentSquare.row;
        let col = currentSquare.col;
        const moves = [];

        // For each direction, keep moving until the edge of the board is reached
        for (let direction of directions) {
            let currentRow = row + direction.dr;
            let currentCol = col + direction.dc;

            while (currentRow >= 0 && currentRow < 8 && currentCol >= 0 && currentCol < 8) {
                moves.push(new Square(currentRow, currentCol));
                currentRow += direction.dr;
                currentCol += direction.dc;
            }
        }
        return moves;
    }
}

// getAvailableMoves(board) {
//     let currentSquare = board.findPiece(this);
//     let availableMoves = [];
//     let x = currentSquare.row;
//     let y = currentSquare.col;
//     //Move diagonally based of current position
//     while (x < 7 && y < 7) {
//         x++;
//         y++;
//         availableMoves.push(new Square(x, y));
//     }
//     x = currentSquare.row;
//     y = currentSquare.col;
//     while (x > 0 && y > 0) {
//         x--;
//         y--;
//         availableMoves.push(new Square(x, y));
//     }
//     x = currentSquare.row;
//     y = currentSquare.col;
//     while (x < 7 && y > 0) {
//         x++;
//         y--;
//         availableMoves.push(new Square(x, y));
//     }
//     x = currentSquare.row;
//     y = currentSquare.col;
//     while (x > 0 && y < 7) {
//         x--;
//         y++;
//         availableMoves.push(new Square(x, y));
//     }
//
//
//     return availableMoves;
// }

