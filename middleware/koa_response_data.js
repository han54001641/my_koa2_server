// 处理业务逻辑的中间件,读取某个json文件的数据
const path =require("path") //引入path模块
const fileUtils=require("../utils/file_utils")
module.exports=async (ctx,next)=>{
    //获取请求时的url
    const url= ctx.request.url // /api/seller   实际路径../data/seller.json
    let filePath=url.replace("/api","") //将路径中的/api用空字符串替换,得到/seller
    filePath="../data"+filePath+".json"
    filePath=path.join(__dirname,filePath)
    try {
        const res= await fileUtils.getFileJsonData(filePath)
        ctx.response.body=res
    } catch (error) {
        const errorMsg={
            message:"读取文件内容失败,文件资源不存在",
            status:404
        }
        ctx.response.body=JSON.stringify(errorMsg)
    }
    console.log(filePath)
    await next()

}