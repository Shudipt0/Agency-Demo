import { updateService } from '@/app/action/service/service';
import { prisma } from '@/lib/utils';
import React from 'react'

type Props = {
    params: Promise<{id: string}>;
}

const page = async(props: Props) => {
    const {id} = await props.params;

    const service = await prisma.service.findUnique({
      where: {id: Number(id)},
    });
  return (
    <div>
      <form action={updateService}>
        <input type="hidden" name='id' id='id' defaultValue={service?.id} readOnly={true} className='hidden' />
        <input type="text" name='name' id='name' defaultValue={service?.name}  />
        <br />
        <input type="text" name='description' id='description' defaultValue={service?.description} />
        <br />
        <button type='submit' >Update</button>
      </form>
    </div>
  )
}

export default page