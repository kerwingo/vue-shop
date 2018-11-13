/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl ='';
let routerMode = 'hash';
let baseImgPath;


let accTestUrl='http://49.4.87.56:8089/gtk';// 正式环境
if (process.env.NODE_ENV == 'development') {
	baseUrl = accTestUrl;
    baseImgPath = '/img/';
}else{
	baseUrl = '';
    baseImgPath = '';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
