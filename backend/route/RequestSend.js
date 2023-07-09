const axios=require("axios");

async function main(){
    let param= new URLSearchParams();
    param.append("id",null);
    param.append("password","");
    param.append("passwordagain","");

    await axios.post(
        "https://webscope2023-backend.onrender.com/user/updatePW",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}

async function testnewUser(){
    let param= new URLSearchParams();
    param.append("name","test2");
    param.append("email","test@gmail");

    param.append("password","test");
    param.append("passwordagain","test");

    await axios.post(
        "http://localhost:4000/user/createnewuser",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}

async function testrating(){
    let param= new URLSearchParams();
    param.append("userid",3);
    param.append("itemid",20);
    param.append("review","");
    param.append("rating",1)

    await axios.post(
        "https://webscope2023-backend.onrender.com/review/newreview",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}

async function testmark(){
    let param= new URLSearchParams();
    param.append("userid",3);
    param.append("itemid",22);
    console.log("testmark")
    await axios.post(
        "https://webscope2023-backend.onrender.com/lib/newlib",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}
async function testdel(){
    let param= new URLSearchParams();
    param.append("userid",3);
    param.append("itemid",20);
    console.log("testmarkdel")
    await axios.post(
        "https://webscope2023-backend.onrender.com/lib/del",
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}


testnewUser()

