const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

//webpack설정을 하는 곳. 이곳에서 webpack이 설정에 맞추어 돌아간다.
module.exports = {
    name: 'mine-setting',
    mode: 'development',
    devtool: 'eval',
    //entry에 들어가는 요소들의 확장자명 입력.
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    //webpack설정에 있어 입력과 출력을 담당하는 부분. 
    entry: {
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            //원하는 브라우저에 맞추어서 바꿔줄 수 있음. preset-env같은 경우 더 중요한데, 옛날 것으로 갈수록 지원하기 더 힘들어짐. 최신 문법 못쓰는 것이 옛날로 갈수록 더하기 때문에, 바벨이 옛날
                            //버전으로 갈수록 더 느려진다.
                            browsers: ['last 2 chrome versions'],
                        },
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    'react-refresh/babel',
                ],
            },
        }],
    },

    plugins: [
        new RefreshWebpackPlugin(),
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },

    devServer: {
        //프론트 개발을 위해 잠깐 두는 서버에 불과.
        devMiddleware: { publicPath: '/dist/' },
        static: { directory: path.resolve(__dirname, './지뢰찾기') },
        hot: true,
    },
};