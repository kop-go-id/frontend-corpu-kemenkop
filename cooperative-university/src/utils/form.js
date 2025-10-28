export const convertToFormData = (body) => {
  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (value instanceof File) {
      // File already has a name
      formData.append(key, value, value.name);
    } else if (value instanceof Blob) {
      // Give blob a default or dynamic filename
      const filename =
        key === 'applicant_form' ? 'applicant_form.pdf' : `${key}.bin`;
      formData.append(key, value, filename);
    } else if (typeof value === 'object' && value !== null) {
      formData.append(key, JSON.stringify(value));
    } else if (value !== undefined && value !== null) {
      formData.append(key, value);
    }
  });
  return formData;
};
