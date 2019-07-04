require('../css/style.css');

(function(){
    console.log("Hello")
    document.write('222')
    document.write('333')
    document.write('444')
})();

setTimeout(()=>{
    console.log("settimeout")
},1000)

// import from helo
// Hello()


if (process.env.NODE_ENV !== 'production') {
   console.log('development mode!');
}else{
    console.log('production mode!');
}
