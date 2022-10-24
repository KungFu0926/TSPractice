//引入一個封包
const path =require('path');

//webpack中的所有配置訊息都應該寫在module.exports中
module.exports=
{
    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在目錄
    output:
    {
        //指定打包文件的目錄
        path: path.resolve(__dirname,'dist'),
        //打包後文件名
        filename:"bunble.js"
    },

    //指定webpack打包時要使用的模塊
    module:
    {
        //指定要加載的規則
        rules:
        [
            {
                //test指定的是規則生效的文件，以下是表示針對所有以.ts結尾的檔案編譯
                test:/\.ts$/,

                //要使用的loader
                use:'ts-loader',

                //要排除的文件
                exclude:/node_modules/
            }
        ]
    }
}