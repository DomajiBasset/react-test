"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Boot {
    constructor() {
        this._data = [];
        this._init();
    }
    ;
    _init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getList();
            this._createImage();
        });
    }
    getList() {
        return __awaiter(this, void 0, void 0, function* () {
            const listurl = 'http://125.228.2.127/interview_bk/RtrS1006/list.php';
            $.ajax({
                url: listurl,
                method: 'post',
                data: {
                    action: "GetList",
                    table: "testproductdata"
                },
                success: function (res) {
                    console.log('pass', res);
                    // this._data = JSON.parse(res);
                },
                error: (err) => {
                    console.log('Err:', err);
                },
            });
            console.log('???');
        });
    }
    ;
    getDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'http://125.228.2.127/interview_bk/RtrS1006/detail.php';
            $.ajax({
                url: url,
                method: 'post',
                data: {
                    "action": "GetDetail",
                    "table": "testproductdata",
                    "no": "P00002"
                },
                success: function (res) {
                    console.log('2pass', res);
                },
                error: (err) => {
                    console.log('Err:', err);
                },
            });
        });
    }
    ;
    addProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'http://125.228.2.127/interview_bk/RtrS1006/add.php';
            $.ajax({
                url: url,
                method: 'post',
                data: {
                    "action": "Add",
                    "table": "testcartdata",
                    "colume": {
                        "mobile": "0920211006",
                        "pno": "P00003",
                        "pimg": "xxx.png",
                        "pname": "Total1機油",
                        "pprice": "200",
                        "pnum": "6"
                    },
                    "redirect": "http://www.google.com"
                },
                success: function (res) {
                    console.log('pass', res);
                },
                error: (err) => {
                    console.log('Err:', err);
                },
            });
        });
    }
    ;
    getShopping() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'http://125.228.2.127/interview_bk/RtrS1006/list.php';
            $.ajax({
                url: url,
                method: 'post',
                data: {
                    "action": "GetCartList",
                    "table": "testcartdata",
                    "mobile": "0920211006"
                },
                success: function (res) {
                    console.log('pass', res);
                },
                error: (err) => {
                    console.log('Err:', err);
                },
            });
        });
    }
    ;
    _createImage() {
        const image = document.createElement("img");
        image.src = '';
        $('.div').append(image);
    }
    ;
}
;
new Boot();
