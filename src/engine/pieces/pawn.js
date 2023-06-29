import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        if(this.player === Player.WHITE){
            let availableMoves = [new Square(currentSquare.row+1, currentSquare.col)];
            if(currentSquare.row === 1){
                availableMoves.push(new Square(currentSquare.row + 2, currentSquare.col));
            }
            return availableMoves;
        }
        else {
            let availableMoves = [new Square(currentSquare.row-1, currentSquare.col)];
            if(currentSquare.row === 6){
                availableMoves.push(new Square(currentSquare.row - 2, currentSquare.col));
            }
            return availableMoves;
        }
    }
}
