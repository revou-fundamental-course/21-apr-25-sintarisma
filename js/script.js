var cVal = document.getElementById("inputCelcius");
var fVal = document.getElementById("inputFahrenheit");
var frmdeg = document.getElementById("form-degree");
var cFrm = document.getElementById("form-celcius");
var fFrm = document.getElementById("form-fahreinheit");
var frmKalkulasi = document.getElementById("form-kalkulasi");
var btnAction = document.getElementById("form-action");
var carakalkulasi = document.getElementById("carakalkulasi") ;
var Deg = "celcius";


    //Konversi Button// 
function KonversiButton() {
    
    if (Deg == "celcius"){
        if (cVal.value === ""){
            alert ("masukkan angka!");
        } else{
            var result = 0;
            result =  (cVal.value * 9/5) + 32;
            fVal.value = result;
            carakalkulasi.value= "(" + cVal.value + " * 9/5) + 32";
        }
    } else {
        if (fVal.value === ""){
            alert ("masukkan angka!");
        } else {
            var result = 0;
            result =  (fVal.value - 32) * 5/9;
            cVal.value = result;
            carakalkulasi.value= "(" + fVal.value + " -32 ) * 5/9";
        }
    }
}

    //Reset Button//
function ResetButton() {
    result = 0;
    fVal.value = "";
    carakalkulasi.value= "";
    cVal.value = ""; 
}

    //Reverse Button//
function ReverseButton() {
    if (Deg == "celcius") {
        Deg = "fahrenheit";
        
        cVal.disabled = true;
        fVal.disabled = false;

        frmdeg.removeChild(cFrm);
        frmdeg.removeChild(fFrm);

        frmdeg.insertBefore(fFrm, btnAction);
        frmdeg.insertBefore(cFrm, frmKalkulasi);

    } else {
        Deg = "celcius";
       
        cVal.disabled = false;
        fVal.disabled = true;

        frmdeg.removeChild(cFrm);
        frmdeg.removeChild(fFrm);

        frmdeg.insertBefore(cFrm, btnAction);
        frmdeg.insertBefore(fFrm, frmKalkulasi);
    }
}

