import React from "react";
import PropTypes from "prop-types";

import { Badge } from "components/Badge";
import { TagList } from "components/TagList";
import * as S from "./JobItem.styles";

const JobItem = ({ job: { company, contract, isFeatured, isNew, location, logoPath, position, postedAt, tags } }) => {
  return (
    <S.JobItem>
      <S.Logo alt="" src={logoPath} />
      <S.Content>
        <S.Header>
          <S.Company>{company}</S.Company>
          {isNew && <Badge>New!</Badge>}
          {isFeatured && <Badge isDark>Featured</Badge>}
        </S.Header>
        <S.Position>{position}</S.Position>
        <S.DetailList>
          <S.DetailItem>{postedAt}</S.DetailItem>
          <S.DetailItem>{contract}</S.DetailItem>
          <S.DetailItem>{location}</S.DetailItem>
        </S.DetailList>
      </S.Content>
      <TagList tags={tags} />
    </S.JobItem>
  );
};

JobItem.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    isFeatured: PropTypes.bool.isRequired,
    isNew: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    logoPath: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export { JobItem };
