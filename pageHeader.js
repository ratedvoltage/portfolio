//pageHeader.js

import { GetFont } from "./ZgetFont.js";
import { GetSetting } from "./Zsetting.js";

export class PageHeader{

    execute(){
        let $header = document.querySelector("#header");    //집어넣을곳

        let tag = "";   //태그 초기화 [ 넣을문장 ]
        tag +=
        `
        <style>
        ${new GetFont().execute()}
        ${new GetSetting().execute()}
        #header-header{
            margin: 0 auto;
            
            width: 100%;
            height: 400px;
        }
        #header-emptySpace{width: 90%;height: 100px;}
        #header-setGithub{width: 10%;}

        #header-title{font-size:50px;font-family: 'NotoSerifKR';display: inline-table;}
        #header-title1{color: #9f9c9d;}
        #header-title2{color: #C32033;}
        #header-subTitle{color: #C32033;font-size: 25px;font-family: 'NanumSquareNeo-Variable';}
    </style>
        `;

        tag +=
        `
        <table id = "header-header">
        <tr>
            <td id="header-emptySpace"></td>
            <td id="header-setGithub"></td>
        </tr>
        <tr>
            <td id="header-title"><span id="header-title1">FRONT-</span><span id="header-title2">END</span> DEVELOPER
            <div id="header-subTitle">/문창현의 포트폴리오</div></td>
        </tr>
    </table>
    <hr style="background-color: #C32033; height: 20px;">

        `;

        $header.innerHTML = tag;


    }
}