import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { ControllerMain } from "./_02_controllerMain.js";
export class PageHeader{


    execute() {
        let $header = document.querySelector("#header");
        let tag ="";
        tag +=`
        <style>
        ${new GetFont().execute()}
        ${new GetSetting().execute()}

    
        /*header start*/

        #header-top {
            display: inline-table;
        }


        #header_in {
            width: 1080px;
            height: 1920px;
            margin: 0 auto;
            position: relative;

            font-family: 'OTWelcomeRA';
            background-color: #C32033;
            color: white;;
            margin: 0 auto;
            height: 30px;
            font-size : 20px;
            
        }
        #headerA {
            width: 600px;
            padding-left:20px;
        }
        #headerB {
            width: 400px;
        }
        /*header end*/
        /*menu head start*/
        #menu_head {
            font-family: 'LINESeedKR-Bd';
            margin: 0 auto;
            width: 1080px;
            color: gray;
            height: 70px;
            border: 1px solid rgb(240, 240, 240);
            font-size : 20px;
        }
        #header a {
            color : white;
        }
        #menu_head a {
            color : gray;
        }
        #menu_head a:hover {
            color : black;
        }
        /*menu head end*/

        </style>
        `;
        tag +=`
        <body>
        <!-- head -->
        <table id="header-top">
            <tr>
            <td>
            <table id="header_in">
                <tr>
                    <td id="headerA">주문하시려면 메뉴를 클릭해 주세요.</td>
                    <td id="headerHome">
                        <img src="img/season_menu/house1.png">
                    </td>
                    <td id="headerB"><a href="1.home.html">시작화면</a></td>
                </tr>
            </table>
            <table id="menu_head">
                <tr>
                   <th class="menuTitle"><a href="#">시즌 메뉴</a></th>
                   <th class="menuTitle"><a href="#">베스트 메뉴</a></th>
                   <th class="menuTitle"><a href="#">밀크티</a></th>
                   <th class="menuTitle"><a href="#">오리지널</a></th>
                </tr>
            </table>
            </td>
            </tr>
        </table>

        `;

        $header.innerHTML = tag;

        this.$menuTitle = document.querySelectorAll(".menuTitle");
        for(let i = 0; i< this.$menuTitle.length;i++){
            this.$menuTitle[i].addEventListener("click",(e) => {this.controll(i)});

        }
        

    }
    
    controll = (e) =>{
        switch(e){
            case 0:
                ControllerMain.getInstance().changePage("page-seasonMenu");
                break;
            case 1:
                ControllerMain.getInstance().changePage("page-bestMenu");
                break;
            case 2:
                ControllerMain.getInstance().changePage("page-milkteaMenu");
                break;
            case 3:
                ControllerMain.getInstance().changePage("page-originalMenu");
                break;
        }
    }

}
