// ReactのuseState関数は、ステートを宣言するために使われます。
// 引数は1つで、宣言されるステートの初期値です。返り値は2つの要素を持つ配列で、最初の要素は現在のステートの値です。2つ目の要素は関数であり、呼び出すとステートを更新できます。
// ステート更新関数は引数に新しいステートの値を受け取ることができるほか、現在の値を受け取って新しい値を返す関数を渡すことができます。
// useStateの使い方は以下の使用例も参考にしてください。

// このようなuseStateをdeclareで宣言してください。
// ただし、useStateはステートの値の型を型引数として取るようにしてください。

// FIXME:
// declare function useState(type: number | null)

// 使用例
// number型のステートを宣言 (numStateはnumber型)
const [numState, setNumState] = useState(0);
// setNumStateは新しい値で呼び出せる
setNumState(3);
// setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
setNumState((state) => state + 10);

// 型引数を明示することも可能
const [anotherState, setAnotherState] = useState<number | null>(null);
setAnotherState(100);

// エラー例
// setNumState('foobar');
