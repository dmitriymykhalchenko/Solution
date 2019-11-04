function solution(S, K) {
    let arrWords = S.split(' ')
    let arrLength = arrWords.map(item => {
      return item.length
    })

    let summary = 0
    let numberSms = 0

    for(let i = 0; i < arrLength.length; i++){
      if(arrLength[i] + summary > K){
        numberSms = numberSms + 1
        summary = 0
        if (arrLength[i] > K){
          return -1
        }
        summary = arrLength[i]
      }else{
        summary = summary + 1 + arrLength[i]
      }
    }
    return numberSms
}
