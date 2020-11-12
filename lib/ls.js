
import { isSupportLS } from './util';
import { LocalStorage  } from 'node-localstorage'

/**
 * 
 * @param {String} moduledName 
 * @param {String} key 
 * @description 移除键值对
 */
export const remove = (moduledName, key) => {
  const localStorage = window.localStorage;

  try {
    let value = localStorage.getItem(`${moduledName}_${key}`);
    if (!value) throw `请确认localStorage中是否存在该键`;
    localStorage.removeItem(`${moduledName}_${key}`);
    
  } catch(e) {
    console.log(`移除键值对失败, moduledName = ${moduledName}, key = ${key}`, e)
  }
}


/**
 * @param { String } moduledName 存储模块
 * @param { String } key 键
 */
export const getLS = ( moduledName, key ) => {
  let localStorage = window.localStorage;
  let lsSupport = isSupportLS();
  let lsKey = null;

  try {
    if (!lsSupport) throw '请确认该浏览器是否支持localStorage';

    const keyValue = localStorage.getItem(`${moduledName}_${key}`);
    if (!keyValue) throw `请确认该键值是否存在localStorage中`;

    const { expires, value } = JSON.parse(keyValue)
    const expiresTime = expires || Date.now() + 1; // 默认永久有效

    const now = Date.now();
    if (expiresTime >= now) {
      remove(moduledName, key);
      throw `该模块键值对已过期`;
    }

    lsKey = value ? JSON.parse(value) : value;

  } catch(e) {
    console.log(`get ls key = ${key}, moduleName = ${moduledName} err`, e);
    lsKey = null;
  } finally {
    return lsKey;
  }
}

/**
 * 
 * @param { String } type 存储类型
 * @param { String } moduledName 存储模块
 * @param { String } key 键
 * @param { String } value 值
 * @param { String | Number } expires 过期时间 min
 */
export const setLS = (moduledName, key, value, expires = null) => {
  let localStorage = window.localStorage;

  try {
    const stamp = (localStorage[`${moduledName}_${key}`] || null);
    if (stamp) throw `localStorage 存在该键值对，请修改`;

    if(expires < 0) throw `过期时间需大于当前时间`;

    const keyValue = JSON.stringify(Object.assign({}, {
      value: JSON.stringify(value),
      expires: (expires ? (Date.now() + 1000 * 60 * expires) : null)
    }));

    localStorage.setItem(`${moduledName}_${key}`, keyValue)

  } catch(e) {
    console.log(`ls set err, moduledName = ${moduledName}, key = ${key}, value = ${value}`, e);
  }
}

