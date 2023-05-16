import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { ControllerMain } from "./_02_controllerMain.js";
export class PageFst {


    execute () {
        let $content = document.querySelector("#content");
        let tag ="";
        tag +=`

        <style>
        ${new GetSetting().execute()}
        ${new GetFont().execute()}

        #all {
            width: 1080px;
            height: 1920px;
            margin:0 auto;
            position: relative;
         }

            /*menu head end*/
            /* content */
            #mainPicture{
                margin: 0 auto;
                text-align: center;
                width: 1080px;
                height: 1800PX;
                margin-top: 0;
                cursor: pointer;
            }

           #footer {
            width: 1080px;
            height: 120px;
            text-align: center;
            margin: 0 auto;
            background-color: #cf3143;
           }
           #keyA {
            width: 500px;
            height: 140px;
            text-align: right;

           }
           #keyimg {
            width: 70px;
            text-align: center;
           }
           #keyB{
            font-size: 35px;
            text-align: left;
            padding-left: 10px;
            color: white;
            cursor: pointer;
           }


        </style>
        `;
        tag +=`
        <div id="all">

        <!-- content -->
        <table id="content" >
            <tr>
                <td>
                    <img id="mainPicture" src="img/home/main.gif">
                </td>
            </tr>

         </table>

         <table id="footer" onclick="login()">

            </tr>
            <tr>
                <td id="keyA">
                    <img id="keyimg" src="img/key.svg">
                </td>
                <td id="keyB">
                    login
                </td>
            </tr>
         </talbe>
        </div>
        `;

        $content.innerHTML = tag;
        
        //  [첫 화면] 에서 [게스트] - [메뉴 화면] 으로 넘어가기
        //  [첫 화면] 에서 [로그인] - [메뉴 화면] 으로 넘어가기     //log != null
        //  [첫 화면] 에서 [로그인] 으로 넘어가기                   //log = null
        //  [첫 화면] 에서 [로그인] - [게스트] 으로 넘어가기        //log != null      //  log => null

        if(ControllerMain.getInstance().log == null) {
            document.querySelector("#content").addEventListener("click", this.menuSelect);
        }
    }

    menuSelect = (e) => {
        ControllerMain.getInstance().changePage("page-header",null);
        
        ControllerMain.getInstance().changePage("page-seasonMenu",null);
        ControllerMain.getInstance().changePage("page-sideMenu",null);
        ControllerMain.getInstance().changePage("page-footer",null);
    }
    login = (e) =>{

    }
}