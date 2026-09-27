const homeQuickEntries = [
    { key: 'match', title: '赛事', desc: '查看全部赛事', color: '#ff4d4f', icon: '赛' },
    { key: 'shop', title: '商城', desc: '精选装备好物', color: '#f97316', icon: '商' },
    { key: 'news', title: '资讯', desc: '最新互娱热讯', color: '#8b5cf6', icon: '讯' },
    { key: 'tools', title: '工具', desc: '发牌机与辅助工具', color: '#10b981', icon: '工' },
];

const featuredMatches = [
    {
        id: 'm1',
        title: '城市友谊赛',
        status: '报名中',
        filter: 'signup',
        time: '2026-08-20 18:30',
        venue: '灵缇训练馆A区',
        fee: '￥88',
        intro: '适合新老用户参与的轻竞技活动。',
        keywords: ['城市', '友谊', '报名', '轻竞技'],
        quota: '24/32',
        needAudit: false,
    },
    {
        id: 'm2',
        title: '周末挑战赛',
        status: '进行中',
        filter: 'ongoing',
        time: '2026-08-17 20:00',
        venue: '灵缇互娱中心',
        fee: '免费',
        intro: '积分赛制，支持现场报名。',
        keywords: ['周末', '挑战', '积分', '现场'],
        quota: '16/24',
        needAudit: true,
    },
    {
        id: 'm3',
        title: '月末邀请赛',
        status: '已结束',
        filter: 'ended',
        time: '2026-07-29 19:30',
        venue: '灵缇训练馆B区',
        fee: '￥128',
        intro: '面向进阶玩家的邀请制赛事。',
        keywords: ['月末', '邀请', '进阶'],
        quota: '32/32',
        needAudit: true,
    },
];

const featuredGoods = [
    {
        id: 'g1',
        title: '训练手套',
        price: '69',
        tag: '热卖',
        intro: '适合日常训练和比赛使用。',
        category: 'equipment',
        keywords: ['手套', '训练', '防护'],
        stock: 36,
    },
    {
        id: 'g2',
        title: '赛事纪念包',
        price: '129',
        tag: '新品',
        intro: '限量发售，支持组合购买。',
        category: 'gift',
        keywords: ['纪念包', '礼品', '限量'],
        stock: 12,
    },
    {
        id: 'g3',
        title: '补给水壶',
        price: '39',
        tag: '推荐',
        intro: '轻便耐用，适合随身携带。',
        category: 'daily',
        keywords: ['水壶', '补给', '随身'],
        stock: 58,
    },
];

const featuredNews = [
    {
        id: 'n1',
        title: '灵缇互娱小程序内容运营方案正式上线',
        date: '2026-08-17',
        intro: '围绕赛事、商城、资讯和用户中心构建统一入口。',
    },
    {
        id: 'n2',
        title: '发牌机与工具中心能力将逐步接入',
        date: '2026-08-16',
        intro: '用于承接设备管理和现场操作能力。',
    },
];

const userDashboard = [
    { title: '我的赛事', desc: '报名记录、结果与状态', path: '/pages/me/events/index' },
    { title: '我的订单', desc: '商城订单、物流与售后', path: '/pages/me/orders/index' },
    { title: '工具中心', desc: '发牌机、辅助工具、设备授权', path: '/pages/me/tools/index' },
    { title: '账号授权', desc: '微信授权、手机号绑定', path: '/pages/auth/index' },
];

const myStats = [
    { label: '信用分', value: '98', progress: 85 },
    { label: '天梯分', value: '1820', progress: 72 },
    { label: '胜率', value: '76%', progress: 76 },
];

const myEvents = [
    { title: '战绩', value: '12胜 3负', icon: '战' },
    { title: '证书', value: '3项资格', icon: '证' },
    { title: '复盘', value: '6场回放', icon: '复' },
    { title: '规则', value: '赛事制度', icon: '规' },
];

const featureEntries = [
    { title: '设备扫码授权', desc: '连接设备与授权管理', path: '/pages/me/tools/index' },
    { title: '我的预约', desc: '查看已预约活动与场次', path: '/pages/me/events/index' },
    { title: '企业中心·场馆商户', desc: '商户管理与合作入口', path: '/pages/me/orders/index' },
    { title: '意见反馈', desc: '提交问题与建议', path: '/pages/auth/index' },
];

const cartItems = [
    { id: 'g1', title: '训练手套', spec: 'L码', price: 69, count: 1 },
    { id: 'g2', title: '赛事纪念包', spec: '标准版', price: 129, count: 2 },
];

module.exports = {
    homeQuickEntries,
    featuredMatches,
    featuredGoods,
    featuredNews,
    userDashboard,
    myStats,
    myEvents,
    featureEntries,
    cartItems,
};