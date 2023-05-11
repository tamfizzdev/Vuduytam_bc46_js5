
// bài 1
        function area(a){
    
            var Area = document.getElementById("khuvuc").value
            if (Area=="A"){
                a=a+2;
            }
            else if (Area=="B"){
                a=a+1;
            }
            else if(Area=="C")
            {
                a=a+0.5;
            }
            else{
                a=a+0;
            }
            console.log("khuvuc" ,a) 

            console.log("*",Area)
            return a;
        }
        function oj(a){
            var Oject = document.getElementById("doituong").value;
                        
            if (Oject=="1"){
                a=a+2.5;
            }
            else if (Oject=="2"){
                a=a+1.5;
            }
            else if(Oject=="3")
            {
                a=a+1;
            }
            else{
                a=a+0;
            }
            return a;
        }
        
        // ham chinh
        function point(){
            var point1 = document.getElementById("diemso1").value*1
            var point2 = document.getElementById("diemso2").value*1
            var point3 = document.getElementById("diemso3").value*1
            var dpoint = document.getElementById("diemchuan")
            var tongdiem= point1+point2+point3; 
        
           
            tongdiem = area(tongdiem);
            
            tongdiem = oj(tongdiem); 
          
            if(tongdiem < dpoint) {
                document.getElementById("baitap1").innerText=" Bạn đã rớt do không đạt điểm chuẩn";
            }
            else if (point1 == 0 || point2 == 0 || point3 == 0){
                document.getElementById("baitap1").innerText=" Bạn đã rớt do có điếm bằng 0";
            }
            else{
                document.getElementById("baitap1").innerText=`Bạn đậu. Tổng điểm ${tongdiem}`
            }
            
        }
        

// bài 2: Tính tiền điện
function Money(){
    var nameinput= document.getElementById("Name2").value;
    var kwinput = document.getElementById("Number2").value*1;
    var a=500, b=650, c=850, d=1100, e=1300;
    var total=0;
    if (kwinput <= 50){
        total =500*kwinput;
    }
    else if ( kwinput <= 100){
        total=a*50 + b*((kwinput-50));//500*50 650*(51-50)
    }
    else if ( kwinput <= 200){
        total=a*50 + b*50 +c*((kwinput-100)); //500*50 +650*50 + 850*1
    }
    else if ( kwinput <= 350){
        total=a*50 + b*50 + c*100 +d*((kwinput-200));
    }
    else{
        total=a*50 + b*50 + c*100 +d*150 +e*((kwinput-350));
    }
    document.getElementById("baitap2").innerText=`Họ tên: ${nameinput}; Tiền điện: ${total}đ`;
    console.log(nameinput, total);
    var f=a*(c-b);
    
}
// bài 3: Thuế thu nhập cá nhân
function Money1(){
    var nameinput= document.getElementById("Name3").value;
    var incomeinput = document.getElementById("Number3").value*1;
    var Familynumber = document.getElementById("Fnumber").value*1;
    var total = incomeinput - 4e+6 - Familynumber*(1.6e+6);
    var tax=0;
    if( incomeinput <= 60e+6){
        tax= total*0.05;
    }
    else if( incomeinput <= 120e+6){
        tax= total*0.01;
    }
    else if( incomeinput <= 210e+6){
        tax= total*0.015;
    }
    else if( incomeinput <= 384e+6){
        tax= total*0.02;
    }
    else if( incomeinput <= 624e+6){
        tax= total*0.025;
    }
    else if( incomeinput <= 960e+6){
        tax= total*0.03;
    }
    else if( incomeinput > 960e+6){
        tax= total*0.035;
    }
    document.getElementById("baitap3").innerText=`Họ tên: ${nameinput}; Tiền thuế thu nhập các nhân: ${tax}đ`;
}

//bài 4: Tính tiền cap
function Money2(){
    var TypeG = document.getElementById("mySelect").value;
    var CodeG = document.getElementById("Number4").value;
    var Knb = document.getElementById("Knumber").value*1;
    var Cnb = document.getElementById("Cnumber").value*1;
    var total=0;
    if(TypeG=="Nhà Dân"){
        total= 4.5 + 20.5 + 7.5*Knb;
    }
    else{
        if(Cnb<= 10){
            total= 15 + 75 + 50*Knb;
        }
        else{
            total= 15 + 75 + 50*Knb + 5*(Cnb-10) ;
        }
    }
    document.getElementById("baitap4").innerText=`Họ tên: ${CodeG}; Tiền thuế thu nhập các nhân: ${total}$`;
}