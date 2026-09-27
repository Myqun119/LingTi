const { cartItems } = require('../../../utils/data');

Page({
    data: {
        items: cartItems.map((item) => ({ ...item })),
        totalCount: 0,
        totalPrice: 0,
    },

    onShow() {
        this.recalculate();
    },

    recalculate() {
        const { items } = this.data;
        const totalCount = items.reduce((sum, item) => sum + item.count, 0);
        const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);
        this.setData({ totalCount, totalPrice });
    },

    changeCount(e) {
        const { index, action } = e.currentTarget.dataset;
        const items = this.data.items.slice();
        const target = items[index];

        if (!target) {
            return;
        }

        if (action === 'minus' && target.count > 1) {
            target.count -= 1;
        }

        if (action === 'plus') {
            target.count += 1;
        }

        this.setData({ items });
        this.recalculate();
    },

    removeItem(e) {
        const { index } = e.currentTarget.dataset;
        const items = this.data.items.slice();
        items.splice(index, 1);
        this.setData({ items });
        this.recalculate();
    },

    checkout() {
        wx.showToast({ title: '已进入结算流程', icon: 'success' });
    },
});