class Passwaord{
    constructor(){
        this.symbols = "!@#$/*+|~'\".,";
        this.arr = [this.lowerChar(),this.upperChar(),this.symbol(),this.number()]
    }
    
    lowerChar (){
        return  String.fromCharCode(Math.floor(Math.random()*26)+97);
    }

    upperChar (){
        return String.fromCharCode(Math.floor(Math.random()*26)+65);;
    }

    symbol (){
        return this.symbols[Math.floor(Math.random()*this.symbols.length)];;
    }

    number (){
        return Math.floor(Math.random()*10);
    }

    generateStrogPassword(){
        let pass = "";
        pass += this.lowerChar ();
        pass += this.upperChar ();
        pass += this.symbol ();
        pass += this.number();
        for(let i =0 ;i < 4;i++){
            pass += this.arr[Math.floor(Math.random()*this.arr.length)]
        }
        pass =  Array.from(pass).sort(()=>Math.random() - 0.5).join("");
        console.log("strog password ",pass);
        return pass;
    }

    generateSuperStrogPassword(){
        let pass = "";
        pass += this.lowerChar ();
        pass += this.upperChar ();
        pass += this.symbol ();
        pass += this.number();
        for(let i =0 ;i < 8;i++){
            pass += this.arr[Math.floor(Math.random()*this.arr.length)]
        }
        pass =  Array.from(pass).sort(()=>Math.random() - 0.5).join("");
        console.log("super strog password ",pass);
        return pass;
    }

    generateNormalPassword(){
        let pass = "";
        pass += this.lowerChar ();
        pass += this.upperChar ();
        pass += this.symbol ();
        pass += this.number();
        for(let i =0 ;i < 2;i++){
            pass += this.arr[Math.floor(Math.random()*this.arr.length)]
        }
        pass =  Array.from(pass).sort(()=>Math.random() - 0.5).join("");
        console.log("Normal password ",pass);
        return pass;
    }
}

let normal_password = document.querySelector("#normal_password");
let strog_password = document.querySelector("#strong_password");
let super_strog_password = document.querySelector("#super_strong_password");
let result = document.querySelector("#result");

let pass = new Passwaord();

normal_password.addEventListener("click",()=>{
    normal_password.classList.add("btn_click");
    setTimeout(() => {
        normal_password.classList.remove("btn_click");
    }, 300);
    result.innerHTML = pass.generateNormalPassword()
})

strog_password.addEventListener("click",()=>{
    strog_password.classList.add("btn_click");
    setTimeout(() => {
        strog_password.classList.remove("btn_click");
    }, 300);
    result.innerHTML = pass.generateStrogPassword();
})

super_strog_password.addEventListener("click",()=>{
    super_strog_password.classList.add("btn_click");
    setTimeout(() => {
        super_strog_password.classList.remove("btn_click");
    }, 300);
    result.innerHTML = pass.generateSuperStrogPassword();
})
result.addEventListener("click",()=>{
    let currentpass = result.innerHTML;
    navigator.clipboard.writeText(currentpass).then(()=>{
        result.innerHTML = "Copied!..";
        setTimeout(()=>{
            result.innerHTML = currentpass;
        },1000)
    }).catch(()=>{
        result.innerHTML = "Fail to copied!...";
    })
})