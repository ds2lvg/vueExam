var webpack = require('webpack');
module.exports = {
    // entry: 처음 로드하는 파일을 지정, 진입파일은 여러 파일도 지정가능
    // 파일 경로 지정 : 여러개 진입 파일을 지정할 때는 객체형태로 지정, 한개 진입 파일일때는 문자열 
    entry: {
        main: __dirname + '/src/index.js'
    },
    // output: 번들링된 결과물의 출력 방법을 지정
    // filename: 생성하는 파일의 파일명을 지정
    // publicPath: 웹서버에서 이용될 때의 사용 경로를 지정
    output: {
        path: __dirname + '/public/dist/',
        filename: '[name].js',
        publicPath: '/dist'
    },
    // module: 프로젝트 내부에서 사용하는 다양한 모듈을 수행하는 방법을 지정
    // rule : 배열로 규칙을 추가한다
    // test : 파일명 정규식으로 지정 /\.js$/
    // loader : 주로 babel-loader 사용
    // exclud : 트랜스파일 대상에 포함시키지 않을 파일명의 정규식 패턴 지정
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    // plugins: Webpack빌드 프로세스에 사용자가 지정한 플러그인 지정(UglifyJsPlugin 등)
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    // contentBase: 웹서버 루트로 지정할 경로
    // port: 기본값 8080
    // historyApifallback: 없는 페이지 이동할때 기본페이지로 자동이동 시킬것인지 여부
    devServer: {
        contentBase: './public/',
        port: 3000,
        historyApiFallback:true
    } 
}