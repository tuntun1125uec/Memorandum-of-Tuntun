// getElementsByClassName('name')はhtml内にあるname名前のClass
// getElementById('name')はhtml内のIDを取得
const lists = document.getElementsByClassName('contentsList');

// 取得したClassを配列にして各配列の要素に対して、イベントを定義
Array.from(lists).forEach(function(list) {
    list.addEventListener('mouseover', function() {
        //色を変える
        list.style.backgroundColor = 'orange';
        //各要素を表示する
        list.querySelector('.dropdowncontent').style.display = 'block';
    });

    list.addEventListener('mouseleave', function() {
        list.style.backgroundColor = 'aqua';
        list.querySelector('.dropdowncontent').style.display = 'none';
    });
});