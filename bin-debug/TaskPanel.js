var TaskPanel = (function (_super) {
    __extends(TaskPanel, _super);
    function TaskPanel(x, y) {
        _super.call(this);
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
    var d = __define,c=TaskPanel,p=c.prototype;
    p.onChange = function (task) {
        this.textField.text = task.desc;
        this.textField2.text = task.name + " :" + task.status.toString();
    };
    return TaskPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(TaskPanel,'TaskPanel',["Observer"]);
//# sourceMappingURL=TaskPanel.js.map