import React from 'react';
import renderer from 'react-test-renderer';
import ParentContainer from '../ParentContainer';
import { fireEvent, render } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('Parent Container component renders correctly', () => {

    it("Snapshot of parent container", () => {
        const { UNSAFE_getAllByType } = render(<ParentContainer />);
        const [text] = UNSAFE_getAllByType(Text);
        expect(text.props.children).toBe('Hello');
    })

    // expect(tree).toMatchSnapshot();
});