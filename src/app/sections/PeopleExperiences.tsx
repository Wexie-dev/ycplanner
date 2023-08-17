import { Testimony } from '@/types';
import React from 'react';

function PeopleExperiences(props: { testimonies: Testimony[] }) {
  const title = props.testimonies[0].title;
  console.log(title);

  return (
    <section className="h-full w-full pt-20" id="testimonies">
      <div className="flex flex-col">
        <div className="flex justify-center font-butler text-2xl font-normal">
          Experiencias Compartidas
        </div>
        <div className="mr-4 mt-4 flex justify-end">
          <p>Desliza</p>
        </div>
        {/* Imagen */}
        <div className="flex justify-center">
          <div className="mt-3 flex h-[200px] w-[200px] items-center justify-center border-2 border-typographyPink">
            Imagen
          </div>
        </div>
        {/* Card */}
        <div className="flex justify-center">
          <div className="mt-2 flex h-[200px] w-[200px] items-center justify-center border-2 border-typographyPink">
            Card
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleExperiences;
