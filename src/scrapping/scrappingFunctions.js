 const scrappingData = async(url) => {
    const response = await fetch(url,{
      
    })
    const text = await response.text()
    return text
}

module.exports = {
    scrappingData
}