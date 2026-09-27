const { userDashboard, myStats, myEvents, featureEntries } = require('../../utils/data');
const { navigateTo } = require('../../utils/router');

Page({
    data: {
        user: {
            nickname: '点击登录',
            level: '未登录用户',
        },
        dashboard: userDashboard,
        stats: myStats,
        myEvents: myEvents,
        features: featureEntries,
    },

    onShow() {
        const app = getApp();
        const savedUser = wx.getStorageSync('userInfo');

        if (savedUser) {
            this.setData({ user: savedUser });
            app.globalData.userInfo = savedUser;
            app.globalData.loginReady = true;
        }
    },

    openEntry(e) {
        navigateTo(e.currentTarget.dataset.path);
    },

    openAuth() {
        navigateTo('/pages/auth/index');
    },
});