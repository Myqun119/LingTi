Page({
    data: {
        detail: {
            title: '训练手套',
            price: '69',
            intro: '适合日常训练和比赛使用，支持多规格选择。',
            stock: '库存充足',
            service: '支持七天无理由退换（具体以商家规则为准）',
        },
        quantity: 1,
    },

    increaseQuantity() {
        this.setData({ quantity: this.data.quantity + 1 });
    },

    decreaseQuantity() {
        if (this.data.quantity <= 1) {
            return;
        }

        this.setData({ quantity: this.data.quantity - 1 });
    },

    addToCart() {
        wx.showToast({ title: '已加入购物车', icon: 'success' });
    },

    buyNow() {
        wx.showToast({ title: '已生成购买意向', icon: 'success' });
    },

    openCart() {
        wx.navigateTo({ url: '/pages/shop/cart/index' });
    },
});