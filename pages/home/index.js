const { homeQuickEntries, featuredMatches, featuredGoods, featuredNews } = require('../../utils/data');
const { navigateTo } = require('../../utils/router');

Page({
    data: {
        quickEntries: homeQuickEntries,
        featuredMatches,
        featuredGoods,
        featuredNews,
    },

    onQuickSelect(e) {
        const { key } = e.detail.item;
        const map = {
            match: '/pages/match/index',
            shop: '/pages/shop/index',
            news: '/pages/news/index',
            tools: '/pages/me/tools/index',
        };
        navigateTo(map[key] || '/pages/me/index');
    },

    goMatchList() {
        navigateTo('/pages/match/index');
    },

    goShopList() {
        navigateTo('/pages/shop/index');
    },

    goNewsList() {
        navigateTo('/pages/news/index');
    },

    openMatch(e) {
        navigateTo('/pages/match/detail/index', { id: e.currentTarget.dataset.id });
    },

    openGoods(e) {
        navigateTo('/pages/shop/detail/index', { id: e.currentTarget.dataset.id });
    },

    openNews(e) {
        navigateTo('/pages/news/detail/index', { id: e.currentTarget.dataset.id });
    },
});