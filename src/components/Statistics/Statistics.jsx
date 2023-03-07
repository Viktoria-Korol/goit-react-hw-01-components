import PropTypes from 'prop-types';
import {
  SectionWrapper,
  SectionTitle,
  StatisticItem,
  StatisticList,
  StatisticInfo,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionWrapper>
      {<SectionTitle>{title}</SectionTitle>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <StatisticInfo>{label}</StatisticInfo>
            <StatisticInfo>{percentage}%</StatisticInfo>
          </StatisticItem>
        ))}
      </StatisticList>
    </SectionWrapper>
  );
};



Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};