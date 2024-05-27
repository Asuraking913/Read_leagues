const sdf = [
  {
    a: 3, 
    b: 4
  }
]

const sdsf = () => {return sdf.map(r => {r.b = 5})}
const c = sdsf()
console.log(c)