function select1(answer1) {
    let result = 0;
    const resultarray = ['ゴールデンレトレバー', 'ラブラドール', 'トイプードル,ポメラニアン', 'チワワ,マルチーズ'];
    
    if (answer1 === 0) {
        result = 0;
    } else if (answer1 === 1) {
        result = 1;
    } else if (answer1 === 2) {
        result = 2;
    } else{
        result = 3;
    }
    const Pet_result = document.querySelector('#Pet-result');
    Pet_result.textContent = resultarray[result];
}



