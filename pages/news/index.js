const { featuredNews } = require('../../utils/data');
const { navigateTo } = require('../../utils/router');

Page({
    data: {
        newsList: featuredNews,
    },

    openDetail(e) {
        navigateTo('/pages/news/detail/index', { id: e.currentTarget.dataset.id });
    },
});