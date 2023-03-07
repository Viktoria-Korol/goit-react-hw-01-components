import PropTypes from "prop-types"

import {

  Avatar,
  FriendStyleItem,
  IsOnline,
  Name,

} from 'components/FriendList/FriendList.styled';


export const FriendList = ({ friends }) => {
    return friends.map(friend => {
        const { avatar, name, id, isOnline } = friend;

        return (

            <FriendStyleItem key={id}>
            <IsOnline isOnline={isOnline}></IsOnline>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
            </FriendStyleItem>
    
        )
    })

};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}

