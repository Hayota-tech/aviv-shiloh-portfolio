import React from 'react';
import { render } from '@testing-library/react';

import VModal from './VModal';

describe('<VModal>', () => {
	it('Should render the component unchanged', () => {
		const { container } = render(<VModal />);

		expect(container).toMatchSnapshot();
	});
});
