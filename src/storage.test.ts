import AsyncStorage from '@react-native-async-storage/async-storage';
import { save, get } from './storage';

// Mock AsyncStorage functions
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
}));

describe('Storage Functions', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  test('save function saves data to AsyncStorage', async () => {
    await save('testKey', 'testValue');
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('testValue'));
  });

  test('save function returns true on successful save', async () => {
    AsyncStorage.setItem.mockResolvedValueOnce(); // Mock AsyncStorage's setItem to resolve
    const result = await save('testKey', 'testValue');
    expect(result).toBe(true);
  });

  test('save function returns false on failed save', async () => {
    AsyncStorage.setItem.mockRejectedValueOnce(new Error('Failed to save')); // Mock AsyncStorage's setItem to reject
    const result = await save('testKey', 'testValue');
    expect(result).toBe(false);
  });

  test('get function retrieves data from AsyncStorage', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify('testValue')); // Mock AsyncStorage's getItem to resolve with a value
    const result = await get('testKey');
    expect(result).toBe('testValue');
  });

  test('get function returns null when no data is found', async () => {
    AsyncStorage.getItem.mockResolvedValueOnce(null); // Mock AsyncStorage's getItem to resolve with null
    const result = await get('nonExistentKey');
    expect(result).toBe(null);
  });

  test('get function returns null on error', async () => {
    AsyncStorage.getItem.mockRejectedValueOnce(new Error('Failed to get')); // Mock AsyncStorage's getItem to reject
    const result = await get('testKey');
    expect(result).toBe(null);
  });
});
