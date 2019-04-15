function getSearchMusic(keyword, pageindex, callback) {
  wx.request({
    url: 'http://cms.sh.centanet.com/api/app_fx_ser',
    data: {
      keyword: keyword,
      page: pageindex,
      _: Date.now()
    },
    method: 'GET',
    header: { 'content-Type': 'application/json' },
    success: function (res) {
      if (res.statusCode == 200) {
        callback(res.data);
      }
    }
  })
}

module.exports = {
  getSearchMusic: getSearchMusic
}