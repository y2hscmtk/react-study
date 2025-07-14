// 이미지는 public 경로에 넣을경우 import를 통해 불어올수 없으며, 경로를 통해 불러올수 있다. src = "/emotion1.png"
// 경로를 통해 불러온 이미지는 vite에 의한 이미지 최적화가 이루어지지 않게 됨 -> 브라우저 메모리에 캐싱되어 다시는 불러오지 않도록 최적화가 진행됨
// 따라서 다수의 이미지를 불러올때는 메모리에 올리지 않는것이 좋은 방안일 수 있다.
// 반복되는 import 는 util로 관리하는것이 나을수 있다.
import emotion1 from "./../assets/emotion1.png"
import emotion2 from "./../assets/emotion2.png"
import emotion3 from "./../assets/emotion3.png"
import emotion4 from "./../assets/emotion4.png"
import emotion5 from "./../assets/emotion5.png"

function getEmotionImage (emotionId) {
    switch(emotionId){
        case 1:
            return emotion1
        case 2:
            return emotion2
        case 3:
            return emotion3
        case 4:
            return emotion4
        case 5:
            return emotion5
        default:
            return null
    }
}

export default getEmotionImage