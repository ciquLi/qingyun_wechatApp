// app.js
App({
    onLaunch: function () {
        if (!wx.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        } else {
            wx.cloud.init({
                // env 参数说明：
                //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
                //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
                //   如不填则使用默认环境（第一个创建的环境）
                env: 'qinyun-6gtayo3t120c6716',
                traceUser: true,
            });
        }
        this.globalData = {};
    },
    checkUpdate: function () {
        var n = wx.getUpdateManager();
        n.onCheckForUpdate(function (t) {
            console.log("检查更新：", t)
            t.hasUpdate && (n.onUpdateReady(function () {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，请重启应用",
                    showCancel: !1,
                    confirmColor: "#00cc11",
                    success: function (t) {
                        t.confirm && n.applyUpdate();
                    }
                });
            }), n.onUpdateFailed(function (n) {
                wx.showModal({
                    title: "已经有新版本了哟~",
                    content: "自动更新失败，请重启试试~"
                });
            }));
        });
    },
    onShow() {
        this.checkUpdate()
    }
});