import {
  GetProductDetailsError,
  GetProductDetailsResponse,
  GetProductDetailsResult,
} from '../../../../src/service';

export const mockResponse: GetProductDetailsResponse = {
  id: 123,
  title: 'Product 123',
  description: 'Description',
  category: 'Category',
  price: 100,
  discountPercentage: 10,
  rating: 4.5,
  stock: 10,
  tags: ['tag1', 'tag2'],
  brand: 'Brand',
  sku: 'SKU',
  weight: 1,
  dimensions: {
    width: 1,
    height: 1,
    depth: 1,
  },
  warrantyInformation: 'Warranty Information',
  shippingInformation: 'Shipping Information',
  availabilityStatus: 'Available',
  reviews: [
    {
      rating: 4.5,
      comment: 'Comment',
      date: '2021-01-01',
      reviewerName: 'Reviewer Name',
      reviewerEmail: '',
    },
  ],
  returnPolicy: 'Return Policy',
  minimumOrderQuantity: 1,
  meta: {
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    barcode: 'Barcode',
    qrCode: 'QR Code',
  },
  thumbnail: 'Thumbnail',
  images: ['Image1', 'Image2'],
};

export const mockResult: GetProductDetailsResult = [undefined, mockResponse];

export const mockErrorResult = (
  error: GetProductDetailsError,
): GetProductDetailsResult => [error, undefined];
