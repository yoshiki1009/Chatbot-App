import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import myProfile from '../assets/img/my-profile.jpg';

const Chat = (props) => {
  const isQuestion = props.type === 'question';
  const classes = isQuestion ? 'p-chat_row' : 'p-chat_reverse';

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={myProfile} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <div className="p-chat_bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
