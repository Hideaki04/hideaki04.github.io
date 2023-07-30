function select1(answer1) {
    let result = 0;
    const answers = ['大型犬でおとなしい', '大型犬で活発', '子型犬でおとなしい', '子型犬で活発'];
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



