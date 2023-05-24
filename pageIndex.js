//pageIndex.js

import {    GetFont} from "./ZgetFont.js";
import {    GetSetting} from "./Zsetting.js";
export class PageIndex {

    execute() {
        let $content = document.querySelector("#content");
        let tag = "";
        tag +=
                        `<style>
            #content-outline{
                text-align: center;
                width: 100%;
            }
            #content-header{
                text-align: center;
                margin : 0 auto;
                width : 100%;
                background-color: #E4DCD2;
                box-shadow:3px 3px 3px 3px #cecece ;
                margin-bottom: 10px;
            }
            .content-content{
                margin : 0 auto;
                background-color: #E4DCD2;
            }
            .content-contentSet{
                width:100%;
                background-color: #E4DCD2;
                box-shadow:3px 3px 3px 3px #cecece ;
                margin-bottom: 10px;
            }
            .content-contentSettd{
                width:10000px;
                background-color: #E4DCD2;
            }
            #content-headerTitle,.content-cTitle{
                height: 200px;
            }
            .content-headerTitle,.content-contentTitle{
                font-size: 30px;
                font-family: 'NotoSerifKR';
                display: inline-block;
                margin-bottom: 20px;
            }
            #content-headerTitle1,#content-contentTitle1{color: #666666; box-shadow:0px 6px 3px -3px #666666 ;}
            #content-headerTitle2,#content-contentTitle2{color: black;}
            #content-headerTitle3,#content-contentTitle3{color: #C32033; box-shadow:0px 6px 3px -3px #666666 ;}
            #content-headerSubTitle,.content-contentSubTitle{font-size: 18px; font-family:'NanumSquareNeo-Variable';}
            /* #983b43 */
            #content-headerTeam{
                background-color: #C32032;
                line-height:400px;
            }
            #teamImg{
                vertical-align:middle;
            }
            #hrefSet{
            }
            .content-contentTD2{
                text-align: center;
            }
            .content-contentcontentTable{

            }
            .content-contentcontent{
                width: 300px;
                height: 330px;
            }
            .content-space{
                width: 30px;
                height: 30px;
            }

            </style>

                    `;

        tag +=
            `
        <table id = "content-outline">
            <tr>
                <td>
                    <table id = "content-header">
                        <tr>
                            <td id="content-headerTitle">
                                <span class="content-headerTitle" id="content-headerTitle1">TEAM</span>
                                <span class="content-headerTitle" id="content-headerTitle2">Gong cha</span>
                                <span class="content-headerTitle" id="content-headerTitle3">PROJECT</span>
                                <div id="content-headerSubTitle">팀원들과 함께 작업한
                                    <span style="color:#C32033">공차</span> 프로젝트 입니다.
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td id="content-headerTeam">
                                <a href = "Gongcha/1.home.html">
                                    <div id = "hrefSet">
                                        <img src="./images/stemp.png" id="teamImg">
                                    </div>
                                </a>
                            </td>
                        </tr>
                    </table>
                    <table calss="content-contentSet">
                        <tr>
                            <td class="content-contentSettd">
                                <table class="content-content">
                                    <tr>
                                        <td class="content-cTitle">
                                            <span class="content-contentTitle" id="content-contentTitle1">Personal</span>
                                            <span class="content-contentTitle" id="content-contentTitle2">JS DOM</span>
                                            <span class="content-contentTitle" id="content-contentTitle3">PROJECT</span>
                                            <div class="content-contentSubTitle">JavaScript DOM 기반의 개인 프로젝트 모음 자료입니다.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-contentTD2">
                                            <table calss="content-contentcontentTable">
                                                <tr>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                    <td class="content-contentcontent"></td>
                                                </tr>
                                                <tr>
                                                    <td class="content-space"></td>
                                                </tr>
                                                <tr>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <table class="content-content">
                                    <tr>
                                        <td class="content-cTitle">
                                            <span class="content-contentTitle" id="content-contentTitle1">Personal</span>
                                            <span class="content-contentTitle" id="content-contentTitle2">게임 프로젝트</span>
                                            <span class="content-contentTitle" id="content-contentTitle3">PROJECT</span>
                                            <div class="content-contentSubTitle">자바스크립트를 활용해 여러 비동기 게임 예제를 구현하였습니다.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-contentTD2">
                                            <table calss="content-contentcontentTable">
                                                <tr>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                </tr>
                                                <tr>
                                                    <td class="content-space"></td>
                                                </tr>
                                                <tr>
                                                    <td class="content-space"></td>
                                                    <td class="content-space"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <table class="content-content">
                                    <tr>
                                        <td class="content-cTitle">
                                            <span class="content-contentTitle" id="content-contentTitle1">Team</span>
                                            <span class="content-contentTitle" id="content-contentTitle2">게임 프로젝트</span>
                                            <span class="content-contentTitle" id="content-contentTitle3">PROJECT</span>
                                            <div class="content-contentSubTitle">과거에 개발자로 참여했던 프로젝트들입니다.</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-contentTD2">
                                            <table calss="content-contentcontentTable">
                                                <tr>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                    <td class="content-contentcontent"></td>
                                                    <td class="content-space"></td>
                                                </tr>
                                                <tr>
                                                    <td class="content-space"></td>
                                                </tr>
                                                <tr>
                                                    <td class="content-space"></td>
                                                    <td class="content-space"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <hr style="background-color: #C32033; height: 20px;">


        `;
        $content.innerHTML = tag;

        this.$c_ccList = document.querySelectorAll(".content-contentcontent");
        // this.$c_ccTable = document.querySelectorAll(".content-contentcontentTable");
        for (let i = 0; i < this.$c_ccList.length; i++) {
            this.$c_ccList[i].addEventListener("mouseenter", this.slideIn);
            this.$c_ccList[i].addEventListener("mouseleave", this.slideOut);
        }
        this.contentList = ["다이어리", "식권 자판기", 
        "틱택토", "순발력 게임","홈페이지",
        "스네이크 게임","테트리스 게임",
        "므네모시네","펠레이데스"]
        this.contentSubList = ["Diary", "Vending Machine", 
        "Tic-Tac-Toe", "Speed Game","Homepage",
        "Snake Game","TETRIS Game",
        "Mnemosyne","Peleides",
        "",]
        this.contentImgList = ["./images/mycalendar.png", "images/kiosk.png", 
        "images/tictactoe.png","images/speedgame.png","images/itbook.png",
        "images/snake.png","images/tetris.png",
        "images/Mnemosyne.png","images/Peleides.png",
        ""]
            // "images/tetris.png","images/tetris.png","images/tetris.png","images/tetris.png"]
        this.contentHref = ["./diary/index.html", "vending.html", "tictactoe/index.html",
        "speedgame/index.html", "http://pyapyapya.cafe24app.com/", 
        "snake.html","tetris05.html",
        "https://www.youtube.com/watch?v=zoMWWb-Mess",        
        "https://www.youtube.com/watch?v=tE_tK3JJZjs",
        "","","",]
        this.contentHtml = [
                    //다이어리
                `
                    달력에 매모를 할 수 있는 다이어리 입니다. <br><br>
                    날짜 마다 따로 매모가 가능합니다.<br>
                    <br>
                `,  //식권 자판기
                `
                    식권을 뽑거나 관리하는 프로그램입니다.<br><br>
                    관리자가 넣어놓은 수량이상은 못뽑고<br>
                    사용자가 넣은 금액에서 식권값을 뺀 만큼 <br>
                    거스름돈으로 나옵니다.<br>
                `,  //틱택토
                `
                    틱택토 게임입니다. <br><br>
                    단순히 O와 X를 번갈아 놓으며,<br>
                    먼저 3개의O나 X가 나란히 된 <br>
                    쪽이 승리입니다.<br>
                `,  //순발력 게임
                `
                    스피드게임 입니다.<br><br>
                    5x5의 칸에 총 50개의 칸이있으며,<br>
                    번호의 순서대로 누르는걸 <br>
                    빨리하는 게임입니다.<br>
                `,  //홈페이지
                `
                    홈페이지 입니다. <br><br>
                    회원가입, 로그인, 장바구니 기능이 <br>
                    DB와 연동되어있습니다. <br>
                `,  //스네이크
                `
                    프로젝트에 대한 설명을 기술하시오. <br><br>
                    프로젝트에 대한 설명을 기술하시오. <br>
                    프로젝트에 대한 설명을 기술하시오. <br>
                `,  //테트리스
                `
                    프로젝트에 대한 설명을 기술하시오. <br><br>
                    프로젝트에 대한 설명을 기술하시오. <br>
                    프로젝트에 대한 설명을 기술하시오. <br>
                `,  //아직모름
                `
                2D 사이드뷰 스토리형 로그라이크 RPG <br><br>
                    기획, 개발, 디자인 3명구성으로<br>
                    유니티를 사용해서 만들었습니다.<br>
                `,  //과거 프로젝트 므네모시네
                `
                2.5D 쿼터뷰 스토리형 탄막 슈팅 게임 <br><br>
                     택스트창, 그림, 캐릭터모델링, 외에는..<br>
                    유니티를 사용해서 만들었습니다. <br>
                `,  //과거 프로젝트 플레아데스
                `
                    프로젝트에 대한 설명을 기술하시오. <br><br>
                    프로젝트에 대한 설명을 기술하시오. <br>
                    프로젝트에 대한 설명을 기술하시오. <br>
                `
        ]

        this.getContent(this.contentImgList, this.contentList, this.contentSubList, this.contentHref , this.contentHtml);
        this.$c_hTBP = document.querySelector("#content-headerTeamBtnPage");
        // this.$c_hTBP.addEventListener("click",href="Gongcha/1.home.html");
    }
    getClickBtn = () => {
        window.location = this.href("Gongcha/1.home.html");
    }

    // contentSelect = (on) => {
    //     this.getContent(this.contentImgList, this.contentList, this.contentSubList, this.contentHref,on);
    // }
    getContent = (img, title, subTitle, href, inhtml) => {


        for (let i = 0; i < this.$c_ccList.length; i++) {
            let $table = document.createElement('table');
            $table.classList = "slide";
            $table.style.margin = "0 auto";
            $table.style.width = "100%";
            $table.style.height = "100%";
            let $tr = document.createElement('tr');
            let $td = document.createElement('td');
            let $span = document.createElement('span');
            let $img = document.createElement('img');
            let $a = document.createElement("a");

            //------------------------------------------------------------------
            $td = document.createElement('td');
            $tr.append($td);
            $td.classList = "projectMain";
            $td.style.width = "400px";
            $td.style.height = "100%";
            //---
            $td.display = 'inline-table';
            //---
            $img = document.createElement('img');
            $img.classList = "projectImg";
            $img.src = `${img[i]}`;
            $td.append($img);
            $span = document.createElement('span');
            $span.classList = "imgTitleMain";
            $span.innerHTML = `<br>${title[i]}`;
            $td.append($span);
            $span = document.createElement('span');
            $span.classList = "imgTitleSub";
            $span.innerHTML = `<br>${subTitle[i]}`;
            $td.append($span);
            //------------------------------------------------------------------

            $a = document.createElement("a");
            $td = document.createElement('td');
            $a.append($td);
            $tr.append($a);
            
            $td.classList = "projectDesc";
            $td.style.background = "#C32033";
            $td.style.color = "#fff";
            $td.style.fontWeight = "bold";
            $td.style.fontSize = "18px";
            $td.style.width = "400px";
            $td.style.height = "100%";
            $td.style.margin = " 0 auto";
            // $td.style.cursor = "pointer";

            //---
            $td.display = 'none';
            //---
            $a.classList = "descLink";
            $a.style.cursor = "pointer";
            $a.href = `${href[i]}`;
            $span = document.createElement("span");
            $span.classList = "descTitleMain";
            $span.innerHTML = `<br><br><br>${title[i]}`;
            $td.append($span);
            $span = document.createElement("span");
            $span.classList = "descTitleSub";
            $span.innerHTML = `<br>${subTitle[i]}<br>`;
            $td.append($span);
            $span = document.createElement("span");
            $span.classList = "desc"
            $span.innerHTML =
                `
                    ${inhtml[i]}<br>
                `
            $td.append($span);
            //------------------------------------------------------------------

            $table.append($tr);

            //테이블에 내용 넣기



            this.$c_ccList[i].append($table);

        }

        for (let i = 0; i < this.$c_ccList.length; i++) {
            let $slideList = document.querySelectorAll(".slide");
            $slideList[i].style.textAlign = "center";
            let $iTMList = document.querySelectorAll(".imgTitleMain");
            $iTMList[i].style.fontSize = "24px";
            $iTMList[i].style.fontWeight = "bold";


            let $pjMain = document.querySelectorAll(".projectMain");
            let $pjDesc = document.querySelectorAll(".projectDesc");
            $pjMain[i].style.display = 'inline-table';
            $pjDesc[i].style.display = 'none';
        }

    }

    slideIn = (e) => {
        for (let i = 0; i < this.$c_ccList.length; i++) {
            if (e.target == this.$c_ccList[i]) {
                let $pjMain = document.querySelectorAll(".projectMain");
                let $pjDesc = document.querySelectorAll(".projectDesc");
                $pjMain[i].style.display = 'none';
                $pjDesc[i].style.display = 'inline-table';
                // this.$c_ccList[i].style.background = "#C32033";
            }
        }
    }
    slideOut = (e) => {
        for (let i = 0; i < this.$c_ccList.length; i++) {
            if (e.target == this.$c_ccList[i]) {
                let $pjMain = document.querySelectorAll(".projectMain");
                let $pjDesc = document.querySelectorAll(".projectDesc");
                $pjMain[i].style.display = 'inline-table';
                $pjDesc[i].style.display = 'none';
                // this.$c_ccList[i].style.background = "#E4DCD2";
            }
        }
    }
}