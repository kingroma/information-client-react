/* 
ECMAScript6 를 컴파일해주고 개발서버를 열어주는 webpack의 설정파일 
webpack의 역할은, entry 부터 시작하여 필요한 모듈들을 다 불러온 후, 한 파일로 합쳐 bundle.js 에 저장합니다.
추가적으로는, 모듈을 통하여 ES6 문법으로 작성된 코드를 ES5 형태로 변환도 해줍니다.
개발 서버의 포트는 7777로 설정되었습니다.
개발 서버는 파일이 변동 될 때마다 다시 컴파일하고, 연결되어있는 브라우저를 새로고침해주는 기능을 가지고 있습니다.
*/ 

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },
    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
};