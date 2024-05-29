import { uploadPhoto, createUser } from './utils';

export const asyncUploadUser = async () => {
   try {
      const photoResponse = await uploadPhoto();
      const userResponse = await createUser();

      return {
         photo: photoResponse,
         user: userResponse,
      };
   } catch (error) {
      console.error(error); // Log the error for debugging
      return {
         photo: null,
         user: null,
      };
   }
};
