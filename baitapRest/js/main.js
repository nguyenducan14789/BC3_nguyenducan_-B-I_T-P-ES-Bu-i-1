let tinhDiemTB = (...restParam) => {
   let diemTB = 0;
   let tongDiem = 0
   for (let i = 0; i < restParam.length; i++) {
      tongDiem += restParam[i];
   }
   // console.log(first)
   diemTB = tongDiem/restParam.length;

   console.log(diemTB);
   return diemTB
}

tinhDiemTB(1, 2);
tinhDiemTB(1, 2,3);
let tinhDiemTB1 = () => {
   
   let toan = + document.querySelector("#inpToan").value;
   let ly = + document.querySelector("#inpLy").value;
   let hoa = + document.querySelector("#inpHoa").value;

   tinhDiemTB(toan, ly, hoa);

   document.querySelector("#tbKhoi1").innerHTML = tinhDiemTB(toan, ly, hoa);
}

let tinhDiemTB2 = () => {
   
   let van = + document.querySelector("#inpVan").value;
   let su = + document.querySelector("#inpSu").value;
   let dia = + document.querySelector("#inpDia").value;
   let anh = + document.querySelector("#inpEnglish").value;

   

   document.querySelector("#tbKhoi2").innerHTML = tinhDiemTB(van, su, dia, anh);
}

