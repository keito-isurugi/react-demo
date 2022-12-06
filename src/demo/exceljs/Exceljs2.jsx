import React from 'react'
const ExcelJS = require('exceljs');
import axios from 'axios'

import { Button } from "@chakra-ui/react";

export const Exceljs2 = () => {
  const  clickButtonAsync = async(e) => {
    e.preventDefault();
    // Workbookの作成
    // const res = await axios.get("./done_temp.xlsm", { responseType: "arraybuffer" });
    const res = await axios.get("./done_temp.xlsm", { responseType: "arraybuffer" });
    const data = new Uint8Array(res.data);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(data);

    const items = [
      {contact: "田中", comp_flg: 0, cust_name: "㈱hogeプランニング", cust_contact: 'hoge太郎', site_name: "Fooビル" , detail: "リフォーム", comp_time: "12:00", means_reporting: "", photo: "", display: "", image: "", app: "", memo: "備考です。備考です。備考です。"},
      {contact: "田中", comp_flg: 0, cust_name: "㈱hogeプランニング", cust_contact: 'hoge太郎', site_name: "Fooビル" , detail: "リフォーム", comp_time: "12:00", means_reporting: "", photo: "", display: "", image: "", app: "", memo: "備考です。備考です。備考です。"},
      {contact: "田中", comp_flg: 0, cust_name: "㈱hogeプランニング", cust_contact: 'hoge太郎', site_name: "Fooビル" , detail: "リフォーム", comp_time: "12:00", means_reporting: "", photo: "", display: "", image: "", app: "", memo: "備考です。備考です。備考です。"},
      {contact: "田中", comp_flg: 0, cust_name: "㈱hogeプランニング", cust_contact: 'hoge太郎', site_name: "Fooビル" , detail: "リフォーム", comp_time: "12:00", means_reporting: "", photo: "", display: "", image: "", app: "", memo: "備考です。備考です。備考です。"},
    ]

    // Workbookに新しいWorksheetを追加
    // workbook.addWorksheet('My Sheet');

    // ↑で追加したWorksheetを参照し変数に代入(テンプレートのシート名)
    const worksheet = workbook.getWorksheet('月');
    // 列を定義
    // worksheet.columns = [
    //   { header: 'ID', key: 'id' },
    //   { header: '名称', key: 'name' },
    //   { header: '価格', key: 'price' },
    // ];
    // 行を定義
    // worksheet.addRow({id: 1001, name: 'みかん', price: 170});
    // worksheet.addRow({id: 1002, name: 'バナナ', price: 200});
    // worksheet.addRow({id: 1003, name: 'りんご', price: 260});
    // worksheet.addRow({id: 1004, name: 'トマト', price: 190});
    const startRow = 4;
    let iCount = 0;
    let row = worksheet.getRow(1);
    for (const item of items) {
      let pos = startRow + iCount;
      row = worksheet.getRow(pos);
      console.log(item);
      row.getCell(1).value = item.contact;
      // row.getCell(2).value = item.comp_flg;
      row.getCell(3).value = item.cust_name;
      row.getCell(4).value = item.cust_contact;
      row.getCell(5).value = item.site_name;
      row.getCell(5).value += 'hogehoge';
      // row.getCell(6).value = item.detail;
      row.getCell(7).value = item.comp_time;
      // row.getCell(8).value = item.means_reporting;
      // row.getCell(9).value = item.photo;
      // row.getCell(10).value = item.display;
      // row.getCell(11).value = item.image;
      // row.getCell(12).value = item.app;
      row.getCell(13).value = item.memo;
      iCount += 1;
    }

    // UInt8Arrayを生成 & save
    const uint8Array = await workbook.xlsx.writeBuffer();

    // Blob
    const blob = new Blob([uint8Array], {type: 'application/octet-binary'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sample.xlsx`;
    a.click();
    // ダウンロード後は不要なのでaタグを除去
    a.remove()
  }

  return(
    <>
      <h1>Exceljs2(テンプレートを読み込み)</h1>
      <Button onClick={(e) => clickButtonAsync(e)}>ダウンロード</Button>
    </>
  )
}
