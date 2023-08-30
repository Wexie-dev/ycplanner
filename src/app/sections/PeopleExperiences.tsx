import { Testimony } from '@/types';
import useMediaQuery, { mediaQueries } from '@/hooks/useMediaQueries';
import React from 'react';
import PeopleExperiencesMobile from './PeopleExperiences/PeopleExperiencesMobile';
import PeopleExperiencesDesktop from './PeopleExperiences/PeopleExperiencesDesktop';

function PeopleExperiences(props: { testimonies: Testimony[] }) {
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const isIpad = useMediaQuery(mediaQueries.iPad);

  return (
    <section className="mb-5 h-auto w-full pt-24" id="testimonies">
      {isMobile || isIpad ? (
        <PeopleExperiencesMobile testimonies={props.testimonies} />
      ) : (
        <PeopleExperiencesDesktop testimonies={props.testimonies} />
      )}
    </section>
  );
}

export default React.memo(PeopleExperiences);
