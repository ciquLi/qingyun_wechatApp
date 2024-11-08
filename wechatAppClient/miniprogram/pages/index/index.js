const db = wx.cloud.database()
const app = getApp()

Page({
    adLoad() {
        console.log('原生模板广告加载成功')
    },
    adError(err) {
        console.error('原生模板广告加载失败', err)
    },
    adClose() {
        console.log('原生模板广告关闭')
    },
    //用户点击右上角分享
    onShareAppMessage: function () {
        return {
            title: "云某的小站"
        }
    },
    data: {
        knowledgePoints: [{
            title: '今日无事',
        }],
        urls: [
          {title: '校内班车', url: 'https://mp.weixin.qq.com/s/DxQTlX8opd7A0jhcJT43zQ'}
        ],
        ad1: null,
        postList: [],
        postList_xshd: [],
        postList_sthd: []
    },

    onLoad: function (options) {
        db.collection('info').where({
                '_id': '2ad666ce670b84550f441e95314d1956'
            })
            .get().then((res) => {
                console.log(res.data[0])
              
                // app.info = res.data[0]
                var len = res.data[0].notes.length
                if (len > 0) {
                    var array = []
                    for (var i = 0; i < len; i++) {
                        array.push({
                            "title": res.data[0].notes[i]
                        });
                    }
                    this.setData({
                        knowledgePoints: array
                    })
                }
                
                var len = res.data[0].postList1.length
                console.log(len)
                var array = []
                for (var i = 0; i < len; i++) {
                    array.push({
                        "images": res.data[0].postList1[i]
                    });
                }

                var len = res.data[0].postList_xshd.length
                console.log(len)
                var array_xshd = []
                for (var i = 0; i < len; i++) {
                    array_xshd.push({
                        "images": res.data[0].postList_xshd[i]
                    });
                }

                var len = res.data[0].postList_sthd.length
                console.log(len)
                var array_sthd = []
                for (var i = 0; i < len; i++) {
                    array_sthd.push({
                        "images": res.data[0].postList_sthd[i]
                    });
                }

                this.setData({
                    ad1: res.data[0].ad1,
                    postList: array,
                    postList_xshd: array_xshd,
                    postList_sthd: array_sthd,
                    urls: res.data[0].urls
                })
                // app.glids = res.data[0].system.glids
            })
    },

    navigateToWebview(e) {
      const url = e.currentTarget.dataset.url;
      if (url) {
        wx.navigateTo({
          url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
        });
      } else {
        console.error('URL not found:', e.currentTarget.dataset);
      }
    }

    

});