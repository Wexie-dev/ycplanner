import Card from '@/app/components/About/Card';
import Events from '@/app/components/About/Events';
import { AboutProps } from '@/types';

export const MobileDesign = ({
  title,
  description,
  image,
  subtitle,
  keyPoints,
  eventsTitle,
  events,
  closingText,
}: AboutProps) => (
  <>
    <h1 className="my-8 text-center font-butler text-[32px] font-normal">{title}</h1>
    <Card image={image} body={description} subtitle={subtitle} keyPoints={keyPoints}></Card>
    <Events title={eventsTitle} events={events}></Events>
    <div className="mb-16 mt-20 flex justify-center">
      <h2 className="text-center font-anguilla text-[40px] leading-none text-typographyPink">
        {closingText}
      </h2>
    </div>
  </>
);
