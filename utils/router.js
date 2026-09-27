function navigateTo(path, params = {}) {
    const query = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    wx.navigateTo({
        url: query ? `${path}?${query}` : path,
    });
}

module.exports = {
    navigateTo,
};