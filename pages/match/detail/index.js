Page({
    data: {
        detail: {
            title: '城市友谊赛',
            time: '2026-08-20 18:30',
            venue: '灵缇训练馆A区',
            fee: '￥88',
            status: '报名中',
            rules: '请提前十分钟到场，报名后不可无故取消。',
            quota: '24/32',
        },
        form: {
            name: '',
            phone: '',
            team: '',
            note: '',
        },
        submitted: false,
    },

    onInput(e) {
        const { field } = e.currentTarget.dataset;
        this.setData({
            [`form.${field}`]: e.detail.value,
        });
    },

    submitForm() {
        const { name, phone } = this.data.form;

        if (!name || !phone) {
            wx.showToast({ title: '请先填写姓名和手机号', icon: 'none' });
            return;
        }

        this.setData({ submitted: true });
        wx.showToast({ title: '报名已提交', icon: 'success' });
    },
});