// 1-1. 関数に型をつけよう

/**
 * 次の関数isPositiveは、数値を受け取ってそれが0以上ならtrue、0未満ならfalseを返す関数です。
 * この関数に正しく型アノテーションを付けてください。型アノテーションとは、引数や返り値の型をソースコード中に明示することです。
 *
 * @param {number} num 数値
 * @return {boolean} 数値が0以上ならtrue、0未満ならfalse
 */
function isPositive(num: number): boolean {
  return num >= 0;
}

// 使用例
console.log(isPositive(3));

// エラー例
// isPositive("123");
// const numVar: number = isPositive(-5);
