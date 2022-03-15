// EventTarget#addEventListenerは、2つまたは3つの引数を受け取る関数で、返り値はありません。
// 1つ目の引数は文字列、2つ目の引数は関数です。そして3つ目の引数は省略可能であり、真偽値またはオブジェクトを渡すことができます。
// オブジェクトに存在可能なプロパティはcapture, once, passiveの3つで、全て真偽値であり、省略可能です。

// addEventListenerをdeclareを用いて宣言してください。
// 簡単のために、第2引数に指定する関数は引数無しで何も返さない関数としてください。

// 使用例
declare function addEventListener(
  type: string,
  listener: () => void,
  options?: {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
  }
): void;
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
  capture: true,
  once: false,
});

// エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//   capture: true,
//   once: false,
//   excess: true
// });

// 別解（解答記事より）
interface AddEventListenerOptionsObject {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
}
declare function addEventListener(
  type: string,
  handler: () => void,
  options?: boolean | AddEventListenerOptionsObject
): void;
