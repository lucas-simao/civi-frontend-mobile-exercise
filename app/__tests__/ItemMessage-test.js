/**
 * @format
 */

import 'react-native';
import React from 'react';
import ItemMessage from '../components/ItemMessage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const item = {
  id: 11,
  timestamp: 1641839671,
  subject: 'rutrum',
  detail:
    'Lorem ipsum dolor sit amet consectetur adipiscing,, elit, finibus,, phasellus sapien, felis duis lacus in. ornare. sed donec.. sagittis. vestibulum.. mattis.. hac vehicula cras.. vulputate.. orci.. pretium... maecenas.',
  show: false,
};

describe('ItemMessage component', () => {
  it('renders correctly', () => {
    renderer.create(<ItemMessage item={item} />);
  });
});
