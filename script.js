const arr = [["1", "2", "3", "4"], ["5", "6", "7", "8"], ["9", "10", "11", "12"], ["13", "14", "15", ""]];

let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let num10 = document.getElementById("10");
let num11 = document.getElementById("11");
let num12 = document.getElementById("12");
let num13 = document.getElementById("13");
let num14 = document.getElementById("14");
let num15 = document.getElementById("15");
let num0 = document.getElementById("0");
let check = [
    [num1.innerHTML, num2.innerHTML, num3.innerHTML, num4.innerHTML],
    [num5.innerHTML, num6.innerHTML, num7.innerHTML, num8.innerHTML],
    [num9.innerHTML, num10.innerHTML, num11.innerHTML, num12.innerHTML],
    [num13.innerHTML, num14.innerHTML, num15.innerHTML, num0.innerHTML]
];

function shuffleArray() {
    let arr = [["1", "2", "3", "4"], ["5", "6", "7", "8"], ["9", "10", "11", "12"], ["13", "14", "15", ""]];
    let x = 3, y = 3; // Toa do "";
    let ax = [0, 0, -1, 1];
    let ay = [-1, 1, 0, 0];
    for (let j = 0; j < 200; j++) {
        let i = Math.floor(Math.random() * 4);
        if (x + ax[i] >= 0 && x + ax[i] <= 3 && y + ay[i] >= 0 && y + ay[i] <= 3) {
            let temp = arr[x][y];
            arr[x][y] = arr[x + ax[i]][y + ay[i]];
            arr[x + ax[i]][y + ay[i]] = temp;
            x = x + ax[i];
            y = y + ay[i];
        }
    }
    return arr;
}

let countMove = 0;

function display() {
    num1.innerHTML = check[0][0];
    num2.innerHTML = check[0][1];
    num3.innerHTML = check[0][2];
    num4.innerHTML = check[0][3];
    num5.innerHTML = check[1][0];
    num6.innerHTML = check[1][1];
    num7.innerHTML = check[1][2];
    num8.innerHTML = check[1][3];
    num9.innerHTML = check[2][0];
    num10.innerHTML = check[2][1];
    num11.innerHTML = check[2][2];
    num12.innerHTML = check[2][3];
    num13.innerHTML = check[3][0];
    num14.innerHTML = check[3][1];
    num15.innerHTML = check[3][2];
    num0.innerHTML = check[3][3];

    document.getElementById("move").innerHTML = "Move: " + countMove;
    checkWin();
}

function play() {
    check = shuffleArray();
    countMove = 0;
    display();
}

function reset() {
    check = [["1", "2", "3", "4"], ["5", "6", "7", "8"], ["9", "10", "11", "12"], ["13", "14", "15", ""]];
    countMove = 0;
    display();
}

function move(x, y) {
    let result = false;
    let a, b;

    for (let i = 0; i < check.length; i++) {
        for (let j = 0; j < check[i].length; j++) {
            if (check[i][j] === "") {
                a = i;
                b = j;
            }
        }
    }

    if (a === x && b === y - 1) result = true;
    if (a === x && b === y + 1) result = true;
    if (a === x - 1 && b === y) result = true;
    if (a === x + 1 && b === y) result = true;

    if (result) {
        let temp = check[x][y];
        check[x][y] = check[a][b];
        check[a][b] = temp;
        countMove++;
        display();
    }
    console.log(check);

}

function checkWin() {
    let result = false;
    for (let i = 0; i < check.length; i++) {
        for (let j = 0; j < check[i].length; j++) {
            if (check[i][j] === arr[i][j]) result = true;
            else {
                result = false;
                break;
            }
        }
    }
    if (result) document.getElementById("message").innerHTML = "You Win!";
    else document.getElementById("message").innerHTML = "";
}





