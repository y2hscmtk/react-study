// 다른 파일에 데이터를 뒀다가 가져올 수 있음
let data = [
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
] 

// 다른 파일에서 가져다 쓰게 하기 위해서 export 해줘야함
export default data; // 변수 data를 export