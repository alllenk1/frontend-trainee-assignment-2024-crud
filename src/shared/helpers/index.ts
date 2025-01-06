export const dateFormat = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const parsedDate = new Date(date);

    return parsedDate.toLocaleDateString('ru-RU', options);
};
