logd(`BeeTap 提供高扩展性，助您快速开发自动化测试脚本！`);


main();


function main() {
    if(!image.requestScreenCapture()){
        loge("申请截图权限失败")
        exit();
    }

    sleep(2000);



    跳转福利页面领取时长()
}
/**
 * @desc 函数注释
 * @overtime 函数超时时间 默认60秒
 * @author BeeTap
 * @date
 */
function 跳转福利页面领取时长 (overtime=60){
    logw("开始函数：【跳转福利页面领取时长】")
    let startTime = time()
    while ((time() - startTime) / 1000 < overtime) {

        if (findPicClickEx("领取奖励.png")>-1){
            logd("领取奖励")
            startTime=time()
        }

        else if (findSelectorClick(descMatch("领取成功.*"),false,false)){
            logd("领取成功 标识");
                clickPoint(1126,196);


        }

        else if (findSelectorClick(text("退出不看了"))){
            logd("确认退出直播间")
        }
        else if (findSelectorClick(text("更多直播"),false,false)){
            logd("在直播间，点击关闭按钮")
            findSelectorClick(id("com.luna.music:id/n").desc("关闭"))
        }
        else if (findSelectorClick(text("开心收下"),false,false)){
            logd("进到直播间 弹出券");
            findSelectorClick(id("com.luna.music.biz_live_plugin_impl:id/saas_coupon_id_cancel"))

        }
        else if (findPicClickEx("领时长.png")>-1){
            logd("领时长")
        }else if (findSelectorClick(id("com.luna.music:id/b6t").text("福利"))) {
        logd("点击福利按钮")
        }else{
            let lq=image.captureScreen(3,426, 1423, 824, 1638);

            let result1=ocr.mlkitOcr(lq);
            if (result1 && result1.text.indexOf("领取奖励")>-1){

                logd("ocr 领取奖励 标识");
                clickPoint(633,1528);
                startTime=time();
            }
            image.recycle(lq);


            let o=image.captureScreen(3,910, 136, 1082, 242);
            let result=ocr.mlkitOcr(o);
            logd(result);

            if (result && result.text.indexOf("领取成功")>-1){

                logd("ocr 领取成功 标识");
                clickPoint(1126,196);
            }
            image.recycle(o);




        }
        sleep(1000);
    }
    logw("执行函数：【跳转福利页面领取时长】 超时")
    return false;
}