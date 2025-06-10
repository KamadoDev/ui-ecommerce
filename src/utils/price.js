// chuyển chuỗi thành số
export const parsePriceStringToNumber = (priceStr) =>
  typeof priceStr === 'string' ? Number(priceStr.replace(/[^\d]/g, '')) : 0;

// hàm tính giá gốc dựa vào phần trăm giảm
export const getOldPrice = (price, discount) =>
  Math.round(price / (1 - discount / 100));

// định dạng tiền tệ
export const formatCurrency = (number) =>
  new Intl.NumberFormat('vi-VN').format(number) + '₫';
