import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { GetSettingMenu } from "./Zsetting_menu.js";
import { ControllerMain } from "./_02_controllerMain.js";
import { JsonMenu } from "./_02_jsonMenu.js";
import { GetFonction } from "./ZFunction.js";

export class PageSeasonMenu {

    execute () {
        let $content = document.querySelector("#content");
        let tag ="";
        tag +=`

        <style>
        ${new GetSetting().execute()}
        ${new GetSettingMenu().execute()}
        ${new GetFont().execute()}

        
        </style>
        `;
        tag +=`

        <!-- content -->
        <table id="contentTable">
            <tr>
                <td id = "menuTd">
                    <table class="menu">
                        <tr>
                            <td class="itemSize" onclick="submenu()">
                                <a href="#">
                                    <img class="itemImg" src="img/season_menu/2023seson_menu1.jpg">
                                    <div class="menu_name">딸기 쥬얼리 벨벳 밀크티</div>
                                    <div class="menu_price">
                                        <img src="img/won.png" width="15px"> 4,900원
                                    </div>
                                </a>
                            </td>
                            
                            <td class="itemSize" onclick="submenu()"><a href="#">
                                <img class="itemImg" src="img/season_menu/2023seson_menu2.jpg">
                                <div class="menu_name">딸기 듬뿍 밀크티</div>
                                <div class="menu_price">
                                    <img src="img/won.png" width="15px">4,900원</div>
                                </a></td>
                            <td class="itemSize" onclick="submenu()"><a href="#">
                                <img class="itemImg" src="img/season_menu/2023seson_menu3.jpg">
                                <div class="menu_name">얼그레이 딸기 스무디</div>
                                <div class="menu_price">
                                    <img src="img/won.png" width="15px">4,900원</div>
                                </a></td>
                            <td class="itemSize" onclick="submenu()"><a href="#">
                                <img class="itemImg" src="img/season_menu/2022sp_coffee1.jpg">
                                <div class="menu_name">블랙티 카페 스무디+펄</div>
                                <div class="menu_price">
                                    <img src="img/won.png" width="15px">4,000원</div>
                                </a></td>
                    </tr>
                    </table>
                    <table class="menu">
                        <tr>
                            <td class="itemSize" onclick="submenu()"><a href="#">
                                <img class="itemImg" src="img/season_menu/2022sp_coffee2.jpg">
                                <div class="menu_name">공차슈페너</div>
                                <div class="menu_price">
                                    <img src="img/won.png" width="15px">4,000원</div>
                                </a></td>
                            <td class="itemSize" onclick="submenu()"><a href="#">
                                <img class="itemImg" src="img/season_menu/2022sp_coffee3.jpg">
                                <div class="menu_name">얼그레이 카페라떼+펄</div>
                                <div class="menu_price">
                                    <img src="img/won.png" width="15px">4,500원</div>
                                </a></td>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                
                    </tr>
                    </table>
                    <table class="menu">
                        <tr>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                    </tr>
                    </table>                
                    <table class="menu">
                        <tr>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                    </tr>
                    </table>                
                    <table class="menu">
                        <tr>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                                <td class="itemSize"></td>
                    </tr>
                    </table>
                    <table id ="space">
    
                    </table>
                </td>
            </tr>
        </table>

        `;

        $content.innerHTML = tag;
        
    }

    

}
