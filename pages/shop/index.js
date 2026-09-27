const { featuredGoods } = require('../../utils/data');
const { navigateTo } = require('../../utils/router');

Page({
    data: {
        goods: featuredGoods,
        filteredGoods: featuredGoods,
        keyword: '',
        activeCategory: 'all',
    },

    onLoad() {
        this.refreshGoods();
    },

    onKeywordInput(e) {
        this.setData({ keyword: e.detail.value.trim() }, () => {
            this.refreshGoods();
        });
    },

    changeCategory(e) {
        this.setData({ activeCategory: e.currentTarget.dataset.category }, () => {
            this.refreshGoods();
        });
    },

    refreshGoods() {
        const { goods, keyword, activeCategory } = this.data;
        const lowerKeyword = keyword.toLowerCase();

        const filteredGoods = goods.filter((item) => {
            const categoryMatched = activeCategory === 'all' || item.category === activeCategory;
            const keywordMatched = !lowerKeyword || item.title.toLowerCase().includes(lowerKeyword)
                || item.intro.toLowerCase().includes(lowerKeyword)
                || item.keywords.some((word) => word.toLowerCase().includes(lowerKeyword));

            return categoryMatched && keywordMatched;
        });

        this.setData({ filteredGoods });
    },

    openDetail(e) {
        navigateTo('/pages/shop/detail/index', { id: e.currentTarget.dataset.id });
    },

    openCart() {
        navigateTo('/pages/shop/cart/index');
    },
});