// 导航

var nav_list = document.querySelector('.nav_list');
var lis = nav_list.querySelectorAll('li');
var items = document.querySelectorAll('.nav_item li ul');
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onmouseover = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');
        console.log(index);
        // for (var i = 0; i < items.length; i++) {
        //     items[i].style.display = 'none';
        // }
        // items[index].style.display = 'block';

    }
}

// 添加数据

var del = document.querySelectorAll('tbody a');
for (var i = 0; i < del.length; i++) {
    del[i].onclick = function () {
        var tr = this.parentNode.parentNode; //tr儿子的儿子是 ‘a’
        var songName = tr.children[0].innerHTML;
        var flag = confirm('确认删除' + songName + "吗？");
        if (flag) {
            this.parentNode.removeChild(tr);
        }
    }
    // 添加数据
    var btn = document.querySelector('button');
    btn.onclick = function () {
        // 获取输入框内容
        var song = document.getElementById('song').value;
        var singer = document.getElementById('singer').value;
        var album = document.getElementById('album').value;
        var price = document.getElementById('price').value;
        // alert(song + singer + album + price);
        // 创建tr节点,并把输入框内容放入tr中
        var tr = document.createElement('tr')
        // es6的模板字符串

        let s=`<tr><td>${song}</td><td>${singer}</td><td>${album}</td><td>${price}</td><td><a href="javascript:;">删除</a></td></tr>`
       document.querySelector('tbody').innerHTML+=s 
        // tr.innerHTML = '<td>' + song + '</td>' +
        //     '<td>' + singer + '</td>' +
        //     '<td>' + album + '</td>' +
        //     '<td>' + price + '</td>' +
        //     '<td><a href="javascript:;">删除</a></td>';
        // 给新增的删除按钮设置事件
        // 先把数据都给tbody 如何在删除
        // var tbody = document.querySelector('tbody');
        // tbody.appendChild(s);


        var delA = document.querySelectorAll('tbody a');
        for (var i = 0; i < delA.length; i++) {
            delA[i].onclick = function () {
                var tr = this.parentNode.parentNode;
                var songName = tr.children[0].innerHTML;
                var flag = confirm('确认删除' + songName + "吗？");
                if (flag) {
                    tr.parentNode.removeChild(tr);
                }
            }

        }
    };
};