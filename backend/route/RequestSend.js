const axios=require("axios");
const dotenv=require("dotenv");
dotenv.config();


async function main(){
    let param= new URLSearchParams();
    param.append("id",null);
    param.append("password","");
    param.append("passwordagain","");

    await axios.post(
        `${process.env.REACT_APP_backendaddress}/user/updatePW`,
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
        `${process.env.REACT_APP_backendaddress}/user/createnewuser`,
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
        `${process.env.REACT_APP_backendaddress}/review/newreview`,
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
        `${process.env.REACT_APP_backendaddress}/lib/newlib`,
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
        `${process.env.REACT_APP_backendaddress}/lib/del`,
        param,
        {
            'Content-Type' :'application/x-www-form-urlencoded',
        }
    ).then(function(resb){
        console.log(resb.data)
    });
    
}


testnewUser()

