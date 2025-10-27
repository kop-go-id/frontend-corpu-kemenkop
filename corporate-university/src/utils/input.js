import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { message } from 'antd';

const convertToFormData = (body) => {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else if (typeof value === 'object') {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};

const convertDataToExcel = (data, fileName = 'data') => {
  const wsData = [
    [
      'No.',
      'Provinsi',
      'Kabupaten',
      'Kecamatan',
      'Jumlah Desa/Kelurahan',
      'Desa Tersosialisasi',
      '',
      'Koperasi Terdaftar',
      '',
      'Diproses oleh Notaris',
      '',
      'Koperasi Terbentuk',
      '',
    ],
    [
      '',
      '',
      '',
      '',
      '',
      'Jumlah',
      '% dari total',
      'Jumlah',
      '% dari total',
      'Jumlah',
      '% dari total',
      'Jumlah',
      '% dari total',
    ],
  ];

  data.forEach((item, index) => {
    wsData.push([
      index + 1,
      item.province,
      item.district,
      item.subdistrict,
      item.village_total,
      item.stage0.count,
      item.stage0.percentage,
      item.stage1.count,
      item.stage1.percentage,
      item.stage2.count,
      item.stage2.percentage,
      item.stage3.count,
      item.stage3.percentage,
    ]);
  });

  const ws = XLSX.utils.aoa_to_sheet(wsData);

  ws['!merges'] = [
    // Merge header vertical (row 1 & 2)
    { s: { r: 0, c: 0 }, e: { r: 1, c: 0 } }, // A1:A2 - No.
    { s: { r: 0, c: 1 }, e: { r: 1, c: 1 } }, // B1:B2 - Provinsi
    { s: { r: 0, c: 2 }, e: { r: 1, c: 2 } }, // C1:C2 - Kabupaten
    { s: { r: 0, c: 3 }, e: { r: 1, c: 3 } }, // D1:D2 - Kecamatan
    { s: { r: 0, c: 4 }, e: { r: 1, c: 4 } }, // E1:E2 - Jumlah Desa/Kelurahan

    // Merge label horizontal (row 1 only)
    { s: { r: 0, c: 5 }, e: { r: 0, c: 6 } }, // F1:G1 - Desa Tersosialisasi
    { s: { r: 0, c: 7 }, e: { r: 0, c: 8 } }, // H1:I1 - Koperasi Terdaftar
    { s: { r: 0, c: 9 }, e: { r: 0, c: 10 } }, // J1:K1 - Diproses oleh Notaris
    { s: { r: 0, c: 11 }, e: { r: 0, c: 12 } }, // L1:M1 - Koperasi Terbentuk
  ];

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Data');

  const buffer = XLSX.write(wb, {
    bookType: 'xlsx',
    type: 'array',
    cellStyles: true,
  });
  const blob = new Blob([buffer], { type: 'application/octet-stream' });

  saveAs(blob, `${fileName}.xlsx`);
};

const copyTableToClipboard = (
  containerSelector = 'table',
  title,
  columns = []
) => {
  const container = document.querySelector(containerSelector);
  if (!container) return message.error('Tabel tidak ditemukan');

  const rows = container.querySelectorAll('.ant-table-tbody tr');
  if (!rows.length) return message.error('Tabel tidak berisi data');

  const data = Array.from(rows).map((row) => {
    const cells = row.querySelectorAll('td');

    return Array.from(cells)
      .map((td, index) => {
        if (columns.includes(index)) {
          return td.innerText.trim();
        }
        return '';
      })
      .filter((text) => text !== '')
      .join(' - ');
  });

  const tsv = data.filter((text) => text !== '').join('; ');

  navigator.clipboard
    .writeText(tsv)
    .then(() => {
      message.success(`${title} berhasil disalin.`);
    })
    .catch(() => {
      message.error(`Gagal menyalin ${title}`);
    });
};

const joinWithAnd = (items) => {
  if (_.size(items) <= 2) return items.join(' dan ');
  return `${_.join(_.initial(items), ', ')}, dan ${_.last(items)}`;
};

export { convertToFormData, convertDataToExcel, copyTableToClipboard, joinWithAnd };
