import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { GetSettingMenu } from "./Zsetting_menu.js";
import { ControllerMain } from "./_02_controllerMain.js";
import { JsonMenu } from "./_02_jsonMenu.js";
import { GetFonction } from "./ZFunction.js";

export class PageBestMenu {


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
                    <td class="itemSize" onclick="submenu()"><a href="#">
                        <img class="itemImg" src="img/best_menu/best_menu1.png">
                        <div class="menu_name">피스타치오 밀크티+펄</div>
                        <div class="menu_price">
                            <img src="img/won.png" width="15px">3,900원</div>
                        </a></td>
                    <td class="itemSize" onclick="submenu()"><a href="#">
                        <img class="itemImg" src="img/best_menu/best_menu2.png">
                        <div class="menu_name">타로 밀크티+펄</div>
                        <div class="menu_price">
                            <img src="img/won.png" width="15px">3,500원</div>
                        </a></td>
                    <td class="itemSize" onclick="submenu()"><a href="#">
                        <img class="itemImg" src="img/best_menu/best_menu3.png">
                        <div class="menu_name">블랙 밀크티+펄</div>
                        <div class="menu_price">
                            <img src="img/won.png" width="15px">3,600원</div>
                        </a></td>
                    <td class="itemSize" onclick="submenu()"><a href="#">
                        <img class="itemImg" src="img/best_menu/best_menu4.png">
                        <div class="menu_name">청포토 그린티+알로에</div>
                        <div class="menu_price">
                            <img src="img/won.png" width="15px">4,100원</div>
                        </a></td>
              </tr>
            </table>
            <table class="menu">
                <tr>
                    <td class="itemSize" onclick="submenu()"><a href="#">
                        <img class="itemImg" src="img/best_menu/best_menu5.png">
                        <div class="menu_name">망고 요구르트+화이트 펄</div>
                        <div class="menu_price">
                            <img src="img/won.png" width="15px">4,200원</div>
                        </a></td>
                    <td class="itemSize" onclick="submenu()"><a href="#">
                        <img class="itemImg" src="img/best_menu/best_menu6.png">
                        <div class="menu_name">제주 그린 밀크티+펄</div>
                        <div class="menu_price">
                            <img src="img/won.png" width="15px">4,300원</div>
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
        
        //  [첫 화면] 에서 [게스트] - [메뉴 화면] 으로 넘어가기
        //  [첫 화면] 에서 [로그인] - [메뉴 화면] 으로 넘어가기     //log != null
        //  [첫 화면] 에서 [로그인] 으로 넘어가기                   //log = null
        //  [첫 화면] 에서 [로그인] - [게스트] 으로 넘어가기        //log != null      //  log => null

    }

}
