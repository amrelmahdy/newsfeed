
import '@testing-library/jest-dom';
import '@testing-library/jest-native/extend-expect';

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
}));


jest.mock('@react-navigation/bottom-tabs', () => ({
    createBottomTabNavigator: jest.fn(),
}));

jest.mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator: jest.fn().mockReturnValue({
        Screen: () => null, // Mock the Screen component
        Navigator: () => null, // Mock the Navigator component
    }),
}));

jest.mock('react-native-vector-icons/MaterialIcons', () => {
    const React = require('react');
    const Icon = ({ name }: { name: string }) => React.createElement('Icon', { name });
    return Icon;
});

jest.mock('react-native-vector-icons/Ionicons', () => {
    const React = require('react');
    const Icon = ({ name }: { name: string }) => React.createElement('Icon', { name });
    return Icon;
});


jest.mock('react-native', () => {
    const RN = jest.requireActual('react-native');

    RN.NativeModules.EsimManager = {
        isEsimSupported: () => true,
    };

    return RN;
});