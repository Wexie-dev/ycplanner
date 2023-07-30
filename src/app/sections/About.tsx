import { AboutProps } from '@/types';
import React from 'react';
import Events from '../components/About/Events';

export default function About({
  title,
  description,
  subTitle,
  keyPoints,
  eventsTitle,
  events,
}: AboutProps) {
  return (
    <section className="pt-20" id="about">
      <h1 className="my-8 text-3xl">{title}</h1>
      <Events title={eventsTitle} events={events}></Events>
    </section>
  );
}
