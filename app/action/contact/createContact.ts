'use server';
import {z} from 'zod';

const formSchema = z.object({
    firstname: z.string().min(1).max(8),
    lastname:z.string().min(3).max(8),
    email:z.string().email(),
    subject:z.string().min(1),
    message:z.string().min(1),
})


export const createContact = async (prevState: any,formData: FormData) => {
    // 'use server';
    // console.log(formData)

    const validatedFields = formSchema.safeParse({
        firstname: formData.get('firstname') as string,
        lastname: formData.get('lastname') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      });

       // Return early if the form data is invalid
  if (!validatedFields.success) {
    console.log("error", validatedFields.error.flatten().fieldErrors)
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  };

      console.log(validatedFields.data)

}