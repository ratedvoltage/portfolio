import { ControllerMain } from "./_02_controllerMain.js";

export class JsonMenu {
    static instance = new JsonMenu();
    static getInstance() {return this.instance;}
    
    start() {
        this.sesasonMenuList = null;
        this.bestMenuList = null;
        this.milkteaMenuList = null;
        this.originalMenuList = null;
        this.setSeasonMenu();
        this.setBestMenu();
        this.setMilkteaMenu();
        this.setOriginalMenu();
    }

    setSeasonMenu() {
        this.sesasonMenuList = [
            {
                "menu_name" : "딸기 쥬얼리 벨벳 밀크티",
                "menu_img" : "img/season_menu/2023seson_menu1.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,900원'
            },
            {
                "menu_name" : "딸기 듬뿍 밀크티",
                "menu_img" : "img/season_menu/2023seson_menu2.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,900원'
            },
            {
                "menu_name" : "얼그레이 딸기 스무디",
                "menu_img" : "img/season_menu/2023seson_menu3.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,900원'
            },
            {
                "menu_name" : "블랙티 카페 스무디+펄",
                "menu_img" : "img/season_menu/2022sp_coffee1.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,000원'
            },
            {
                "menu_name" : "공차슈페너",
                "menu_img" : "img/season_menu/2022sp_coffee2.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,000원'
            },
            {
                "menu_name" : "얼그레이 카페라떼+펄",
                "menu_img" : "img/season_menu/2022sp_coffee3.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,500원'
            }
        ]
    }
    setBestMenu() {
        this.bestMenuList = [
            {
                "menu_name" : "피스타치오 밀크티+펄",
                "menu_img" : "img/best_menu/best_menu1.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,900원'
            },
            {
                "menu_name" : "타로 밀크티+펄",
                "menu_img" : "img/best_menu/best_menu2.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,500원'
            },
            {
                "menu_name" : "블랙 밀크티+펄",
                "menu_img" : "img/best_menu/best_menu3.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,600원'
            },
            {
                "menu_name" : "청포도 그린티+알로에",
                "menu_img" : "img/best_menu/best_menu4.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,100원'
            },
            {
                "menu_name" : "망고 요구르트+화이트 펄",
                "menu_img" : "img/best_menu/best_menu5.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,200원'
            },
            {
                "menu_name" : "제주 그린 밀크티+펄",
                "menu_img" : "img/best_menu/best_menu6.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '4,300원'
            }
        ]
    }
    setMilkteaMenu() {
        this.milkteaMenuList = [
            {
                "menu_name" : "블랙 밀크티",
                "menu_img" : "img/milk_tea/milk_tea1.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,400원'
            },
            {
                "menu_name" : "얼그레이 밀크티",
                "menu_img" : "img/milk_tea/milk_tea2.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,300원'
            },
            {
                "menu_name" : "타로 밀크티",
                "menu_img" : "img/milk_tea/milk_tea3.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,500원'
            },
            {
                "menu_name" : "우롱 밀크티",
                "menu_img" : "img/milk_tea/milk_tea4.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,400원'
            },
            {
                "menu_name" : "피스타치오 밀크티",
                "menu_img" : "img/milk_tea/milk_tea5.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,900원'
            },
            {
                "menu_name" : "제주 그린 밀크티",
                "menu_img" : "img/milk_tea/milk_tea6.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,900원'
            },
            {
                "menu_name" : "하동 호지 밀크티",
                "menu_img" : "img/milk_tea/milk_tea7.png",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,800원'
            },
            {
                "menu_name" : "초콜렛 밀크티",
                "menu_img" : "img/milk_tea/milk_tea8.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,600원'
            },
            {
                "menu_name" : "자스민 그린 밀크티",
                "menu_img" : "img/milk_tea/milk_tea9.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,700원'
            }
        ]
    }
    setOriginalMenu() {
        this.originalMenuList = [
            {
                "menu_name" : "우롱티",
                "menu_img" : "img/original/original_tea1.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,200원'
            },
            {
                "menu_name" : "자스민그린티",
                "menu_img" : "img/original/original_tea2.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,300원'
            },
            {
                "menu_name" : "블랙티",
                "menu_img" : "img/original/original_tea3.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,300원'
            },
            {
                "menu_name" : "얼그레이티",
                "menu_img" : "img/original/original_tea4.jpg",
                "menu_price_img" : "img/won.png",
                "menu_price" : '3,400원'
            }
        ]
    }



}