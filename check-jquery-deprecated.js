const fs = require('fs');
const path = require('path');

'\.unique\(|\.live\(|\.andSelf\(|\.load\(|\.toggle\(|\.parseJSON\(|(:eq\()|(:(even|odd|first|last)\b)|:(gt|lt)\('
'(\$|[a-zA-Z0-9_\$\(\)#]+)(\.browser|\.size\(|\.delegate\(|\.(bind|unbind)\(|\.isArray\(|\.error\(|\.(blur|change|click|focus|hover|keydown|mousedown|resize|scroll|select|submit)\(|\.(type|isNumeric)\(|\.trim\(|\.ajax(Start|Stop|Send|Complete|Error|Success)\()'
'\.unique\(|\.live\(|\.andSelf\(|\.load\(|\.toggle\(|\.parseJSON\(|(:eq\()|(:(even|odd|first|last)\b)|:(gt|lt)\(|(\$|[a-zA-Z0-9_\$\(\)#]+)(\.browser|\.size\(|\.delegate\(|\.(bind|unbind)\(|\.isArray\(|\.error\(|\.(blur|change|click|focus|hover|keydown|mousedown|resize|scroll|select|submit)\(|\.(type|isNumeric)\(|\.trim\(|\.ajax(Start|Stop|Send|Complete|Error|Success)\()'
const jqObjectPattern = /(\$|[a-zA-Z0-9_\$\(\)#]+(\.[a-zA-Z0-9_\$]+)*)/;

const patterns = [
    { regex: /\.unique\(/, desc: '.unique() 已棄用，請改用 uniqueSort' },
    { regex: /\.live\(/, desc: '.live() 已棄用，請改用 on' },
    { regex: /\.andSelf\(/, desc: '.andSelf() 已棄用，請改用 addBack' },
    { regex: /\.load\(/, desc: '.load() 已棄用，請改用 .on() 或 Ajax 方法' },
    { regex: /\.toggle\(/, desc: '請確認是否為事件式 toggle(已棄用)' },
    { regex: /\.parseJSON\(/, desc: '.parseJSON() 已棄用，請改用 JSON.parse' },
    { regex: /(:eq\()|(:(even|odd|first|last)\b)/, desc: ':選擇器 方法已棄用，請改用 .選擇器()' },
    { regex: /:(gt|lt)\(/, desc: ':選擇器 方法已棄用，請改用 .slice()' },
    { regex: new RegExp(jqObjectPattern.source + '\\.browser'), desc: '.browser 已棄用，請改用 navigator.userAgent' },
    { regex: new RegExp(jqObjectPattern.source + '\\.size\\('), desc: '.size() 已棄用，請改用 length' },
    { regex: new RegExp(jqObjectPattern.source + '\\.delegate\\('), desc: '.delegate() 已棄用，請改用 on' },
    { regex: new RegExp(jqObjectPattern.source + '\\.(bind|unbind)\\('), desc: '.bind()/.unbind() 已棄用，請改用 on/off' },
    { regex: new RegExp(jqObjectPattern.source + '\\.isArray\\('), desc: 'jQuery.isArray() 已棄用，請改用 Array.isArray()' },
    // { regex: new RegExp(jqObjectPattern.source + '\\.error\\('), desc: '.error() 事件寫法已棄用' },
    { regex: new RegExp(jqObjectPattern.source + '\\.(blur|change|click|focus|hover|keydown|mousedown|resize|scroll|select|submit)\\('), desc: '.事件名稱() 已棄用，請改用 .on("事件名稱", ...) / .trigger("事件名稱")' },
    { regex: new RegExp(jqObjectPattern.source + '\\.(type|isNumeric)\\('), desc: 'isNumeric/type 已棄用，請改用 typeof' },
    { regex: new RegExp(jqObjectPattern.source + '\\.trim\\('), desc: 'jQuery.trim() 已棄用，請改用 String.trim()' },
    { regex: new RegExp(jqObjectPattern.source + '\\.ajax(Start|Stop|Send|Complete|Error|Success)\\('), desc: '.ajax事件() 已棄用，請改用 .on("ajax事件", callback)' },
];

const excludeFiles = ['check-jquery-deprecated.js']; // 排除的檔案名稱
const excludeDirs = ['node_modules','framework','ckeditor5','test']; // 需要排除的資料夾
const searchResults = {};

let count = 0;
function searchFile(filePath, fileName) {
    const content = fs.readFileSync(filePath, 'utf8').split('\n');
    content.forEach((line, index) => {
        patterns.forEach(({ regex, desc }) => {
            const matches = line.match(new RegExp(regex.source, 'gi'));
            if (matches) {
                if (!searchResults[filePath]) {
                    searchResults[filePath] = [];  // 初始化為空陣列
                }
                searchResults[filePath].push({
                    lineNumber: `[發現] ${fileName}:${index + 1}`,
                    warning: `  ⚠ 提醒: ${desc} （此行共出現 ${matches.length} 次）`
                });
                count += matches.length;
                console.log(`[發現] ${filePath}:${index + 1}`);
                // console.log(`  ➡ ${line.trim()}`);
                console.log(`  ⚠ 提醒: ${desc}\n`);
            }
        });
    });
}

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!excludeDirs.includes(file)) { // 如果資料夾不在排除清單中
                walk(fullPath);  // 繼續遞迴搜尋
            }
        } else if (/\.(js|ts|html|cshtml)$/.test(file) && !excludeFiles.includes(file)) {
            searchFile(fullPath, file);
        }
    });
}

console.log('🚀 開始搜尋 jQuery 棄用用法...');
walk(process.cwd());
fs.writeFileSync('jQueryDeprecated.json', JSON.stringify(searchResults, null, 2));
console.log('✅ 搜尋完成', count);
