// pages/news/index.js
const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        news: [],
        ad3: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
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
                var len =
                    this.setData({
                        ad3: res.data[0].ad3,
                        news: res.data[0].news
                    })
            })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})