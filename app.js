App({
    globalData: {
        userInfo: null,
        loginReady: false,
        appName: '灵缇互娱',
    },

    onLaunch() {
        const logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
    },
});