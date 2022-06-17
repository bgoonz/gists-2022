class Redirects {
  constructor() {
    this.map = new Map()
    this.regexes = new Map()
  }
  load(file) {
    // Loop over 'file' and either put things into this.map.set()
    // or push to this.regexes.set()
    ...
  }
  
  has(uri) {
    if (this.map.has(uri)) return true;
    for (const regex of this.regexes.keys()) {
      if (regex.test(uri)) return true;
    }
    return false;
  }
  
  get(uri) {
    if (this.map.has(uri)) return this.map.get(uri)
    for (const [regex, destination] of this.regexes) {
      for (const match of regex.matchAll(uri)) {
        return destination.replace('$1', match)
      }
    }
    return undefined
  }
}