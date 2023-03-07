import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding-top: 20px;
  margin-top: 20px;
  overflow: hidden;
  border-radius: 6px;
  background-color: #fcfcfc;
`;

export const Avatar = styled.img`
   width: 150px;
   height: 150px;
`;

export const ProfileDescription = styled.p`
  margin-top: 15px;
  color: #71819d;
  text-align: center;
`; 

export const ProfileTitle = styled.p`
  font-weight: bold;
   margin-top: 15px;
  font-size: 20px;
  color:  #25334b;
 
`;


export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
     color:  #25334b;

`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
padding: 15px 0;
margin-top: 10px;
  border-top: 2px solid rgb(217, 217, 217);
  width: 33%;
  &:not(:last-child) {
    border-right: 2px solid rgb(217, 217, 217);
  }
  span:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const StatsInfo = styled.span`
  font-weight: bold;
    color:  #d7606b;
`;

