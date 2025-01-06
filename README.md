## TDD_WS
ジャンケンを題材に、TypeScriptを使ってテスト駆動開発（TDD）を実践してみましょう。

## WSの準備  
・npm install　を実施  
・vs codeの拡張機能vitestをインストール

## ジャンケンのルール
勝敗に関しては、次のようなルールが定められている。  
・ グーは、チョキに勝ち、パーに敗れる。  
・ パーは、グーに勝ち、チョキに敗れる。  
・ チョキは、パーに勝ち、グーに敗れる。   
・ 2人のときは、両者が同じ手を出したときには「あいこ（引き分け）」となる。  
 --Wikipedia

## TDDの進め方
両者(p1とp2)が出した手の組み合わせで勝敗が決まるようにTDDでコードを書いていきましょう

（１）GameFunction.test.tsに最初のテスト「p1がグー(Rock)、p2がチョキ(Scissors)のときp1が勝つ」を書いてみましょう。  

（２） GameFunction.tsに定義されているplay関数は、次のような機能を持つ関数です。  
　第一引数: プレイヤー1（p1）の手を指定  
　第二引数: プレイヤー2（p2）の手を指定  
　返り値: ジャンケンの結果を返す  

この関数を使って、2人のジャンケンの勝敗を判定します。（１）で書いたテストが通るようにplay関数を実装してみましょう。

（３）GameFunction.test.tsに最初のテスト「p1がチョキ(Scissors)、p2がグー(Rock)のときp2が勝つ」を書いてみましょう。

（４）記述したすべてのテストが通るようにplay関数を実装してみましょう。

（５）play関数のリファクタリングをしてみましょう。

（６）（１）〜（５）の流れのようにジャンケンの全ての組み合わせのテストとplay関数の実装をしましょう。
