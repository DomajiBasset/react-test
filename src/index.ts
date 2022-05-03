
class Boot {

    private _data: any = [];
    constructor() {
        this._init();
    };

    private async _init(): Promise<void> {
        await this.getList();
        this._createImage();
    }

    public async getList(): Promise<void> {
        const listurl = 'http://125.228.2.127/interview_bk/RtrS1006/list.php';

        $.ajax({
            url: listurl,
            method: 'post',
            data: {
                action: "GetList",
                table: "testproductdata"
            },
            success: function (res) {
                console.log('pass', res)
                // this._data = JSON.parse(res);
            },
            error: (err) => {
                console.log('Err:', err)
            },
        });
        console.log('???')
    };

    public async getDetail(): Promise<void> {
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
                console.log('2pass', res)
            },
            error: (err) => {
                console.log('Err:', err)
            },
        });
    };

    public async addProduct(): Promise<void> {
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
                console.log('pass', res)
            },
            error: (err) => {
                console.log('Err:', err)
            },
        });
    };

    public async getShopping(): Promise<void> {
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
                console.log('pass', res)
            },
            error: (err) => {
                console.log('Err:', err)
            },
        });
    };

    private _createImage():void{
        const image = document.createElement("img");
        image.src = '';
        $('.container').append(image);
    };
};
new Boot();