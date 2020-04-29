/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import ToDo from './todo';

function testGetAllFolders() {
  // eslint-disable-next-line no-undef
  const obj = new ToDo(UrlFetchApp, '');
  console.log(obj.getAllFolders());
}
