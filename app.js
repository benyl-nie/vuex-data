
/**
 * 数据存储格式 类型 type
 * LS localStorage
 * SS sessionStorage
 * IDB indexDB
 */

import { getLS, getSS, getIDB, setLS, setSS, setIDB } from './lib/main'

class vuexPersistence {
  /**
   * 
   * @param {*} moduledName 模块名称
   * @param {*} key 键
   * @param {*} value 值
   * @param {*} type 存储类型
   */
  constructor({ moduledName, key, value, type, expired }) {
    this.moduledName = moduledName;
    this.key = key;
    this.value = value;
    this.type = type
    this.expired = expired;
  }

  getKey() {
    switch (this.type) {
      case 'LS':
        getLS(this.moduledName, this.key);
        break;
      case 'SS':
        getSS(this.type, this.moduledName, this.key);
        break;
      case 'IDB':
        getIDB(this.type, this.moduledName, this.key);
        break;
      default:
        break;
    }
  }

  setKey({ type, moduledName, key, value, expired }) {
    this.type = type;
    this.moduledName = moduledName;
    this.key = key;
    this.value = value;
    this.expired = expired;

    // console.log('this.type', this.type);
    // console.log('this.moduledName', this.moduledName);
    // console.log('this.key', this.key);
    // console.log('this.value', this.value);
    // console.log('this.expired', this.expired)
    switch (type) {
      case 'LS':
        setLS(this.moduledName, this.key, this.value, this.expired);
        break;
      case 'SS':
        setSS(type, this.moduledName, this.key, this.value);
        break;
      case 'IDB':
        setIDB(type, this.moduledName, this.key, this.value);
        break;
      default:
        break;
    }
  }
}

// const test = new vuexPersistence({});
// test.setKey({type:'LS', moduledName: 'testModuled', key: 'test', value: '123'});

// export const a = vuexPersistence;

export { vuexPersistence }
