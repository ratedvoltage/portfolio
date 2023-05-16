import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { GetSettingMenu } from "./Zsetting_menu.js";
import { ControllerMain } from "./_02_controllerMain.js";
import { JsonMenu } from "./_02_jsonMenu.js";
import { GetFonction } from "./ZFunction.js";

export class PageOriginalMenu {

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
                            <img class="itemImg" src="img/original/original_tea1.jpg">
                            <div class="menu_name">우롱티</div>
                            <div class="menu_price">
                                <img src="img/won.png" width="15px">3,200원</div>
                            </a></td>
                        <td class="itemSize" onclick="submenu()"><a href="#">
                            <img class="itemImg" src="img/original/original_tea2.jpg">
                            <div class="menu_name">자스민그린티</div>
                            <div class="menu_price">
                                <img src="img/won.png" width="15px">3,300원</div>
                            </a></td>
                        <td class="itemSize" onclick="submenu()"><a href="#">
                            <img class="itemImg" src="img/original/original_tea3.jpg">
                            <div class="menu_name">블랙티</div>
                            <div class="menu_price">
                                <img src="img/won.png" width="15px">3,300원</div>
                            </a></td>
                        <td class="itemSize" onclick="submenu()"><a href="#">
                            <img class="itemImg" src="img/original/original_tea4.jpg">
                            <div class="menu_name">얼그레이티</div>
                            <div class="menu_price">
                                <img src="img/won.png" width="15px">3,400원</div>
                            </a></td>
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
