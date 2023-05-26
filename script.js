//logic 

/*[ 0     1       2]
  [ 3     4       5]
  [ 6     7       8]     //grid
*/


let currentPlayer = "X"
let arr = Array(9).fill(null)

function performAction(el){
    const id = Number(el.id)
    arr[id] = currentPlayer
    el.innerText = currentPlayer
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O':'X'
    

}
/* conditions for winning

[ 0     1       2]   horizontal 
[ 3     4       5]
[ 6     7       8]

[ 0     3       6]    vertical
[ 1     4       7]
[ 2     5       8]

[ 0     4       8]    diagonal
[ 2     4       6]

*/

function checkWinner() {
    if(
        (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||

        (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||

        (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]) 


    ) {
        document.write(`Winner is ${currentPlayer}`);
        return;
    }
    if (!arr.some((e) => e === null)) {
        document.write(`It's a draw`);
        return;
      }
}
