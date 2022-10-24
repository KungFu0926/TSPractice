console.log("Hello TS");



//類型語法
/*
*   unknow是個較安全型態的any
*   void=沒有值
*   never=永遠不會返回結果，連返回null都不會有
*   number string boolean any unknown void never object array tuple enum
*/
let a: number; //將a這個變數定義為數字
let str1: string='helo';
let c:boolean=true;
let d: "male"|"femail";//只能是這兩種字串
let e: boolean|string;
let f1: any;         //甚麼都可以，相當於對TS編譯器關閉對這個變數的類型檢測，盡量不要用!!
let f2;              //隱式的any
let g: unknown;      //其實也是可以當作所有類型，因為JS本身就有一些根本不知道是甚麼類型的變數
str1=f1;             //any 類型可以指派給任意類型
str1=g;              //unknown不可指派給其他類型
str1=g as string;    //直接告訴TS編譯器 g就是string 類型
str1=<string> g;     //效果同上

function sum(i:number,j:number){
    return i+j;
}
function mul(num1:number,num2:number): number{
    return num1*num2;
}
function div(num1:number,num2:number):void{
    num1/num2;
}
function ErrorDetect(): never{
    throw new Error('報錯');
}
