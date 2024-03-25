const t=(a:any){

    switch(a.type){
        case "log":
            console.log(a.msg)
        break;
        case "showPopUp":
            alert(a.message)
            break;
        case "showPopUpNumber":
            alert(a.message+" "+a.arg1)
            break;
        case "showPopUpNumber":
            alert(a.message+" "+a.arg1)
            break;
        case "sendLog":
            axios.post("server-api/log",a.logdata)
            axios2.post("server-api2/log",a.logdata2)
            break;
    }

}