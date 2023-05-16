//controllerMain.js

import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";

export class ControllerMain{
    static instance = new ControllerMain();
    static getInstance(){return this.instance;}
    // 싱글톤 패턴 //메모리에 자신의 자리를 남긴다.

    start(){
        this.pageList = {}; //페이지를 바꾸기위한 리스트
        this.setPageList ();    //페이지 바꿀때 미리 셋팅

        // 예를들어 해당 페이지에서 execute를 불러오기 위해서는
        // let ph = new PageHeader();
        // ph.execute();
        // 를 매번 선언해야 하지만
        //  제이슨 자료형을 사용함으로써[1*] 미리 선언해 준다.
        this.changePage("page-header");
        this.changePage("page-index");
        // this.changePage("page-content");

    }

    setPageList() { //  [1*]미리 선언 (셋팅)
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-index"] = new PageIndex();
        // this.pageList["page-content"] = new PageIndex();
    }
    
    changePage(pageName) {
        this.pageList[pageName].execute();
    }
}