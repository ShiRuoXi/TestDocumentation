//https://www.thingjs.com/s/123f5119a292bbf38a213ff6
module.exports = ctx => ({
    title: '约定文档', 
    base:'/TestDocumentation/',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', 
        nav: [
            { text: '项目演示地址', link: '' },
            { text: '关于', link: '' },
        ],
        sidebar: [
            ['/', '简介'],
            ['/dome/home.md', '接口类型说明']
        ]
    }
})