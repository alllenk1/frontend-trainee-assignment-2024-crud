import { z } from 'zod';

const required_error = 'Обязательное поле';

export const formSchema = z.object({
    name: z.string().min(1, required_error),
    description: z.string().optional(),
    imageUrl: z
        .string()
        .optional()
        .refine((value) => !value || /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i.test(value), {
            message: 'Проверьте ссылку',
        }),
    price: z.union([
        z
            .string()
            .min(1, required_error)
            .refine((value) => !isNaN(Number(value)), { message: 'Введите число' }),
        z.number().min(1, required_error),
    ]),
});

export type FormSchema = z.infer<typeof formSchema>;
