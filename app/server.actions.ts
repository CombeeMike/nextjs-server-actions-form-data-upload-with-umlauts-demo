'use server';

export const submitFormAction = async (values): Promise<string> => {
  const fileName = values.get('upload-files').name;
  console.log(`Received file name "${fileName}"`);
  return fileName;
};
