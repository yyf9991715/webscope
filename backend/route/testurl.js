const axios=require("axios");

async function main(){
    let param= new URLSearchParams();
    param.append("id","2");
    param.append("newname","liu");
    await axios.post(
        "http://localhost:4000/user/updateName",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}
main();