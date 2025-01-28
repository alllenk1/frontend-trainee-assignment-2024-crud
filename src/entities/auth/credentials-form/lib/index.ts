import { z } from 'zod';

const required_error = 'Обязательное поле';

export const formSchema = z.object({
    email: z.string().min(1, required_error).email('Неправильный формат электронной почты'),
    password: z
        .string()
        .min(8, required_error)
        .regex(/[a-zA-Z]/, 'В пароле должна быть хотя бы одна буква')
        .regex(/[0-9]/, 'В пароле должна быть хотя бы одна цифра'),
});

export type FormSchema = z.infer<typeof formSchema>;
