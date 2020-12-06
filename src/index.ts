import { SheetService } from './sheet.service';

declare let global: any;

global.createNewFile = (): void => {
  // パターン１：非同期処理、同期処理の実行
  asyncTest();

  // パターン２：非同期処理、同期処理の実行
  (async () => {
    console.log(await hidouki('test1'));
    console.log(douki('test2'));
  })();

  // スプレッドシートの処理
  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A3').setValue('hoge');
};

/**
 * 注意：GASではsetTimeoutが動作しない
 * 待機させたいときは、同期処理のUtilities.sleepを使用すること
 */

// 非同期処理
const test = new Promise((resolve) => {
  const resolveValue = 'resolved1';
  setTimeout(() => {
    console.log(`promiseの${resolveValue}`);
  }, 1000);
  resolve(resolveValue);
});
test.then((result) => {
  console.log(`thenの${result}`);
});

// 同期処理
const promiseTest = (res: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('promiseTest');
      resolve(`promise ${res}`);
    }, 1000);
  });
};

// パターン１：非同期処理、同期処理
const asyncTest = async () => {
  try {
    const intentionalErr = 1;
    console.log('asyncTest1');
    console.log(await promiseTest(1));
    console.log('asyncTest2');
    console.log(await promiseTest(2));
  } catch (err) {
    console.log('err');
  }
};

// 非同期処理
const hidouki = (hoge: string) => {
  return Promise.resolve(hoge);
};

// 同期処理
const douki = (piyo: string) => {
  return piyo;
};
