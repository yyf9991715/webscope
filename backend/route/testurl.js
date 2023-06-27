const axios=require("axios");

async function main(){
    let param= new URLSearchParams();
    param.append("name","yao");
    param.append("password","test");
    axios.post(
        "http://localhost:4000/user/auth",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}
main();