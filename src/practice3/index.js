export const getPoetry = () => {
  const url = "https://v1.jinrishici.com/all.json";
  return fetch(url)
    .then(response => response.json())
    .then(data => [data.origin, data.author, data.content])
    .catch(console.log('fetch failed'))
}

export const getPoetryAsync = async () => {
  const url = "https://v1.jinrishici.com/all.json";
  try {
    const response  =  await fetch(url)
    const data = await response.json();
    return [data.origin, data.author, data.content]
  } catch {
    console.log('fetch failed')
  }
}