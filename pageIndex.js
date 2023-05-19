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
        "스네이크 게임","테트리스 게임","",]
        this.contentSubList = ["Diary", "Vending Machine", 
        "Tic-Tac-Toe", "Speed Game","Homepage",
        "Snake Game","TETRIS Game","","","",]
        this.contentImgList = ["./images/mycalendar.png", "images/kiosk.png", 
        "images/tictactoe.png","images/speedgame.png","images/itbook.png",
        "images/snake.png","images/tetris.png"
        ,"","",""]
            // "images/tetris.png","images/tetris.png","images/tetris.png","images/tetris.png"]
        this.contentHref = ["./diary/index.html", "vending.html", "tictactoe/index.html",
        "speedgame/index.html", "http://pyapyapya.cafe24app.com/", "#","#","#","","","","",]

        this.getContent(this.contentImgList, this.contentList, this.contentSubList, this.contentHref);
        this.$c_hTBP = document.querySelector("#content-headerTeamBtnPage");
        // this.$c_hTBP.addEventListener("click",href="Gongcha/1.home.html");
    }
    getClickBtn = () => {
        window.location = this.href("Gongcha/1.home.html");
    }

    // contentSelect = (on) => {
    //     this.getContent(this.contentImgList, this.contentList, this.contentSubList, this.contentHref,on);
    // }
    getContent = (img, title, subTitle, href) => {


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
                    프로젝트에 대한 설명을 기술하시오. <br>
                    프로젝트에 대한 설명을 기술하시오. <br>
                    프로젝트에 대한 설명을 기술하시오. <br>
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