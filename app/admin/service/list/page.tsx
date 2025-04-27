import React from 'react'
import Services from '../_component/Services'
import { prisma } from '@/lib/utils';

type Props = {};

// revalidate every after 10 seconds
export const revalidate = 10;

const page = async ({}: Props) => {
  const services = await prisma.service.findMany();
  // console.log(services)
  return (
    <div>
      <Services services={services} />
    </div>
  )
}

export default page