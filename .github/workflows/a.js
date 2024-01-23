const fs = require('fs');

const data = '这是要写入文件的内容。';

fs.writeFile('example.txt', data, (error) => {
  if (error) {
    console.error('写入文件时出错：', error);
  } else {
    console.log('文件写入成功！');
  }
});
