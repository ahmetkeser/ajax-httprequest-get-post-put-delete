//Ajax,callback, http requests
class Request{
    constructor(){
        this.xhr = new XMLHttpRequest()
    }

    // Get Requests
    //Veri Alma
    get(url,callback){
        this.xhr.open("GET",url)    // Bağlantı açıldı

        this.xhr.onload = function(){ // bağlantı başarılı olursa burası çalışır
            if(this.xhr.status === 200){ // istenen bilgiler geldi ise status kodu 200 dener ve istenen işlem içerde yapılır
                 callback(null,this.xhr.responseText) // isteğimiz bitti
                
            }else{ // hata durumu
                callback("GET request bit hata oluştu",null)
            }
        }.bind(this)

        this.xhr.send() // isteği gönder

    }
    //Veri Gönderme
    post(url,data,callback){
        this.xhr.open("POST",url)
        this.xhr.setRequestHeader("Content-type","application/json") // göndereceğimiz veri türü belirlenir
        this.xhr.onload = () =>{ //Bağlantı başarılı ise
            if(this.xhr.status === 201){ //! get te bu kod 200 postta 201 dir
                //Başarılı
                callback(null,this.xhr.responseText)
            } else{
                // Hatalı bağlantı
                callback("POST request bir hata oluştu",null)
            }
        }
        //gönderme işlemi
        this.xhr.send(JSON.stringify(data )) // json objesini stringe çevirerek gönderiyoruz
    }
    //Veri Güncelleme
    put()
}
const request = new Request()
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){//istenen get işleminde dönecek parametreyi burada yazdırmak istersek
//                                                                     // callback bir fonksiyona ihtiyacımız oluyor
//     if(err === null){
//         //Başarılı
//         console.log(response)
//     }else{
//         //Hata
//         console.log(err)
//         }
// }) 
//! yukardaki aynı işlemi id li çağırdık  id si 21 olan objeyi getirecek                                                           
// request.get("https://jsonplaceholder.typicode.com/albums/21",function(err,response){//istenen get işleminde dönecek parametreyi burada yazdırmak istersek
//                                                                     // callback bir fonksiyona ihtiyacımız oluyor
//     if(err === null){
//         //Başarılı
//         console.log(response)
//     }else{
//         //Hata
//         console.log(err)
//         }
// }) 

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Deneme"},function(err,album){
    if(err === null){
        //başarılı
        console.log(album)
    }else{
        //Hatalı
        console.log(err)
    }

})