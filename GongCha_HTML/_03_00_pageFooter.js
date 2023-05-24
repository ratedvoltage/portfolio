import { GetFont } from "./ZFont.js";
import { GetSetting } from "./Zsetting.js";
import { ControllerMain } from "./_02_controllerMain.js";

export class PageFooter {


    execute () {
        let $footer = document.querySelector("#footer");
        let tag ="";
        tag +=`

        <style>
        ${new GetSetting().execute()}
        ${new GetFont().execute()}

        #footer {
            display: block;
            flex-direction: column;
    
            flex:1;
        }
        
        /* page */

        #page {

            
           width: 880px;
           float: left;

           height: 100px;
           margin: 0 auto;
           text-align: center;
           position: sticky;
           bottom: 0;
           left: 0;
          }
       #page a,page button {
           color: white;
       }
       #page button {
        color: white;
    }
   
        #page a:hover{
            color: black;
         }
        #page button:hover {
            color: black;
         }
          #pageSpace1 {
           width: 100px;
           text-align: right;
          }
          #pageSpace2 {
           width: 100px;
           text-align: left;
          }
          .prenext{
           font-family: 'NanumSquareNeo-Variable';
           background-color: #C32033;
           border: none;
           border-radius: 5px;
           padding:  25px 60px;
           font-size: 20px;
          }
          #pre{
           margin-right: 100px;
          }
          #next {
           margin-left: 100px;
           
          }
        
      
          #curcle {
           width: 30px;
          }
          button {
            cursor: pointer;
        }
          
        .PRE_NEXT_Button {width: 160px;height: 80px;background-color:
            #C32033;border-radius: 5px;border: 0px solid #999;}
        .PRE_NEXT_Txt {font-size: 25px;font-weight: bold;color:white;}
        .PRE_NEXT_Txt:hover {color:black;}

        </style>
        `;
        tag +=`
        <body>
            <div id="footer-top"></div>
                <table id="page">
                    <tr>
                        <td>
                            <!--<span id="pre" class="prenext"><a href="#">이전</a></span>-->
                            
                            <button class="PRE_NEXT_Button">
                                <div class="PRE_NEXT_Txt">이전</div>
                            </button>
                        </td>
                        <td id="pageSpace1">
                            <svg id="curcle" width="50" height="50">
                                <circle cx="10" cy="10" r="9" fill="#C32033" stroke="none"/>
                            </svg>
                        </td>
                        <td id="pageSpace2">
                            <svg id="curcle" width="50" height="50">
                                <circle cx="10" cy="10" r="9" fill="white" stroke="#C32033" stroke-width="1"/>
                            </svg>
                        </td>
                        <td>
                            <!--<span id="next" class="prenext"><a href="#">다음</a></span>-->
                            <button class="PRE_NEXT_Button">
                                <div class="PRE_NEXT_Txt">다음</div>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </body>

        `;

        $footer.innerHTML = tag;
    }
}
