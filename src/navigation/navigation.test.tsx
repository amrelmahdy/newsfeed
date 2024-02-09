import React from 'react';
import Navigation from './';

describe('Navigation component', () => {
    it('checks that Navigation renders successfully', () => {
        const wrapper = () => <Navigation />
        expect(wrapper).toBeDefined();
    });
});
