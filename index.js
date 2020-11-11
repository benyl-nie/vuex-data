
class vuexPersistence {
  /**
   * 
   * @param {*} moduledName 模块名称
   * @param {*} key 键
   * @param {*} value 值
   * @param {*} type 类型
   */
  constructor(moduledName, key, value, type) {
    this.moduledName = moduledName;
    this.key = key;
    this.value = value;
    this.type = type
  }

  getKey(moduledName, key, type) {

  }

  setKey({ moduledName, key, type }) {}
  

}

export default vuexPersistence;