# HomeWork 1
## ES6
### I. Array
1. map()  
   Phuong thuc Map() nhan 1 ham lam tham so. Va tra ve mot mang moi co chua mot hinh anh cua tung thanh phan cua mang  
   Ex:  
   const myArray = [1, 2, 3, 4, 5]  
   myArray.map(arr => arr * arr)  
   *--> Ket qua: [1, 4, 9, 16, 25]*
2. filter()  
   Phuong thcu filter() nhan 1 ham lam tham so. Ham nay thuc hien loc lan luot cac phan tu trong mang, neu thoa man dieu kien --> se cho chung vao mot mang moi.  
   Ex: const myArr = [
    {id: 1, name: "Hieu"},
    {id: 2, name: "Linh"}
   ]  
   myArr.filter(e =>e.name === "Hieu")  
   *--> Ket qua: [ { id: 1, name: 'Hieu' } ]*  
3. reduce()  
   Phuong thuc nay dung de tinh toan cac phan tu cua mang (theo thu tu tu trai sang phai).  
   Ex: const myArr = [1, 2, 3, 4]  
   myArr.reduce((total, value) => total * value)  
   *--> Ket qua = 24*  
4. some()  
   Phuong thuc nay kiem tra mang voi mot ham duoc truyen duoi dang tham so. No tra ve *true* neu co it nhat mot phan tu khop voi dieu kien va nguoc lai thi tra ve *false*.  
   Ex: const myArr = [1, 2, 3, 4]  
   myArr.some(a => a === 1)  
   *--> Ket qua: true*  
5. every()  
   Phuong thuc nay kiem tra mang voi mot ham duoc truyen vao duoi dang tham so. No tra ve *true* neu tat ca cac phan tu thoa man dieu kien va nguoc lai se tra ve *false*.  
   Ex: const myArr = [2, 4, 6, 8]  
   myArr.every(a => a % 3 == 0)  
   *--> Ket qua: false*  
6. find()  
   Phuong thuc nay mot ham lam tham so. No se tra ve phan tu dau tien trong mang thoa man dieu kien.  
   Ex: const myArr = [1, 2, 4, 6, 7]  
   myArr.find(a => a % 2 == 0)  
   *--> Ket qua: 2*  
7. findIndex()  
   Phuong thuc nay nhan mot ham lam tham so. No se tra ve vi tri cua phan tu dau tien thoa man dieu kien kiem tra, neu khong thoa man dieu kien se tra ve -1.  
   Ex: myArr = [2, 7, 9, 10, 15]  
   myArr.findIndex(a => a > 7)  
   *--> Ket qua: 2*  
8. forEach()  
   const myAwesomeArray = [
  { id: 1, name: "Hieu" },
  { id: 2, name: "Linh" },
];  
    onst newArr = myAwesomeArray.forEach((e) => console.log(e.name));  
    console.log(newArr);  
    *-->Ket qua: Hieu Linh*
### II. Spread operator (...)  
1.  
    Ex: const maxNum = Math.max(...[1, 2, 3, 4, 5]);  
    console.log(maxNum);  
    *-->Ket qua: 5*
### III. tring template (literals string) 
1. Ex: let car = 2;  
   console.log(`Toi co ${car} chiec xe`);  
   *--> Ket qua : Toi co 2 chiec xe*
### IV. Function
1. Co tat ca 6 loai function
    - Function kh??ng c?? tham s??? v?? kh??ng tr??? v??? b???t c??? gi?? tr??? g??.
    - Arrow function
    - Anonymous functions
    - Function c?? m???t tham s??? v?? tr??? v??? m???t gi?? tr??? c??? th???
    - Function c?? th??? c?? nhi???u ?????i s??? (th???c t??? c?? th??? c?? 'n' ?????i s???)
    - callback funtion
2. Destructuring
    let myArr = ["JS", "C++", "React"];  
    let [a, b, c] = myArr;  
    console.log(a, b, c)  
    *-->Ket qua: JS C++ React*
3. 
    - Promise l?? m???t c?? ch??? trong JavaScript gi??p b???n th???c thi c??c t??c v??? b???t ?????ng b??? m?? kh??ng r??i v??o callback hell hay pyramid of doom, l?? t??nh tr???ng c??c h??m callback l???ng v??o nhau ??? qu?? nhi???u t???ng
    - T???o nhanh Promise v???i Promise.resolve() v?? Promise.reject()
    - async/await l?? m???t c?? ch??? gi??p b???n th???c hi???n c??c thao t??c b???t ?????ng b??? m???t c??ch tu???n t???
4. Class?
    - class Course {
        constructor(name, price){
            this.name = name;
            this.price = price;
        }  
        show(){
            return `Day la khoa hoc ${this.name} co gia la ${this.price} $`
        }
    }  
    const jsCourse = new Course('JS', 1000)  
    console.log(jsCourse)