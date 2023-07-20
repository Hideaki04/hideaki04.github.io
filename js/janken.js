function janken(myhand)
{
    //じゃんけんの手を格納する（配列）の用意
    let handArray =['グー','チョキ','パー'];
    // じゃんけんの勝敗を格納する（配列）の用意
    let resultarray = ['アイコです','あなたの負けです','あなたの勝ちです'];
    // プレイヤーの手の決定
    // 　HTML側から引数として渡される
    console.log('プレイヤーの手は:'+handArray[myhand]);
    // コンピューターの手の決定
    // 　ランダムに手を決める
    // 　Math.randomは、0以上1未満の疑似乱数分布から１つ値を取得する
    let rand = Math.random()*100;
    console.log(rand);
    // 整数化
    let randInt = Math.floor(rand);
    console.log(randInt)
    // 生成したランダムな値を３で割った余りを
    let computerHand = randInt %3;
    console.log('コンピュータの手は:'+handArray[computerHand]);
    // 勝敗判定
    //  if文
    // 勝敗を入れる変数を用意
    let result = 0;

    if(myhand ===0)
    {
        if(computerHand === 0)
        {
            result = 0;
        }
        else if (computerHand === 1)
        {
            result = 1;
        }
        else if(computerHand ===2)
        {
            result = 2;
        }
    }
    else if(myhand ===1)
    {
        if(computerHand === 0)
        {
            result = 1;
        }
        else if (computerHand === 1)
        {
            result = 0;
        }
        else if(computerHand ===2)
        {
            result = 2;
        }
    }
    else if(myhand ===2)
    {
        if(computerHand === 0)
        {
            result = 2;
        }
        else if (computerHand === 1)
        {
            result = 1;
        }
        else if(computerHand ===2)
        {
            result = 0;
        }
    }
    
    //   if文を書かなくてもじゃんけんの勝敗判定は出来る
    result = (myhand - computerHand + 3) %3;
    // HTML側に勝敗を表示する
    console.log(resultarray[result]);
    // 表示したい場所のHTMLの要素を取得
    const janken_result =document.querySelector('#janken-result');
    console.log(janken_result);
    janken_result.textContent =resultarray[result];



}