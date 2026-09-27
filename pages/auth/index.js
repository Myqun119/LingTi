Page({
    data: {
        phone: '',
        agree: true,
    },

    onPhoneInput(e) {
        this.setData({ phone: e.detail.value.trim() });
    },

    toggleAgree() {
        this.setData({ agree: !this.data.agree });
    },

    loginByWechat() {
        if (!this.data.agree) {
            wx.showToast({ title: '请先勾选授权协议', icon: 'none' });
            return;
        }

        const userInfo = {
            nickname: '灵缇用户',
            level: '已授权用户',
        };

        wx.setStorageSync('userInfo', userInfo);
        getApp().globalData.userInfo = userInfo;
        getApp().globalData.loginReady = true;

        wx.showToast({ title: '授权成功', icon: 'success' });
        setTimeout(() => {
            wx.navigateBack({ delta: 1 });
        }, 400);
    },
});