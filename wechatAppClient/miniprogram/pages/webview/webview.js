Page({
  onLoad: function(options) {
    this.setData({
      url: decodeURIComponent(options.url) // 获取并解码传递的文章链接
    });
  }
});
