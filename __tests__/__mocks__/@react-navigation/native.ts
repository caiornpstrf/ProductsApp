import { jest } from '@jest/globals';

export const navigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
};
export const useNavigation = () => navigation;
