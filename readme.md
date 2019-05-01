# QUICK START
npm i && npm run server

# React-Router-Dom
[官方文件](https://reacttraining.com/react-router/web/guides/quick-start)  
yarn.npm install react-router-dom  

<pre>
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";  

路由寫法
<Link to="/about">about</Link>
<Link to="/contact">contact</Link>
<Link to="/home">home</Link>

路由方式
<Router>
<div>
    <Navbar />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/home" component={Home} />
</div>
</Router>
</pre>

# WEBPACK & BABEL
需要建立 webpack.config.js
<pre>
    entry: './app/index.js',    //要bundle的js檔  
    output: {                   //輸出的目的地資料夾和檔名
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },

    module: {
        rules: [                //.js都透過babel轉譯 ES6+ -> ES5 
                                //.css 先css-loader載入css 再style-loader解析css語法
                                //loader是由後面開始呼叫 所以先css-loader -> style-loader
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.(css)$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',        //bundle模式
<pre>
就能在app/index.js import其他js檔 或 require其他css檔  
最後輸出到 dist/index_bundle.js  

其他loader ex. sass less \.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)
或參考 [官方文件](https://webpack.js.org/concepts)  
之後補充 Webpack 4版後的config寫法  

# BUG專區

## 安裝不完全
node_modules砍掉重練，或者專案重新clone  

## 版本號不對
專案用的 Webpack為4版 Babel為7版  
請直接服用 package.json 並直接 npm install  
3版 => 4版 官方號稱加速90%  
但直接把3版直接升級成4版一定會報錯  

