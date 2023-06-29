import Piece from './piece';
import Player from "../player";
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableMoves = [];
        for(let i = 0; i < 8; i++){
            if(i !== currentSquare.row){
                availableMoves.push(new Square(i, currentSquare.col));
            }
            if(i !== currentSquare.col){
                availableMoves.push(new Square(currentSquare.row, i));
            }
        }
        return availableMoves;
    }
}
