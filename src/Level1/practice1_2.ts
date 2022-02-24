// 1-2. オブジェクトの型

/**
 * 1人のユーザーのデータを表すオブジェクトは、nameプロパティとageプロパティ、そしてprivateプロパティを持っています。
 * nameは文字列、ageは数値、privateは真偽値です。
 * ユーザーデータのオブジェクトの型Userを定義してください。
 *
 * @param {User} user
 */

// 回答
type User = {
  name: string;
  age: number;
  private: boolean;
};

function showUserInfo(user: User) {
  // 省略
}

// 使用例
showUserInfo({
  name: "John Smith",
  age: 16,
  private: false,
});

// エラー例

// エラー内容：プロパティ 'age' は型 '{ name: string; private: false; }' にありませんが、型 'User' では必須です。
// showUserInfo({
//   name: "Mary Sue",
//   private: false,
// });

// エラー内容：プロパティ 'private' は型 '{ name: string; age: number; }' にありませんが、型 'User' では必須です。
// const usr: User = {
//   name: "Gombe Nanashino",
//   age: 100,
// };
