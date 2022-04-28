class BrowserCache {
  constructor() {
    this.list = {}
  }
  set(key,value){
    this.list[key] = value
  }
  get(key){
    return this.list[key]
  }
  clearAll(){
    this.list = {}
  }
  clear(key){
    delete this.list[key]
  }
}
export default BrowserCache
// window.BrowserCache = BrowserCache
