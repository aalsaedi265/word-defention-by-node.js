
const http=require('https')

function defination(word){

       try{ const request=http.get(
            `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=9f39fbc9-cc81-4c6a-8aed-907c136743e3`,
            (response)=>{
                let body =''
                response.on("data", (data)=>{
                    body+= data.toString()
                })
            response.on('end',()=>{
                const defination= JSON.parse(body)
                console.log(defination[0].shortdef)
            })
            }
        )
        request.on('error',(error)=> console.error(error.message))

    } catch(error) {
        console.error(error.message)
    }
}
const query = process.argv.slice(2)
query.forEach(defination)
