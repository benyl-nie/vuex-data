/**
 * @description 判断当前浏览器是否支持localstorage
 */
export const isSupportLS = () => {
  let is_localstorage = false;
  const ua = navigator.userAgent.toLocaleLowerCase();
  if (window.localStorage) is_localstorage = true;
  
  const uaArr = ['chrome', 
                 'mqqbrowser', 
                 'qq', 
                 'tbs', 
                 'wxwork', 
                 'micromessenger', 
                 't7', 
                 'baiduboxapp', 
                 'miuibrowser', 
                 'nettype', 
                 'opr'];
  
  for (let i = 0; i < uaArr.length; i++) {
    if(ua.indexOf(uaArr[i]) > -1) {
      is_localstorage = true;
      break;
    }
  }
  
  return is_localstorage;
}