import { ControllerMain } from "./controllerMain.js";
import { JsonDiary } from "./jsonDiary.js";

export class PageInfo {
    execute(data) {

        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            #nav {
                margin: 0 auto;
                width: 1000px;
                height: 80px;
                border-bottom: 1px solid #333333;
            }

            #content {
                margin: 0 auto;
                width: 1000px;
                height: 450px;
            }
            #content td {
                border-bottom: 1px solid #333333;
            }
            #content td:nth-child(1) {
                height: 70px;
                width: 50px;
            }
            #content td:nth-child(2) {
                padding-left: 10px;
            }
            .content-title {
                text-align: center;
                font-weight: bold;
            }
            #input-title {
                
                width: 600px;
                height: 30px;
            }

            .content-btn {
                text-align: center;
            }
            .btn {
                width: 100px;
                height: 30px;
                display: inline-block;
            }
        </style>
        `;

        tag += 
        `
        <table id="nav">
            <tr>
                <td>
                    <span id="year"></span>년 
                    <span id="month"></span>월 
                    <span id="day"></span>일 다이어리 작성
                </td>
            </tr>
        </table>

        <table id="content">
            <tr>
                <td class="content-title">제목</td>
                <td>
                    <input id="input-title" type="text">
                </td>
            </tr>
            <tr>
                <td class="content-title">내용</td>
                <td class="content-td">
                    <textarea id="textarea-content" rows="20" cols="100"></textarea>
                </td>
            </tr>
            <tr>
                <td class="content-btn" colspan="2">
                    <button class="btn cancel">뒤로가기</button>
                </td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;

        let diaryNo = Number(data);
        let diaryInfo = JsonDiary.getInstance().getDiaryInfo(diaryNo);
        console.log(diaryInfo);

        let temp = diaryInfo.regDate.split("-"); 
        let year = temp[0];
        let month = temp[1];
        let day = temp[2];
        document.querySelector("#year").innerText = year;
        document.querySelector("#month").innerText = month;
        document.querySelector("#day").innerText = day;

        document.querySelector("#input-title").value = diaryInfo.title;
        document.querySelector("#textarea-content").value = diaryInfo.content;

        document.querySelector(".btn.cancel").addEventListener("click", this.cancel);
    }

    cancel = (event) => {
        ControllerMain.getInstance().chagePage("page-content", null);
    }

}