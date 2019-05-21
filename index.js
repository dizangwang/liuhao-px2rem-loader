module.exports = function (src) {
  var str= src.replace(/(\d+)px/g,function(a,b){
    if((+b)<=1){
      return a
    }else{
     return (b/75).toFixed(5)+"rem"
    }
   })
   return str
  }