export const dateFormat = (date: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const parsedDate = new Date(date);

    return parsedDate.toLocaleDateString('ru-RU', options);
};

export const paginateArray = <T>(array: T[], currentPage: number, limit: number) => {
    const startIndex = (currentPage - 1) * limit;

    return array.slice(startIndex, startIndex + limit);
};
