import CryptoJS from 'crypto-js';

export function decryptAES(encryptedBase64, primaryKey, secondaryKey) {
  try {
    if (typeof encryptedBase64 !== 'string') {
      return encryptedBase64;
    }

    const key = CryptoJS.SHA256(primaryKey);
    const iv = CryptoJS.enc.Utf8.parse(secondaryKey);

    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: CryptoJS.enc.Base64.parse(encryptedBase64) },
      key,
      { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );

    // hasil plaintext (UTF-8)
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (err) {
    return 'Dekripsi gagal: ' + err.message;
  }
}

export function decryptResponse(data) {
  const primaryKey = process.env.NEXT_PUBLIC_KDMP_SHA256_SECRETKEY;
  const secondaryKey = process.env.NEXT_PUBLIC_KDMP_SHA256_SECONDARYKEY;

  try {
    const decrypted = decryptAES(data, primaryKey, secondaryKey);
    return typeof decrypted === 'string' ? JSON.parse(decrypted) : decrypted;
  } catch (error) {
    return null;
  }
}
