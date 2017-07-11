import React from 'react';
import renderer from 'react-test-renderer';
import BounceOut from './Out';

it('renders with default props', () => {
	const tree = renderer.create(
		<BounceOut />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
