const {ImageKit} =require('@imagekit/nodejs')

const client = new ImageKit({
  privateKey: "private_It5JuDjjXv3sz7qKcaWhPcISurg=" // This is the default and can be omitted
});

async function uploadFile(buffer){
  
  console.log(buffer)   
  const result = await client.files.upload(
    {      
    
      file:buffer.toString("base64"),
      fileName:"image.jpg"
    }
  )
  return result
}

module.exports = uploadFile