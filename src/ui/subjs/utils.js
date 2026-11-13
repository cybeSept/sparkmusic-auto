
/*
 * subjs 示例 —— 自动加载,供 ui.js 直接调用
 * ------------------------------------------------------------
 * 约定:ui/subjs/ 下的所有 *.js 会在面板启动时(在 ui.js 之前)自动加载,
 *      顶层用 function 声明的函数会成为「全局函数」—— ui.js 里无需 require,直接按名调用。
 *
 * 用法(在同目录 ../ui.js 里):
 *     ui.btn_save.click(function () {
 *         var msg = validateForm(ui.et_card_no.text, ui.et_name.text);
 *         if (msg) { ui.toast(msg); return; }
 *         ui.toast("保存成功 " + nowText());
 *     });
 *
 * 说明:
 *  - 仅「面板」(ui)自动加载;后台自动化脚本(js)不加载 —— 那边如需复用请自行 require。
 *  - 多个 subjs 文件按文件名排序依次加载;顶层不要给未声明变量赋值(严格模式会报错)。
 *  - 面板启动日志会打印「已自动加载 subjs:N 个」,调试时 sourceURL 为 subjs/<文件名>。
 */

// 简单表单校验:返回错误提示字符串;通过校验返回空串。
function validateForm(cardNo, name) {
    if (!cardNo || !String(cardNo).trim()) { return "请输入卡密"; }
    if (!name || !String(name).trim()) { return "请输入姓名"; }
    return "";
}

// 当前时间文本(yyyy-MM-dd HH:mm:ss)。
function nowText() {
    var d = new Date();
    function p(n) { return (n < 10 ? "0" : "") + n; }
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate())
        + " " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
}

// 性别文本(配合 main.xml 里的 rb_male / rb_female)。
function sexText(isMale) {
    return isMale ? "男" : "女";
}
