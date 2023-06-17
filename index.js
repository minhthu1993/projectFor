var arrResult = [];
var arrCountInteger = [];

document.getElementById("btnAddNum").onclick = function(){
    var inputNum = document.getElementById("inputNum").value * 1;
    arrResult.push(inputNum);
    document.getElementById('showDisplay').innerHTML =  arrResult;
}


// Tong so duong

document.getElementById('btnSum').onclick = function(){
    var sumElmArr = 0;
    arrResult.forEach(element => {
        sumElmArr += element
    });
    document.getElementById('sumNum').innerHTML =  sumElmArr;
}

// Dem so duong

document.getElementById('btnCountNum').onclick = function(){
    var countNum = 0;
    arrResult.forEach(element => {
        if(element > 0) {
            countNum++
        }
    });
    document.getElementById('countPositiveNum').innerHTML =  countNum;
}

// Tim so nho nhat

document.getElementById('btnFindMinNum').onclick = function(){
    var minNum = arrResult.reduce((a, b) => {
        return Math.min(a, b);
    });
    document.getElementById('minNum').innerHTML = minNum;
}

// Tim so duong nho nhat

document.getElementById('btnFindPositiveMin').onclick = function(){
    var minPositive = null;
    arrResult.forEach(elm => {
        if(elm > 0 && (minPositive == null || elm < minPositive)) {
            minPositive = elm
        }
    })
    document.getElementById('minPositive').innerHTML =  minPositive;
}

// Tim so chan cuoi cung

document.getElementById('btnFindFinalPositive').onclick = function(){
    var finalPositive = 0;
    console.warn(arrResult.length, arrResult)
    for (var i = arrResult.length - 1; i > 0 ; i--) {
        var e = arrResult[i];
        if(e % 2 == 0) {
            finalPositive = e;
            break;
        }
    }
    document.getElementById('finalPositive').innerHTML = finalPositive;
}

// Doi cho 

document.getElementById('btnChangeIndex').onclick = function(){
    var index1 = document.getElementById("inputIndex1").value * 1;
    var index2 = document.getElementById("inputIndex2").value * 1;
    var arrDoiCho = arrResult.slice();
    var checkIndex1 = index1 >= 0 && index1 < arrDoiCho.length;
    var checkIndex2 = index2 >= 0 && index2 < arrDoiCho.length;
    if(checkIndex1 && checkIndex2) {
        arrDoiCho[index1] ^= arrDoiCho[index2];
        arrDoiCho[index2] ^= arrDoiCho[index1];
        arrDoiCho[index1] ^= arrDoiCho[index2];
    } else {
        arrDoiCho = ["Mot trong hai index da sai"];
    }
    document.getElementById('changeIndex').innerHTML =  arrDoiCho;
}

// Sap xep tang dan

document.getElementById('btnSortMinToMax').onclick = function(){
    var arrTangDan = arrResult.slice();
    arrTangDan.sort(function(a, b){
        return a - b;
    });
    document.getElementById('sortMinToMax').innerHTML =  arrTangDan;
}

// Tim so nguyen dau tien

document.getElementById('btnFindPrimeNum').onclick = function(){
    var firstPrimeNum = "Khong co so nguyen to";
    var firstPrimeNum = arrResult.find((num) => {
        if (num < 2 || (num != 2 && num % 2 == 0)) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
    document.getElementById('findFirstPrimeNum').innerHTML = firstPrimeNum;
}

// Dem so nguyen

document.getElementById("btnAddInteger").onclick = function(){
    var num = document.getElementById("inputArrNum").value * 1;
    arrCountInteger.push(num);
    document.getElementById('addArrCountInteger').innerHTML =  arrCountInteger;
}

document.getElementById('btnCountInteger').onclick = function(){
    var countInteger = 0;
    arrCountInteger.forEach(element => {
        if(Number.isInteger(element)) countInteger++;
    });
    document.getElementById('countInteger').innerHTML =  countInteger;
}

//So sanh so luong am duong 

document.getElementById('btnCompare').onclick = function(){
    var countPositiveNum = 0;
    var countNegativeNum = 0;
    arrResult.forEach(element => {
        if(element != 0){
            element > 0 ? countPositiveNum++ : countNegativeNum++;
        }
    });
    
    ketQua = countPositiveNum == countNegativeNum ? "So am = So duong" : countPositiveNum > countNegativeNum ? "So am < So duong" : "So am > So duong";
    document.getElementById('compareNum').innerHTML = ketQua;
}

