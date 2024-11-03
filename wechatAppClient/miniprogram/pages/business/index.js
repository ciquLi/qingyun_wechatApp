// index.js
const db = wx.cloud.database()
const app = getApp()
Page({
    data: {
        postList: [],
        ad2: null
    },
    onShareAppMessage: function () {
        return {
            title: "云某的小站"
        }
    },
    onLoad: function (options) {
        db.collection('info').where({
                '_id': '2ad666ce670b84550f441e95314d1956'
            })
            .get().then((res) => {
                console.log(res.data[0])
                // app.info = res.data[0]
                var len = res.data[0].postList2.length
                console.log(len)
                var array = []
                for (var i = 0; i < len; i++) {
                    array.push({
                        "images": res.data[0].postList2[i]
                    });
                }
                this.setData({
                    ad2: res.data[0].ad2,
                    postList: array
                })
                // console.log(this.data.postList)
                // app.glids = res.data[0].system.glids
            })
    }
});