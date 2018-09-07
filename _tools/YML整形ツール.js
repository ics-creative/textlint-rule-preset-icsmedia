const {comparePrhItem} = require('./utils/compare');

const fs = require('fs');
const YAML = require('yaml').default;


const yamlFiles = [
  '../dict/prh_corporation.yml',
  '../dict/prh_idiom.yml',
  '../dict/prh_open_close.yml',
  '../dict/prh_redundancy.yml',
  '../dict/prh_web_technology.yml',
];

yamlFiles.forEach(path => {

  var doc = YAML.parse(fs.readFileSync(path, 'utf8'));

  // ソート
  doc.rules.sort(comparePrhItem);

  // YAML化
  const yamlStr = YAML.stringify(doc);

  // 書き込み
  fs.writeFileSync(path, yamlStr);
});
