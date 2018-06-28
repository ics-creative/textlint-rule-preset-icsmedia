const fs = require("fs");
const prh = require("textlint-rule-prh");

const reporter = function (context) {
  // 辞書ベースのカタカタ表記のチェックを行う
  const ruleContent = fs.readFileSync(__dirname + "/../dict/prh.yml", "utf-8");
  return prh.fixer(context, {
      ruleContents: [ruleContent]
  });
};

module.exports = {
  linter: reporter,
  fixer: reporter,

  rules: {
    "preset-japanese": {
      "sentence-length": {
        max: 150
      }
    },
    "preset-jtf-style": {
      "1.2.1.句点(。)と読点(、)": false,
      "1.2.2.ピリオド(.)とカンマ(,)": true,
      "2.2.2.算用数字と漢数字の使い分け": true,
      "3.1.1.全角文字と半角文字の間": false,
      "4.1.3.ピリオド(.)、カンマ(,)": true,
      "4.3.2.大かっこ［］": true,
      "4.2.6.ハイフン(-)": true,
      "4.3.1.丸かっこ（）": true
    },
  }
};
