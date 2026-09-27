Component({
    properties: {
        items: {
            type: Array,
            value: [],
        },
    },

    methods: {
        handleTap(e) {
            const { index } = e.currentTarget.dataset;
            const item = this.data.items[index];
            this.triggerEvent('select', { item });
        },
    },
});