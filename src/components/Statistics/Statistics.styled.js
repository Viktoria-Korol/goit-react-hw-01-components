import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 40px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 5px;
  background-color: #fcfcfc;
`;

export const StatisticInfo = styled.h2`
  padding: 20px 0;
  text-align: center;
 color:  #25334b;
   font-weight: 500;

`;

export const StatisticItem = styled.li`
   display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  font-weight: 500;

    border-top: 2px solid rgb(217, 217, 217);
  width: 33%;
  &:not(:last-child) {
    border-right: 2px solid rgb(217, 217, 217);
  }
`;

export const StatisticList = styled.ul`
 display: flex;
  justify-content: space-between;
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:  #d7606b;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 700;
`;
