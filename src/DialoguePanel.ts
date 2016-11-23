class DialoguePanel extends egret.DisplayObjectContainer {

    button: Button;
    textField: egret.TextField;
    body: egret.Shape;

    constructor(talk:string) {
        super();
        this.body = new egret.Shape();
        this.body.graphics.beginFill(0x000000, 0.5);
        this.body.graphics.drawRect(0, 0, 600, 172);
        this.body.graphics.endFill();
        this.body.y = 450;
        this.textField = new egret.TextField();
        this.textField.text = talk;
        this.button = new Button("ok_png");
        this.textField.x = 80;
        this.textField.y = 500;
        this.button.width = 40;
        this.button.height = 40;
        this.button.x = 500;
        this.button.y = 550;
        this.button.touchEnabled = true;
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

    }

    showDpanel() {
        this.addChild(this.body);
        this.addChild(this.button);
        this.addChild(this.textField);
    }

    disshowDpanel() {
        this.removeChild(this.body);
        this.removeChild(this.button);
        this.removeChild(this.textField);
        //this.alpha=0;
    }


    onButtonClick() {
        this.disshowDpanel();
        switch (TaskService.getInstance().taskList["000"].status) {
            case TaskStatus.ACCEPTABLE:

                TaskService.getInstance().accept("000");

                break;
            case TaskStatus.CAN_SUBMIT:
            //console.log(TaskService.getInstance().finish("000"));
                TaskService.getInstance().finish("000");

                break;
            default:
                return

        }
        TaskService.getInstance().notify(TaskService.getInstance().taskList["000"]);
    }
}

class Button extends egret.DisplayObjectContainer {
    body: egret.Bitmap;
    constructor(ad: string) {
        super();
        this.body = new egret.Bitmap();
        this.body.texture = RES.getRes(ad);
        this.addChild(this.body);
        this.touchEnabled = true;
    }
}