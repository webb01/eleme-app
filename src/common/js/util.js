/**
 *解析url参数
 *  ？id=12345&a=b
 *  Object {id:12345,a:b}
 */
export function urlParse() {
    // let url = window.location.search;
    let url = decodeURIComponent(window.location.pathname);
    console.log(url);
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    //  [？id=12345, &a=b]
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let value = decodeURIComponent(tempArr[1]);
            obj[key] = value;
        });
    }
    return obj;
    // return { id: 123123 };
}
