export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}
export const reverveformatPrice = (price: string): number => {
    return parseFloat(price.replace('₫', '').replace(/\./g, '').replace(',', '.'));
}