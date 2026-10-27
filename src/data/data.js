let books=[
    {
        name:"معماری کامپیوتر",
        price:370000,
        author:"دکتر قدرت سپیدنام",
        description:"کتاب ارشد مجموعه مهندسی",
        img:"",
        id:"01"
    },
    
    {
        name:"هوش تجاری ",
        price:310000,
        author:"دکتر حسین مهاجری ",
        description:"نشر علوم رایانه",
        img:"",
        id:"03"
    },
    {
        name:"اصول و مفاهیم پایه کامپیوتر",
        price:150000,
        author:"دکتر سعید احسانی",
        description:"دانشگاه خواجه نصیرالدین طوسی",
        img:"",
        id:"04"
    },
    {
        name: "مبانی کامپیوتر و الگوریتم ها",
        price:125000,
        author:"دکتر ناصر نعمت بخش ",
        description:"نشر علوم رایانه",
        img:"",
        id:"05"
    },
];

export const getbooks=()=>{
    return books
}
 export const getbook=(id)=>{
    return books.find(book=>book.id==id)
 }