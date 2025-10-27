export function maskPhoneNumber(phoneNumber) {
  if (!phoneNumber) return '';

  // Hilangkan semua karakter non-digit
  const digits = phoneNumber.replace(/\D/g, '');

  // Contoh masking: 08123456789 -> 0812****789
  if (digits.length > 7) {
    return `${digits.substring(0, 4)}****${digits.substring(digits.length - 3)}`;
  }

  // Jika nomor terlalu pendek, kembalikan aslinya
  return phoneNumber;
}
