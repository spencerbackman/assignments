function stringifyUrl(url, query) {
  let queryStr = "?";
  for(let key in query) {
    queryStr += key + '=' + query[key] + '&';
  }
  return url + queryStr.slice(0, -1);
}

function deStringifyUrl(url) {
  const queryIndex = url.indexOf('?');
  const queryStr = url.slice(queryIndex + 1)
  const queryArr = queryStr.split('&')
  const queryObj = {}
  for(let property of queryArr) {
    let keyValueArr = property.split('=')
    queryObj[keyValueArr[0]] = keyValueArr[1]
  }
  return queryObj
} 

const url = "http://localhost:8080/monkeys"
const query = {
  color: "black",
  species: "howler"
}

console.log(stringifyUrl(url, query))
