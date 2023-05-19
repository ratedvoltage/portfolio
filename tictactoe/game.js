let me = "";
let com = "";
let list = [];
let turn = true;
let game = 0;
let color = "#C32032";

function selectPlayer(player) {
    me = player;
    if(me == "O") {
        com = "X";
    } else {
        com = "O";
    }
    
    // 화면 지우기
    document.querySelector("#mainTable").remove();

    init();
}

function drawHeader() {
    let $headerTable = document.createElement("table");
    $headerTable.id = "headerTable";
        //해더
    let $tr = document.createElement("tr");

    let $td = document.createElement("td");
    $tr.append($td);
    $headerTable.append($tr);

    document.querySelector("#gameTableTd").append($headerTable);
}


function drawTurnTable() {
    let $turnTable = document.createElement("table");
    $turnTable.id = "turnTable";
        // 턴을 나타내는 판을 생성 
    let $tr = document.createElement("tr");

    let $td = document.createElement("td");
    let $playerBtn = document.createElement("button");
    $playerBtn.classList = "playerBtn";
    $playerBtn.innerText = "O's Turn";
    $td.append($playerBtn);
    $tr.append($td);
    
    $td = document.createElement("td");
    $playerBtn = document.createElement("button");
    $playerBtn.classList = "playerBtn";
    $playerBtn.innerText = "X's Turn";
    $td.append($playerBtn);
    $tr.append($td);
    
    $turnTable.append($tr);

    document.querySelector("#gameTableTd").append($turnTable);
}

function drawContentTable() {
    let $contentTable = document.createElement("table");
    $contentTable.id = "contentTable";
        
        //포문을 사용해  게임판 생성
    for(let i=0; i<3; i++) {        
        let $tr = document.createElement("tr");

        let $td = document.createElement("td");
        $td.classList = "block";
        $tr.append($td);
        $td = document.createElement("td");
        $td.classList = "spaceBlock";
        $tr.append($td);

        $td = document.createElement("td");
        $td.classList = "block";
        $tr.append($td);
        $td = document.createElement("td");
        $td.classList = "spaceBlock";
        $tr.append($td);
        
        $td = document.createElement("td");
        $td.classList = "block";
        $tr.append($td);
        $contentTable.append($tr);

        //-----------------------------------

        $tr = document.createElement("tr");
        $td = document.createElement("td");
        $td.classList = "spaceBlock";
        $td.colSpan = "3";
        $tr.append($td);
        $contentTable.append($tr);

        //-----------------------------------

        document.querySelector("#gameTableTd").append($contentTable);
    }

}

function init() {
    drawHeader();
    drawTurnTable();
    drawContentTable();

    for(let i=0; i<5; i++) {
        let temp = [0, 3, 0, 3, 0];     //테이블 구성상  빈칸을 0으로  구분선을 3으로  짓고  플레이어 =1  com =2 로 지정 하도록 5줄만듦
        list.push(temp);
    }

    if(me == "O") {
        document.querySelectorAll(".playerBtn")[0].style.backgroundColor = color;   //O's turn적어놓은것을 색을 바꿔 가시적으로 O를 골랏음을 나타냄
        com = "X";      //플레이어가 O이므로 컴퓨터가 X
    } else {
        document.querySelectorAll(".playerBtn")[1].style.backgroundColor = color;
        com = "O";
    }

    let blockList = document.querySelectorAll(".block");
    for(let i=0; i<blockList.length; i++) {
        blockList[i].addEventListener("click", mark);
    }                                       // 모든 블록을 찾아서 클릭하면 반응하게 설정.   mark 함수 실행
}

function mark(e) {
    let $turnTable = document.createElement("table");
    $turnTable.id = "turnTable";
    let $contentTable = document.querySelector("#contentTable");

    let y = 0;
    let x = 0;
    for(let i=0; i<5; i++) {
        for(let j=0; j<5; j++) {
            if(e.target == $contentTable.children[i].children[j]) {
                y = i;
                x = j;
            }
        }
    }

    if($contentTable.children[y].children[x].innerText == "") {

        if(document.querySelectorAll(".playerBtn")[0].style.backgroundColor == "") {
            document.querySelectorAll(".playerBtn")[0].style.backgroundColor = color;
            document.querySelectorAll(".playerBtn")[1].style.backgroundColor = "";

            list[y][x] = 2;
        } else {
            document.querySelectorAll(".playerBtn")[0].style.backgroundColor = "";
            document.querySelectorAll(".playerBtn")[1].style.backgroundColor = color;
            
            list[y][x] = 1;
        }

        console.log(list);

        if(turn) {
            $contentTable.children[y].children[x].innerText = me;
        } else {
            $contentTable.children[y].children[x].innerText = com;
        }

        $contentTable.children[y].children[x].style.fontSize = "80px";
        $contentTable.children[y].children[x].style.fontWeight = "bold";
        $contentTable.children[y].children[x].style.color = color;

        turn = !turn;
    }

    let result = checkWin();
    if(result == 1) {
        document.querySelector("#headerTable").innerText = "Player O won the game!";
        removeEvent();
        document.querySelector("#replayBtn").style.display = "block";
    } else if(result == 2) {
        document.querySelector("#headerTable").innerText = "Player X won the game!";
        removeEvent();
        document.querySelector("#replayBtn").style.display = "block";
    } else if(result == 3) {
        document.querySelector("#headerTable").innerText = "The game ended in a tie.";
        removeEvent();
        document.querySelector("#replayBtn").style.display = "block";
    }

}

function removeEvent() {
    let blockList = document.querySelectorAll(".block");
    for(let i=0; i<blockList.length; i++) {
        blockList[i].removeEventListener("click", mark);
        blockList[i].style.cursor = "auto";
    }
}

function checkWin() {

    let win1 = false;
    let win2 = false;
    
    // 가로 검사
    for(let i=0; i<5; i++) {
        let count1 = 0;
        let count2 = 0;
        for(let j=0; j<5; j++) {
            if(list[i][j] == 1) {
                count1 += 1;
            }
            if(list[i][j] == 2) {
                count2 += 1;
            }
        }
        if(count1 == 3) {
            win1 = true;
        }
        if(count2 == 3) {
            win2 = true;
        }
    }

    // 세로 검사
    for(let i=0; i<5; i++) {
        let count1 = 0;
        let count2 = 0;
        for(let j=0; j<5; j++) {
            if(list[j][i] == 1) {
                count1 += 1;
            }
            if(list[j][i] == 2) {
                count2 += 1;
            }
        }
        if(count1 == 3) {
            win1 = true;
        }
        if(count2 == 3) {
            win2 = true;
        }
    }

    // 대각선 / 검사
    if(list[0][4] == 1 && list[2][2] == 1 && list[4][0] == 1) {
        win1 = true;
    }
    if(list[0][4] == 2 && list[2][2] == 2 && list[4][0] == 2) {
        win2 = true;
    }
    // 대각선 \ 검사
    if(list[0][0] == 1 && list[2][2] == 1 && list[4][4] == 1) {
        win1 = true;
    }
    if(list[0][0] == 2 && list[2][2] == 2 && list[4][4] == 2) {
        win2 = true;
    }

    if(win1) {
        game = 1;
    }
    if(win2) {
        game = 2;
    }

    // 무승부
    if(win1 == false && win2 == false) {
        let count = 0;
        for(let i=0; i<list.length; i++) {
            for(let j=0; j<list[i].length; j++) {
                if(list[i][j] == 0) {
                    count += 1;
                }
            }
        } 
        if(count == 6) {
            game = 3;
        }
    }

    return game;
}

function replay() {
    location.href="index.html";
}
