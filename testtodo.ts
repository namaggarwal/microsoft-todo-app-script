/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import ToDo from './todo';

function testGetAllFolders() {
  // eslint-disable-next-line no-undef
  const obj = new ToDo(UrlFetchApp, '');
  console.log(obj.getAllFolders());
}

function testCreateTask() {
  // eslint-disable-next-line no-undef
  const obj = new ToDo(UrlFetchApp, '');
  console.log(obj.createTask('AQMkADAwATMwMAItMmE4My1iZjAwAC0wMAItMDAKAC4AAAOjSZ0xhCeGRYFc0mKMvH32AQBO44dJgt_pSLEduAi76GaeAAAAEwpTlQAAAA==', 'Testing task', new Date().toISOString()));
}
