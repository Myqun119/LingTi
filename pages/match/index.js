const { featuredMatches } = require('../../utils/data');
const { navigateTo } = require('../../utils/router');

Page({
    data: {
        matches: featuredMatches,
        filteredMatches: featuredMatches,
        activeFilter: 'all',
        keyword: '',
    },

    onLoad() {
        this.refreshMatches();
    },

    changeFilter(e) {
        this.setData({ activeFilter: e.currentTarget.dataset.filter }, () => {
            this.refreshMatches();
        });
    },

    onKeywordInput(e) {
        this.setData({ keyword: e.detail.value.trim() }, () => {
            this.refreshMatches();
        });
    },

    refreshMatches() {
        const { matches, activeFilter, keyword } = this.data;
        const lowerKeyword = keyword.toLowerCase();

        const filteredMatches = matches.filter((item) => {
            const filterMatched = activeFilter === 'all' || item.filter === activeFilter;
            const keywordMatched = !lowerKeyword || item.title.toLowerCase().includes(lowerKeyword)
                || item.intro.toLowerCase().includes(lowerKeyword)
                || item.keywords.some((word) => word.toLowerCase().includes(lowerKeyword));

            return filterMatched && keywordMatched;
        });

        this.setData({ filteredMatches });
    },

    openDetail(e) {
        navigateTo('/pages/match/detail/index', { id: e.currentTarget.dataset.id });
    },
});