import { SheetService } from './sheet.service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

global.createNewFile = (): void => {
  (async () => {
    console.log(await hidouki('test1'));
    console.log(douki('test2'));
  })();

  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A3').setValue('hoge');
};

const hidouki = (hoge: string) => {
  return Promise.resolve(hoge);
};

const douki = (piyo: string) => {
  return piyo;
};
