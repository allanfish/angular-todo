fis.config.set("roadmap.path", [
    {
        reg: /^\/bower_components\/(.*)\.(js|coffee|less|css|properties|bcmap|cur|png)$/i,
        isMod: false,
        useSprite: false,
        useOptimizer: false,
        id: '$1',
        release: true,
        release: '/todo/$&'
    },
    {
        reg: /^\/app\/(.*)\.(js|coffee|less|css)$/i,
        //是组件化的，会被jswrapper包装
        isMod: true,
        useSprite: false,
        isAngular: true,
        //id是去掉sea-modules和.js后缀中间的部分
        id: 'app/$1',
        release: '/todo/app/$1.$2'
    },
    {
        reg: /(.*)\.html/i,
        isMod: false,
        useMap: false,
        useCache: false,
        release: '/todo/$1.html'
    },
    {
        reg: /assets\/img\/([\w\-]*).png/,
        useHash: false,
        release: '/os/assets/img/$1.png'
    },
    {
        reg: '/assets/img/**',
        useOptimizer: false,
        useSprite: false,
        release: '/os/$&'
    },
    {
        reg: '/mobile/**',
        isMode: false,
        useMap: false,
        release: '/os/$&'
    },
    {
        reg: '**.md',
        release: false
    },
    {
        reg: '_bak/**',
        release: false
    },
    {
        reg: "**",
        release: "/todo/$&"
    }
]);

fis.config.set("pack", {
    'sea-modules/app/admin/main.js': 'app/admin/**.js',
    'sea-modules/app/buy/main.js': 'app/buy/**.js',
    'sea-modules/app/commons/main.js': 'app/commons/**.js',
    'sea-modules/app/home/main.js': 'app/home/**.js',
    'sea-modules/app/login/main.js': 'app/login/**.js',
    'sea-modules/app/pdfviewer/main.js': 'app/pdfviewer/**.js',
    'sea-modules/app/prilogin/main.js': 'app/prilogin/**.js',
    'sea-modules/app/reg/main.js': 'app/reg/**.js',
    'sea-modules/app/share/main.js': 'app/share/**.js',
    'sea-modules/app/support/main.js': 'app/support/**.js',
    'sea-modules/app/viewer/main.js': 'app/viewer/**.js'
});

fis.config.set('livereload.hostname', '127.0.0.1');
fis.config.set('project.charset', 'utf8');
fis.config.set("version", "3.2.0");
fis.config.set("query", new Date().valueOf());
fis.config.set("seajs", {
    base: "./sea-modules/",
    isPrivate: false,
    features: {
        'personshare': false
    }
});
