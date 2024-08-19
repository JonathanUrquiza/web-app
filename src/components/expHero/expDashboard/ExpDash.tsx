'use client'
import React from 'react'
import { RiArrowRightUpLine } from '@remixicon/react';
import { Card, Divider } from '@tremor/react';



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const data = [
    {
      name: 'Propify Group Inmobiliaria',
      initial: 'PG',
      textColor: 'text-fuchsia-800 dark:text-fuchsia-500',
      bgColor: 'bg-fuchsia-100 dark:bg-fuchsia-500/20',
      email: 'a.stone@gmail.com',
      href: 'https://github.com/dgsoto/Idea5-inmobiliaria',
      details: [
        {
          type: 'Role',
          value: 'Frontend dev.',
        },
        {
          type: 'Last active',
          value: '18/08/2024',
        },
      ],
    },
    {
      name: 'MaxRetail',
      initial: 'MR',
      textColor: 'text-blue-800 dark:text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-500/20',
      email: 'e.bern@gmail.com',
      href: '#',
      details: [
        {
          type: 'Role',
          value: 'help desk | customer service',
        },
        {
          type: 'Last active',
          value: '31/07/2024',
        },
      ],
    },
    {
      name: 'Hipermania',
      initial: 'HM',
      textColor: 'text-pink-800 dark:text-pink-500',
      bgColor: 'bg-pink-100 dark:bg-pink-500/20',
      email: 'a.flow@acme.com',
      href: '#',
      details: [
        {
          type: 'Role',
          value: 'customer service | delivery',
        },
        {
          type: 'Last active',
          value: '31/05/2024',
        },
      ],
    },
    {
      name: 'technical support',
      initial: 'TS',
      textColor: 'text-emerald-800 dark:text-emerald-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-500/20',
      email: 't.palstein@acme.com',
      href: '#',
      details: [
        {
          type: 'Role',
          value: 'technical support',
        },
        {
          type: 'Last active',
          value: '20/04/2024',
        },
      ],
    },
    {
      name: 'Taller mecanico',
      initial: 'TM',
      textColor: 'text-orange-800 dark:text-orange-500',
      bgColor: 'bg-orange-100 dark:bg-orange-500/20',
      email: 's.johnson@gmail.com',
      href: '#',
      details: [
        {
          type: 'Role',
          value: 'Technicial',
        },
        {
          type: 'Last active',
          value: '10/01/2021',
        },
      ],
    },

  ];
export default function ExpDash() {
    return (
        <>
            <section className='row p-4'>
                <div className="flex items-center space-x-2">
                    <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        Experciencia Laboral
                    </h3>
                    <span className="inline-flex size-6 items-center justify-center rounded-tremor-full bg-tremor-background-subtle text-tremor-label font-medium text-tremor-content-strong dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-strong">
                        {data.length}
                    </span>
                </div>
                <Divider className="my-4" />
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((member) => (
                        <Card key={member.name} className="group p-4 card shadow-lg">
                            <div className="flex items-center space-x-4">
                                <span
                                    className={classNames(
                                        member.textColor,
                                        member.bgColor,
                                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-tremor-full text-tremor-default font-medium',
                                    )}
                                    aria-hidden={true}
                                >
                                    {member.initial}
                                </span>
                                <div className="truncate">
                                    <p className="truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                        <a href={member.href} className="focus:outline-none">
                                            {/* Extend link to entire card */}
                                            <span className="absolute inset-0" aria-hidden={true} />
                                            {member.name}
                                        </a>
                                    </p>
                                    <p className="truncate text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                        {member.email}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 divide-x divide-tremor-border border-t border-tremor-border dark:divide-dark-tremor-border dark:border-dark-tremor-border">
                                {member.details.map((item) => (
                                    <div key={item.type} className="truncate px-3 py-2">
                                        <p className="truncate text-tremor-label text-tremor-content dark:text-dark-tremor-content">
                                            {item.type}
                                        </p>
                                        <p className="truncate text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <span
                                className="pointer-events-none absolute right-4 top-4 text-tremor-content-subtle group-hover:text-tremor-content dark:text-dark-tremor-content-subtle group-hover:dark:text-dark-tremor-content"
                                aria-hidden={true}
                            >
                                <RiArrowRightUpLine className="size-4" aria-hidden={true} />
                            </span>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}
