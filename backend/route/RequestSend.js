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


async function test(){
    let param= new URLSearchParams();
    param.append("userid",2);
    param.append("itemid",3);
    param.append("review","It's a fantasy book");
    param.append("rating",5)

    await axios.post(
        "http://localhost:4000/review/newreview",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}
test();