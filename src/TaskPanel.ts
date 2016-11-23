class TaskPanel extends egret.DisplayObjectContainer implements Observer {

    body: egret.Shape;
    textField: egret.TextField;
    textField2: egret.TextField;
    
    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;
        this.body = new egret.Shape();
        this.textField = new egret.TextField();
        this.body.graphics.beginFill(0x000000, 0.4);
        this.body.graphics.drawRect(0, 0, 600, 100);
        this.body.graphics.endFill();

        this.textField.text = "   任务进程    ";
        this.textField.x = x;
        this.textField.x = y;
        this.textField2 = new egret.TextField();
        this.textField2.x = x + 20;
        this.textField2.y = y + 30;
        this.addChild(this.body);
        this.addChild(this.textField);
        this.addChild(this.textField2);

    }

    onChange(task: Task): void {
        this.textField.text = task.desc;
        this.textField2.text = task.name + " :" + task.status.toString();
    }

}
