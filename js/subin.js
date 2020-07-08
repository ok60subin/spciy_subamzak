 function resizeBar() {
     var big = document.getElementById('big_bar');
     var body = document.getElementById('contents');
     var h = body.offsetHeight;
     big.style.height = h + "px";
 }

 function hideMenu() {
     alert("아무것도 다운할 수 없당!");
     return false;
 }
 document.oncontextmenu = hideMenu;

 function setOnlyID(id) {
     object = document.getElementById(id);
     var all = document.getElementsByTagName('section')
     for (var i = 0; i < all.length; i++)
         all[i].style.display = 'none';
     object.style.display = 'block';
     resizeBar();
 }

 function setOnlyClass(cls) {
     objects = document.getElementsByClassName(cls);
     var all = document.getElementsByTagName('section')
     for (var i = 0; i < all.length; i++)
         all[i].style.display = 'none';
     for (var i = 0; i < objects.length; i++)
         objects[i].style.display = 'block';
     resizeBar();
 }

 function openOne() {
     var all = document.getElementsByTagName("details");
     for (var i = 0; i < all.length; i++) {
         all[i].open = false;
     }
 }
 var files = ["img/spider.jpg", "img/hi.jpg", "img/mw.jpg"];
 var imgs = new Array();
 var file_i = 0;
 for (var i = 0; i < files.length; i++) {
     imgs[i] = new Image();
     imgs[i].src = files[i];
 }

 function changeImg() {
     var img = document.getElementById('bigdoor');
     img.src = imgs[file_i].src;
     if (++file_i > files.length - 1) file_i = 0;
 }

 function loadHome() {
    setOnlyClass('homes');
    setInterval('changeImg()', 1000);
 }