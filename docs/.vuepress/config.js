
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
        sidebar:  
        [
            ['/', '简介'],
            ['/dome/home.md', 'webSocket类型说明'],
            ['/dome/floor.md', 'API类型说明']
        ]
        
    }
})