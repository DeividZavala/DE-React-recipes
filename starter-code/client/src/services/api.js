const baseUrl = 'http://localhost:3000/api/dishes/'

export function getItems(){
  return fetch(baseUrl)
  .then(res=>{
    if(!res.ok)return Promise.reject(res.statusText)
    return res.json()
  })
  .then(items=>{
    return items;
  })
}

export function getSingleItem(id){
  console.log(baseUrl + id)
  return fetch(baseUrl + id)
  .then(res=>{
    if(!res.ok)return Promise.reject(res.statusText)
    return res.json()
  })
  .then(items=>{
    return items;
  })
}

