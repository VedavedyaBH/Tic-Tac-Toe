const btns = document.querySelectorAll(".btn");
const res = document.querySelector(".res");
const reset = document.querySelector(".reset")

let isUser1Turn = true;
const user1 = "X";
const user2 = "O";
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


function begin() {
    btns.forEach((eachBtn) => {
        eachBtn.addEventListener("click", () => {
            if (isUser1Turn) {
                eachBtn.innerText = user1;
                isUser1Turn = false;
                count++;
            }
            else if (!isUser1Turn) {
                eachBtn.innerText = user2;
                isUser1Turn = true;
                count++;
            }

            disable(eachBtn);
            let winner = isWinner();
            isGameOver(winner);
        })


    })

    function disable(btn) {
        btn.disabled = true;
    }

    function isGameOver(winner) {
        if (count === 9 && !winner) {
            res.textContent = "Game over"
        }
    }

    function isWinner() {

        for (let arr of winPatterns) {
            let index0 = btns[arr[0]];
            let index1 = btns[arr[1]];
            let index2 = btns[arr[2]];

            if ((index0.innerText === user1 && index1.innerText === user1 && index2.innerText === user1) ||
                (index0.innerText === user2 && index1.innerText === user2 && index2.innerText === user2)) {

                res.textContent = "winner"
                btns.forEach(btn => btn.setAttribute("disabled", true))

            }

        }
    }
}

reset.addEventListener("click", () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
        res.innerText = "";
        begin();
    }
})

begin();



