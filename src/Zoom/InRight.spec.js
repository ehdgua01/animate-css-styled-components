import React from 'react';
import renderer from 'react-test-renderer';
import ZoomInRight from './InRight';

it('renders with default props', () => {
	const tree = renderer.create(
		<ZoomInRight />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
