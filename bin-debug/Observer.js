var NPC = (function (_super) {
    __extends(NPC, _super);
    // public task:Task;
    function NPC(id, ad, x, y, dp) {
        _super.call(this);
        this._body = new egret.Bitmap();
        this._emoji = new egret.Bitmap();
        this.dialoguePanel = dp;
        this._body.texture = RES.getRes(ad);
        this._emoji.texture = RES.getRes("notice_png");
        this.id = id;
        this.x = x;
        this.y = y;
        this._body.width = this._body.width / 3;
        this._body.height = this._body.height / 3;
        this._emoji.width = this._emoji.width / 5;
        this._emoji.height = this._emoji.height / 5;
        this._emoji.y = -100;
        this._emoji.alpha = 0;
        this.addChild(this._body);
        this.addChild(this._emoji);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onNPCClick, this);
    }
    var d = __define,c=NPC,p=c.prototype;
    p.onChange = function (task) {
        if (task.status == TaskStatus.ACCEPTABLE && this.id == task.fromNpcId) {
            //task.status = TaskStatus.DURING;
            //this._emoji.texture = RES.getRes("question_png");
            this._emoji.alpha = 1;
        }
        if (task.status == TaskStatus.CAN_SUBMIT && this.id == task.fromNpcId) {
            //task.status = TaskStatus.;
            //this._emoji.texture = RES.getRes("question_png");
            this._emoji.alpha = 0;
        }
        if (task.status == TaskStatus.CAN_SUBMIT && this.id == task.toNpcId) {
            this._emoji.texture = RES.getRes("question_png");
            this._emoji.alpha = 1;
        }
        if (task.status == TaskStatus.SUBMITED && this.id == task.toNpcId) {
            this._emoji.alpha = 0;
        }
    };
    p.onNPCClick = function () {
        this.dialoguePanel.showDpanel();
        TaskService.getInstance().notify(TaskService.getInstance().taskList["000"]);
    };
    return NPC;
}(egret.DisplayObjectContainer));
egret.registerClass(NPC,'NPC',["Observer"]);
//# sourceMappingURL=Observer.js.map