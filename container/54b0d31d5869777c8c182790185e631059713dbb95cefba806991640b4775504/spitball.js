const  {AutoConfig, ValidationError} = require("gregorsidea")

class Config(AutoConfig) {
  
  allowedOrigins = []

  multiPly(number=15) {
    if (number > 100) {
        throw new ValidationError('number is too big')
    }
    return number
  }
}