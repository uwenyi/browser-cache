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
}
export default BrowserCache
// window.BrowserCache = BrowserCache
