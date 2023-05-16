import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { GetSettingMenu } from "./Zsetting_menu.js";
import { ControllerMain } from "./_02_controllerMain.js";
import { JsonMenu } from "./_02_jsonMenu.js";
import { GetFonction } from "./ZFunction.js";

export class pageMilkteaMenu {

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
            <img class="itemImg" src="img/milk_tea/milk_tea1.jpg">
            <div class="menu_name">블랙 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px"> 3,400원</div>
            </a></td>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea2.jpg">
            <div class="menu_name">얼그레이 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px"> 3,300원</div>
            </a></td>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea3.jpg">
            <div class="menu_name">타로 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px">3,500원</div>
            </a></td>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea4.jpg">
            <div class="menu_name">우롱 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px">3,400원</div>
            </a></td>
  </tr>
</table>
<table class="menu">
    <tr>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea5.png">
            <div class="menu_name">피스타치오 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px"> 3,900원</div>
            </a></td>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea6.png">
            <div class="menu_name">제주 그린 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px"> 3,900원</div>
            </a></td>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea7.png">
            <div class="menu_name">하동 호지 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px"> 3,800원</div>
            </a></td>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea8.jpg">
            <div class="menu_name">초콜렛 밀크티</div>
            <div class="menu_price">
            <img src="img/won.png" width="15px"> 3,600원</div>
            </a></td>

  </tr>
</table>
<table class="menu">
    <tr>
        <td class="itemSize" onclick="submenu()"><a href="#">
            <img class="itemImg" src="img/milk_tea/milk_tea9.jpg">
            <div class="menu_name">자스민 그린 밀크티</div>
            <div class="menu_price">
                <img src="img/won.png" width="15px"> 3,700원</div>
            </a></td>
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
                </td>
            </tr>
        </table>
        
        <table id ="space">

        </table>

        `;

        $content.innerHTML = tag;
        
        //  [첫 화면] 에서 [게스트] - [메뉴 화면] 으로 넘어가기
        //  [첫 화면] 에서 [로그인] - [메뉴 화면] 으로 넘어가기     //log != null
        //  [첫 화면] 에서 [로그인] 으로 넘어가기                   //log = null
        //  [첫 화면] 에서 [로그인] - [게스트] 으로 넘어가기        //log != null      //  log => null

    }

}
