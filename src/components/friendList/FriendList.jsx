import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={css.item}>
      <span
        className={clsx(css.status, {
          [css.isOnline]: isOnline,
        })}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({friends}) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => 
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      )}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
