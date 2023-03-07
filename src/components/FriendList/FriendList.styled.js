import styled from 'styled-components';

export const FriendStyleItem = styled.li`

  display: flex;
  align-items: center;
  padding: 9px 20px;
  border-radius: 15px;
  background-color: #fcfcfc;
  &:not(:last-child) {
  margin-bottom: 15px;
  }
`;

export const IsOnline = styled.span`
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  margin-right: 15px;
 
`;

export const Name = styled.p`
  font-size: 19px;
  font-weight: 600;
`;

