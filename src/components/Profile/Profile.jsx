import PropTypes from 'prop-types';
import {
  Avatar,
  ProfileDescription,
  ProfileTitle,
  ProfileWrapper,
  StatsInfo,
  StatsItem,
  StatsList,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, avatar, location, stats }) => {
  return (
    <ProfileWrapper>
      <div>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileTitle>{username}</ProfileTitle>
        <ProfileDescription>@{tag}</ProfileDescription>
        <ProfileDescription>{location}</ProfileDescription>
      </div>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatsInfo>{stats.followers}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsInfo>{stats.views}</StatsInfo>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsInfo>{stats.likes}</StatsInfo>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

// import {
//   ProfileWrapper,
//   Avatar,
//   ProfileTitle,
//   ProfileDescription,
//   StatsList,
//   StatsItem,
//   StatsInfo,
// } from './Profile.styled';

// export const Profile = ({ username, tag, avatar, location, stats }) => {
//   return (
//     <ProfileWrapper>
//       <div>
//         <Avatar src={avatar} alt="User avatar" />
//         <ProfileTitle>{username}</ProfileTitle>
//         <ProfileDescription>@{tag}</ProfileDescription>
//         <ProfileDescription>{location}</ProfileDescription>
//       </div>

//       <StatsList>
//         <StatsItem>
//           <span>Followers</span>
//           <StatsInfo>{stats.followers}</StatsInfo>
//         </StatsItem>
//         <StatsItem>
//           <span>Views</span>
//           <StatsInfo>{stats.views}</StatsInfo>
//         </StatsItem>
//         <StatsItem>
//           <span>Likes</span>
//           <StatsInfo>{stats.likes}</StatsInfo>
//         </StatsItem>
//       </StatsList>
//     </ProfileWrapper>
//   );
// };