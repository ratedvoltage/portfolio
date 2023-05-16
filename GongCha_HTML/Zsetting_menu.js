//Zsetting.js
export class GetSettingMenu{
    execute() {
        let tag = "";
        tag +=
        `
        
        #contents-table {
            margin: 0 auto;
        }
        /*menu start*/
        .menu {
            margin: 10px 10px 0px 10px;
            font-family: 'NanumSquareNeo-Variable';
            
        }
       
       
       .menu_name {
        margin: 0 auto;
        font-size : 23px;
        text-align: center;
       }
       .menu_price {
        margin : 0 auto;
        font-size: 22px;
        text-align: center;
       }
       .itemImg {
        width: 100%;
       }
       .itemSize{
        height: 300px;
        width: 210px;
        color: black;
        text-decoration: none;
        margin : 0 auto;
       }
       .itemSize a:hover {
        color: rgb(209, 113, 139);
       }
       .itemSize a {
        color: black;
       }
       /* menu end */

        `;
        return tag;
    }
}