var arrResult = [];
var arrDemSoNguyen = [];

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
    var minNum = myArray.reduce((a, b) => {
        return Math.min(a, b);
    });
    document.getElementById('minNum').innerHTML = minNum;
}

// Tim so duong nho nhat

document.getElementById('txtSoDuongNhoNhat').onclick = function(){
    var soDuongNhoNhat = 0;
    for (var i = 0; i < arrResult.length; i++) {
        var e = arrResult[i];
        if(e > 0 && e < soDuongNhoNhat) {
            soDuongNhoNhat = e;
        }
    }
    document.getElementById('soDuongNhoNhat').innerHTML =  soDuongNhoNhat;
}


// Tim so chan cuoi cung

document.getElementById('txtSoChanCuoiCung').onclick = function(){
    var soChanCuoiCung = 0;
    for (var i = arrResult.length; i > 0 ; i--) {
        var e = arrResult[i];
        if(e % 2 == 0) {
            soChanCuoiCung = e;
            break;
        }
    }
    document.getElementById('soChanCuoiCung').innerHTML =  soChanCuoiCung;
}

// Doi cho 

document.getElementById('btnDoiCho').onclick = function(){
    var index1 = document.getElementById("nhapSo1").value * 1;
    var index2 = document.getElementById("nhapSo2").value * 1;
    var arrDoiCho = arrResult.slice();
    arrDoiCho[index1] ^= arrDoiCho[index2];
    arrDoiCho[index2] ^= arrDoiCho[index1];
    arrDoiCho[index1] ^= arrDoiCho[index2];
    document.getElementById('doiCho').innerHTML =  arrDoiCho;
}

// Sap xep tang dan

document.getElementById('btnSapXep').onclick = function(){
    var arrTangDan = arrResult.slice();
    arrTangDan.sort(function(a, b){
        return a - b;
    });
    document.getElementById('sapXepTangDan').innerHTML =  arrTangDan;
}

// Tim so nguyen dau tien

document.getElementById('btnTimSoNguyenTo').onclick = function(){
    var soNguyenToDauTien = 0;
    for(var i = 1; i < arrResult.length; i++ ) {
        const e = arrResult[i];
        if(e < 2) {
            continue;
        } else if(e != 2 && e % 2 == 0) {
            continue;
        } else {
            for (let j = 2; j <= Math.sqrt(e); j++) {
                if(e % j == 0) {
                    continue;
                }
            }
        }
        soNguyenToDauTien = e;
        break;
    } 
    document.getElementById('timSoNguyenTo').innerHTML =  soNguyenToDauTien == 0 ? "Khong co so nguyen to" : soNguyenToDauTien;
}

// Dem so nguyen

document.getElementById("btnThemSo").onclick = function(){
    var nhapSo = document.getElementById("nhapSoDemSoNguyen").value * 1;
    console.warn(nhapSo)
    arrDemSoNguyen.push(nhapSo);
    document.getElementById('demSoNguyen').innerHTML =  arrDemSoNguyen;
}

document.getElementById('txtDemSoNguyen').onclick = function(){
    var demSoNguyen = 0;
    for (var i = 0; i < arrDemSoNguyen.length; i++) {
        var e = arrDemSoNguyen[i];
        if(Number.isInteger(e)) {
           demSoNguyen++;
        }
    }
    document.getElementById('demSoNguyen2').innerHTML =  demSoNguyen;
}

//So sanh so luong am duong 

document.getElementById('txtSoSanh').onclick = function(){
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < arrResult.length; i++) {
        arrResult[i] > 0 ? soDuong++ : soAm++
    }
    var ketQua = "";
    if(soAm == soDuong) {
        ketQua = "So am = So duong";
    } else if( soAm > soDuong) {
        ketQua = "So am > So duong";
    } else {
        ketQua = "So am < So duong";
    }
    document.getElementById('soSanhAmDuong').innerHTML =  ketQua;
}

