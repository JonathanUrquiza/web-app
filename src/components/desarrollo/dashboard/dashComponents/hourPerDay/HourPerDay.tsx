'use client'
import { Card, LineChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Mar 22',
    HTML: 0,
    Javascript: 0,
    Python:0,
    Java:28,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Apr 22',
    HTML: 0,
    Javascript: 0,
    Python:0,
    Java:20,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'May 22',
    HTML: 0,
    Javascript: 0,
    Python:0,
    Java:22,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Jun 22',
    HTML: 0,
    Javascript: 0,
    Python:0,
    Java:15,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Jul 22',
    HTML: 80,
    Javascript: 80,
    Python:0,
    Java:20,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Aug 22',
    HTML: 80,
    Javascript: 80,
    Python:0,
    Java:20,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Sep 22',
    HTML: 80,
    Javascript: 80,
    Python:0,
    Java:20,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Oct 22',
      HTML: 120,
    Javascript: 120,
    Python:0,
    Java:20,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Nov 22',
      HTML: 120,
    Javascript: 100,
    Python:0,
    Java:10,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Dec 22',
      HTML: 120,
    Javascript: 120,
    Python:0,
    Java:0,
    Reactjs:0,
    Nextjs:0
  },
  {
    date: 'Jan 23',
    HTML: 60,
    Javascript: 60,
    Python:0,
    Java:0,
    Reactjs:40,
    Nextjs:0
  },
  {
    date: 'Feb 23',
    HTML: 60,
    Javascript: 60,
    Python:0,
    Java:0,
    Reactjs:40,
    Nextjs:0
  },
  {
    date: 'Mar 23',
    HTML: 80,
    Javascript: 20,
    Python:40,
    Java:0,
    Reactjs:60,
    Nextjs:0
  },
  {
    date: 'Apr 23',
    HTML: 40,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:60,
    Nextjs:0
  },
  {
    date: 'May 23',
    HTML: 60,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:80,
    Nextjs:0
  },
  {
    date: 'Jun 23',
    HTML: 60,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:100,
    Nextjs:40
  },
  {
    date: 'Jul 23',
    HTML: 80,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:80,
    Nextjs:20
  },
  {
    date: 'Aug 23',
    HTML: 80,
    Javascript: 80,
    Python:60,
    Java:0,
    Reactjs:80,
    Nextjs:40
  },
  {
    date: 'Sep 23',
    HTML: 80,
    Javascript: 80,
    Python:60,
    Java:0,
    Reactjs:100,
    Nextjs:40
  },
  {
    date: 'Oct 23',
      HTML: 120,
    Javascript: 120,
    Python:40,
    Java:0,
    Reactjs:80,
    Nextjs:60
  },
  {
    date: 'Nov 23',
      HTML: 120,
    Javascript: 100,
    Python:40,
    Java:0,
    Reactjs:80,
    Nextjs:100
  },
  {
    date: 'Dec 23',
      HTML: 120,
    Javascript: 120,
    Python:60,
    Java:0,
    Reactjs:60,
    Nextjs:20
  },
  {
    date: 'Jan 24',
    HTML: 20,
    Javascript: 40,
    Python:60,
    Java:0,
    Reactjs:80,
    Nextjs:80
  },
  {
    date: 'Feb 24',
    HTML: 20,
    Javascript: 60,
    Python:60,
    Java:0,
    Reactjs:80,
    Nextjs:40
  },
  {
    date: 'Mar 24',
    HTML: 20,
    Javascript: 40,
    Python:40,
    Java:0,
    Reactjs:60,
    Nextjs:20
  },
  {
    date: 'Apr 24',
    HTML: 40,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:60,
    Nextjs:20
  },
  {
    date: 'May 24',
    HTML: 20,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:80,
    Nextjs:20
  },
  {
    date: 'Jun 24',
    HTML: 60,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:100,
    Nextjs:40
  },
  {
    date: 'Jul 24',
    HTML: 40,
    Javascript: 80,
    Python:40,
    Java:0,
    Reactjs:80,
    Nextjs:20
  },
  {
    date: 'Aug 24',
    HTML: 40,
    Javascript: 80,
    Python:60,
    Java:0,
    Reactjs:80,
    Nextjs:40
  },
];

const valueFormatter = function (number:number) {
  return  new Intl.NumberFormat('us').format(number).toString();
};

export default function HourPerDay() {
  return (
    <>
      <Card>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Tiempo dedicado a la participación de proyectos</h3>
      <LineChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['HTML', 'Javascript', 'Python', 'Java', 'ReactJS', 'Nextjs']}
        colors={['red', 'yellow', 'green', 'orange', 'indigo', 'gray']}
        valueFormatter={valueFormatter}
        yAxisLabel="Horas de práctica"
          xAxisLabel="meses del año"
      />
      </Card>
      
    </>
  );
}