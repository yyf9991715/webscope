const axios=require("axios");

async function main(){
    let param= new URLSearchParams();
    param.append("id",null);
    param.append("password","");
    param.append("passwordagain","");

    await axios.post(
        "http://localhost:4000/user/updatePW",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}
main();