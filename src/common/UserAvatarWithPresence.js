/* @flow strict-local */

import React, { PureComponent } from 'react';

import { createStyleSheet } from '../styles';
import UserAvatar from './UserAvatar';
import PresenceStatusIndicator from './PresenceStatusIndicator';
import { AvatarURL } from '../utils/avatar';

const styles = createStyleSheet({
  status: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
});

type Props = $ReadOnly<{|
  avatarUrl: AvatarURL,
  email: string,
  size: number,
  onPress?: () => void,
|}>;

/**
 * Renders a user avatar with a PresenceStatusIndicator in the corner
 *
 * @prop [avatarUrl]
 * @prop [email] - Sender's / user's email address, for the presence dot.
 * @prop [size] - Sets width and height in logical pixels.
 * @prop [onPress] - Event fired on pressing the component.
 */
export default class UserAvatarWithPresence extends PureComponent<Props> {
  render() {
    const { avatarUrl, email, size, onPress } = this.props;

    return (
      <UserAvatar avatarUrl={avatarUrl} size={size} onPress={onPress}>
        <PresenceStatusIndicator style={styles.status} email={email} hideIfOffline />
      </UserAvatar>
    );
  }
}
