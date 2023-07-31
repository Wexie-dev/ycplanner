import { AboutProps } from '@/types';
import React from 'react';
import Events from '../components/About/Events';
import Card from '../components/About/Card';

export default function About({
  title,
  description,
  image,
  subtitle,
  keyPoints,
  eventsTitle,
  events,
}: AboutProps) {
  return (
    <section className="pt-8 px-4" id="about">
      <h1 className="text-center font-butler font-normal my-8 text-[32px]">{title}</h1>
      <Card image={image} body={description} subtitle={subtitle}  keyPoints={keyPoints}  ></Card>
      <Events title={eventsTitle} events={events}></Events>
    </section>
  );
}
