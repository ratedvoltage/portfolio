//import { PageContents } from "./pageContents.js";
import { PageHeader } from "./_03_00_pageHeader.js";
import { PageFooter } from "./_03_00_pageFooter.js";
import { PageSideMenu } from "./_03_00_pageSideMenu.js";
import { PageSeasonMenu } from "./_03_01_pageSeasonMenu.js";
import { PageBestMenu } from "./_03_02_pageBestMenu.js";
import { pageMilkteaMenu } from "./_03_03_pageMilkteaMenu.js";
import { PageOriginalMenu } from "./_03_04_pageOriginalMenu.js";
import { PageFst } from "./_03_00_1_pageFst.js";



export class ControllerMain {
    static instance = new ControllerMain();
    static getInstance(){return this.instance;}

    

    start(){
        this.log = null;

        this.pageList = {};
        this.setPageList ();

        //this.changePage("page-header");
        this.changePage("page-fstPage");
    }

    setPageList() {
        // this.pageList["page-visitfirst"] = new PageVisitFirst();
        //-- 해더 --
        this.pageList["page-header"] = new PageHeader();
        //-- 사이더 --
        this.pageList["page-sideMenu"] = new PageSideMenu();
        //-- 풋터 --
        this.pageList["page-footer"] = new PageFooter();
        //-- 목차, 컨탠츠, ... --//
        //this.pageList["page-contents"] = new PageContents();
        //-- 첫 화면 --
        this.pageList["page-fstPage"] = new PageFst();
        //-- 컨탠츠 페이지 --
        this.pageList["page-seasonMenu"] = new PageSeasonMenu();
        this.pageList["page-bestMenu"] = new PageBestMenu();
        this.pageList["page-milkteaMenu"] = new pageMilkteaMenu();
        this.pageList["page-originalMenu"] = new PageOriginalMenu();


    }

    changePage(pageName){
        this.pageList[pageName].execute();
    }
}
