let namePart = prompt("Lütfen İsminizi Giriniz?")
let myName=document.querySelector("#myName")

if (namePart.length>0){
    myName.innerHTML=(namePart)
}
else{
    alert("Lütfen sayfayı yenileyip isminizi giriniz.")
} 

function time(){
    const d = new Date();
    let day = d.getDay();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    if (day == 1){
        day = "Pazartesi";
    }
    else if (day == 2){
        day = "Salı";
    }
    else if (day == 3){
        day = "Çarşamba";
    }
    else if (day == 4){
        day = "Perşembe";
    }
    else if (day == 5){
        day = "Cuma";
    }
    else if (day == 6){
        day = "Cumartesi";
    }
    else if (day == 7){
        day = "Pazar";
    }
    setTimeout(time,1000);

    myClock.innerHTML = `${hour}:${minutes}:${seconds} ${day}`;
}

time();