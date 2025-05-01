const Cval = document.getElementById("inputCelcius");
const Fval = document.getElementById("inputFahrenheit");
const CK = document.getElementById("carakalkulasi");
const frmdeg = document.getElementById("form-degree");
const Cfrm = document.getElementById("form-celcius");
const Ffrm = document.getElementById("form-fahreinheit");
const Deg = "celcius";


// function validateForm() {
//     console.log(Cval.value);
//     if(inputCelcius.value === ""){
//     ///placeholder notif
//     inputCelcius.placeholder = "Angka tidak boleh kosong";
//     } else {
//         KonversiButton();
//     }
// }

    //Konversi Button// 
function KonversiButton() {
    var result = 0;
    result =  (Cval.value * 9/5) + 32;
    Fval.placeholder = result;
    console.log(result); 
    CK.value= "(" + Cval.value + " * 9/5) + 32";
}

    //Reset Button//
function ResetButton() {
    result = 0;
    Fval.value = "";
    CK.value= "";
    Cval.value = "";
    console.log(Fval); 
}

    //Reverse Button//
function ReverseButton() {
    if (Deg == "celcius") {
        Deg = "fahrenheit";
        
        frmdeg.removeChild(Cfrm);
        frmdeg.removeChild(Ffrm);

        frmdeg.insertBefore(Cform);
        frmdeg.insertBefore(Fform);

        console.log (frmdeg);

    } else {
        Deg = "celcius";
       
        frmdeg.removeChild(Cform);
        frmdeg.removeChild(Fform);

        frmdeg.insertBefore(Cform);
        frmdeg.insertBefore(Fform);
    }
}




// if (Deg == true) {
//     Flbl = Clbl.value
//     Clbl = Flbl.value
//     Deg = false;
//     console.log(Flbf); 
//     console.log(Clbf); 
// } else {
//     Flbl = Clbl.value
//     Clbl = Flbl.value
//     Deg = true;
//     console.log(Flbf); 
//     console.log(Clbf); 
// }