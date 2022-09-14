
/*************** Làm Bài Tập***************/


/*************** NGUYỄN THANH TIẾN***************/

// To Dom Id Function //
function getMyId(id) {
  return document.getElementById(id)
}

var tagKetQua = getMyId('tagKetQua');

/********************* Nav-Tab ****************/

function changeTab(event) {
  var btnTab1 = getMyId('homeWork1');
  var btnTab2 = getMyId('homeWork2');
  var btnTab3 = getMyId('homeWork3');
  var btnTab4 = getMyId('homeWork4');
  var btnTab5 = getMyId('homeWork5');

  btnTab1.classList.remove('active');
  btnTab2.classList.remove('active');
  btnTab3.classList.remove('active');
  btnTab4.classList.remove('active');
  btnTab5.classList.remove('active');

  event.target.classList.add('active');
  var dataTab = event.target.getAttribute('data-tab');
  

  var showTab1 = getMyId('Project1');
  var showTab2 = getMyId('Project2');
  var showTab3 = getMyId('Project3');
  var showTab4 = getMyId('Project4');
  var showTab5 = getMyId('Project5');

  showTab1.classList.remove('show');
  showTab2.classList.remove('show');
  showTab3.classList.remove('show');
  showTab4.classList.remove('show');
  showTab5.classList.remove('show');

  getMyId(dataTab).classList.add('show');
}

//*********** BÀI TẬP *******************************/

/*************** BÀI 1 ***********/
/**
 * Tìm số nguyên dương nhỏ nhất sao cho:
1 + 2 + … + n > 10000
 */

/**
 INPUT: N = 10000;

  PROCESS: var sum = 1+2+3+4......

  OUTPUT:
  số nguyên dương nhỏ nhất > 10000
 */

document.getElementById('btnNumber').onclick = function () {
  //input:
  var n = 10000;
  // output:
  var resultNum = 0;
 //process:
 // biến cờ lệnh:
  var sum = 0;
  
  //vòng lặp
  var i = 0;
  while (sum <= n) {
    sum += i;
    i++
  }
  resultNum = i;
  
  tagKetQua.style.display = 'block';
  tagKetQua.innerHTML = resultNum;
};

//BÀI 2: Tính Tổng S(n)

/**
 Input: lay gia tri nguoi dung nhap vao: num1; num2
Process:num2 = x + x^2 + x^3 + x^4.... + x^n

 Output: tinh tong
 */

document.getElementById('btnTinhTong').onclick = function () {
  // input
  var x = parseFloat(getMyId('num1').value);
  var n = parseFloat(getMyId('num2').value);
  // output
  var total = 0;
  // process
  for (var i = 1; i <= n; i++) {
    total += Math.pow(x, i);
  }
  var tagTotal = getMyId('tagTinhTong');
  tagTotal.style.display = 'block';
  tagTotal.innerHTML = total;
  
};




//Bai 3: nhap vao so n, Tinh gai thua so do

/**
 * input: nhap vao 1 so 
 * 
 * process:
 * tinh giai thua so n = 1*2*3*4*n
 *  
 * output: giai thua
 */

document.getElementById('btnGiaiThua').onclick = function () {
  // Input
  var iSo = parseFloat(getMyId('iSo').value);
  // output
  var giaiThua = 1;

  for (var i = 1; i <= iSo; i++) {
    giaiThua *= i;
  };
  var tagGiaiThua = getMyId('tagGiaiThua');
  tagGiaiThua.style.display = 'block';
  tagGiaiThua.innerHTML = giaiThua;
};

// BAI 4: viet chuong trinh nguoi dung nhap vao 1 so in ra the div tuong ung

/**
  input: var so the div
  
  Process: dung vong lap for in ra so the div tuong ung nguoi dung nhap vao va dung cau lenh dieu neu div so chan thi mau do div so le thi in mau xanh;

  them mau cho div bang class css; neu div chan class ="bg__red"; neu div le class = "bg__green"

  output: in the div
*/

document.getElementById('btnDiv').onclick = function () {
  // input
  var inTheDiv = parseFloat(getMyId('inTheDiv').value);
          
  
  // output
  var result = '';
  // process
  for (var i = 1; i <= inTheDiv; i++) {
    if (i % 2 === 0) { 
      
      result += '<div class="bg__red">div chan</div>';
    }else {  
      
       
      result += '<div class="bg__green">div le</div>';      
    }
  }
   
  var inThe = getMyId('inTheDiv1');
  inThe.innerHTML = result;
};

//  BÀI TẬP 5: in số nguyên tố;

/*Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input

input: người dùng nhập vào 1 số: number

process: dùng vòng lặp fo chạy kiểm tra từ số 1 tới số n người dùng nhập vào xem số nào là số nguyên tố; dùng câu lệnh điều kiện để in ra nếu số đó là số nguyên tố;

output: in số nguyen tố : tring;

 */

document.getElementById('checkSNT').addEventListener('click',function () {
  // input:
  var iSoNT = Number(getMyId('soNguyenTo').value);
  
  // output: 
  var inSoNT = '';

  
  // process:
  for (var ace = 2; ace <= iSoNT; ace++) {
    // cờ hiệu, biến tạm:
    var checkSNT = true;
    // vòng lặp kiểm tra số nguyên tố
    for (var i = 2; i <= Math.sqrt(ace); i++) {
      if (ace % i === 0) {
        checkSNT = false;
        break;
      }
    }
    if (checkSNT ) {
      inSoNT += ace + ', ' ; 
    }    
  }
  // dom kết quả ra giao diện:

  var domSNT1 = getMyId('soNT1');
  domSNT1.style.display = 'block';
  domSNT1.innerHTML = 'các số nguyên tố từ 1 đến ' + iSoNT + ': ' +inSoNT;
});

