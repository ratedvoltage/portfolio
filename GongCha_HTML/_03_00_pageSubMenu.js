import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { ControllerMain } from "./_02_controllerMain.js";

export class PageSubMenu{

    execute () {
        let $sidebar = document.querySelector("#sidebar");
        let tag ="";
        tag +=`

        <style>
        ${new GetSetting().execute()}
        ${new GetFont().execute()}

        /*===============================================================================*/
          #contentTable{text-align: center; float : left;display: flex;}
          #Setposition {text-align: center; float : left;display: flex;}
          #SetpopUpSlideMenu {}
          #outline {width: 170px;background-color: #C32033;
              /* 아래 회색부 합치기위한 마진 안남기기 */
              margin: 8px 8px 0px 8px;}
          #headerTable {width: 100%;}
  
          /* 장바구니 옆 숫자(갯수) */
          #shoppingBasketSideSize {height: 40px;width: 40px;text-align: start;transform: translateY(7.05px);}
          #shoppingBasketSideTxt {width: 30px;font-size: 20px;border: #C32033;border-radius: 10px;
              background-color: #9b1424;text-align: center;color: white;}
  
          /* 장바구니 */
          #shoppingBasketImg {width: 100%;}
          #shoppingBasketTxt {font-weight: bold;font-size: 25px;color: white;}
  
          /* 화살표,전체삭제, 장바구니  */
          #basketInTable {width: 100%;}
  
          /* 화살표 */
          #arrowUpImg {width: 30%;height: 60px;}
          #arrowDownImg {width: 30%;height: 60px;transform: rotate(180deg);}
  
          /* 전체삭제 */
          #deleteAll {width: 100%;padding: 3px;}
          #deleteAllBtn {width: 90%;height: 70px;border-radius: 10px;font-size: 20px;
              background-color: #C32033;border: 3px solid white;color: white;font-weight: bold;}
  
          /* 장바구니 목록 */
          .shopping {width: 100%;padding: 4.7px;}
  
          #shoppingBtn {width: 90%;height: 140px;border-radius: 10px;
              background-color: #9b1424;border: 0px solid rgb(197, 27, 27);color: white;font-weight: bold;}
          #shoppingImg {opacity: 0.4;width: 40%;}
          #cupponTable {width: 100%;}
  
          /* 쿠폰, 스템프  */
          .cuppon {width: 100%;height: 160px;}
  
          /* 스템프  */
          #stempBtn,#cupponBtn {width: 90%;height: 140px;border-radius: 10px;
              background-color: white;border: 0px solid white;color: white;font-weight: bold;}
          #btnStempTable,#btnCupponTable {margin: 0 auto;width: 100%;}
          #cupponImg {width: 60%;}
          #stempImg {width: 35%;}
          #cupponTxt,#stempTxt {font-size: 24px;color: #C32033;font-weight: 900;}
  
          /* 총 결제  */
          #totalPayTable {width: 100%;height: 120px;margin-top: 30px;}
          #billTxt {height: 13px;font-weight: 900;font-size: 20px;color: white;}
          #bill {font-weight: 900;font-size: 25px;color: white;}
          #billSpace {height: 0px;}
  
          /* 결제 버튼 위치 */
          #payTable {background-color: #786E6C;width: 170px;height: 170px;margin: 0px 8px 8px 8px;}
          #payBtnSet {width: 100%;height: 100%;}
          #payBtn {background-color: #786E6C;border-color: #786E6C;width: 100%;height: 100%;border: 0px solid;}
          #btnPayTable {margin: 0 auto;}
          #payImgSet {width: 100%;}
          #payImg {opacity: 20%;width: 40%;}
          #payTxt {font-size: 30px;color: #ffffff;}
        </style>
        `;
        tag +=`

        <body>
        <table  id="Setposition">
        <tr>
        
        <td id = "SetpopUpSlideMenu">
                <!--------------------------------------------------------------------->
                
    <table id="outline">
        <tr>
            <td>
                <table id="headerTable">
                    <tr>
                        <td id="shoppingBasketSideSize"></td>
                        <td></td>
                        <td id="shoppingBasketSideSize">
                            <input type="text" id="shoppingBasketSideTxt" value="00">
                        </td>

                    </tr>
                    <tr>
                        <td></td>
                        <td id="shoppingBasket">
                            <img id="shoppingBasketImg" src="img/cart.svg">
                        </td>
                        <td></td>

                    </tr>
                    <tr>
                        <td id="shoppingBasketTxt" colspan="3">장바구니</td>
                    </tr>
                </table>
                <table id="basketInTable">
                    <!-- 위쪽 화살표 -->
                    <tr>
                        <td class="arrow">
                            <img id="arrowUpImg" src="img/arrowShop.svg">
                        </td>
                    </tr>
                    <!-- 전채 삭제 -->
                    <tr>
                        <td id="deleteAll">
                            <button id="deleteAllBtn">전체삭제</button>
                        </td>
                    </tr>
                    <!-- 고른 메뉴 표 -->
                    <tr>
                        <td class="shopping">
                            <button id="shoppingBtn">
                                <img id="shoppingImg" src="img/cart.svg">
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="shopping">
                            <button id="shoppingBtn">
                                <img id="shoppingImg" src="img/cart.svg">
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="shopping">
                            <button id="shoppingBtn">
                                <img id="shoppingImg" src="img/cart.svg">
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="shopping">
                            <button id="shoppingBtn">
                                <img id="shoppingImg" src="img/cart.svg">
                            </button>
                        </td>
                    </tr>
                    <!-- 아래쪽 화살표 -->
                    <tr>
                        <td>
                            <img id="arrowDownImg" src="img/arrowShop.svg">
                        </td>
                    </tr>

                </table>
                <table id="cupponTable">

                    <!-- 스탬프 -->
                    <tr>
                        <td class="cuppon">
                            <button id="stempBtn">
                                <table id="btnStempTable">
                                    <tr>
                                        <td>
                                            <img id="stempImg" src="img/stemp.png">
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id="stempTxt">
                                            스템프 사용
                                        </td>
                                    </tr>
                                </table>
                            </button>
                        </td>
                    </tr>


                    <!-- 메뉴 교환권 -->
                    <tr>
                        <td class="cuppon">
                            <button id="cupponBtn">
                                <table id="btnCupponTable">
                                    <tr>
                                        <td>
                                            <img id="cupponImg" src="img/COUPON.svg">
                                        </td>
                                    </tr>

                                    <tr>
                                        <td id="cupponTxt">
                                            메뉴 교환권
                                        </td>
                                    </tr>
                                </table>
                            </button>
                        </td>
                    </tr>
                </table>
                <table id="totalPayTable">
                    <tr>
                        <td id="billTxt">총 결제금액</td>
                    </tr>
                    <tr>
                        <td id="bill">0원</td>
                    </tr>
                    <tr>
                        <td id="billSpace"></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
    <table id="payTable">
        <tr>
            <td id="payBtnSet">
                <button id="payBtn"type="button" onclick="location.href='popUpPayMent01.html'" >
                    <table id="btnPayTable">
                        <tr>
                            <td id="payImgSet">
                                <img id="payImg" src="img/pay.svg">
                            </td>
                        </tr>
                        <tr>
                            <td id="payTxt">결제하기</td>
                        </tr>
                    </table>
                </button>
            </td>
        </tr>
    </table>


            </td>
        </tr>
        </table>
        </body>

        `;

        $sidebar.innerHTML = tag;
        

    
    
        
        
        // setInterval(this.breath,100)
        
    }///////////////////////////


    // breath = () =>{
    //     let num = 50;
    //     let speed = 3;
    //     let switcher = true;
    //     let opt = document.querySelector('#payImg');
    //     let opt2= document.querySelector('#payTxt');
    //     if(num>=90){ 
    //         switcher=true
    //     }
    //     else if (num<=10 ){
    //         switcher=false;
    //     }
    //     if(switcher){
    //         num = num - speed;
    //     }else{
    //         num = num + speed;
    //     }
    //     opt.opacity = `${num/100}`;
    //     opt2.opacity = `${num/100}`;

    //     //console.log(num/100);
    // }
    



}