import React from 'react'

type Props = {
    params: Promise<{id: string}>;
}

const page = async (props: Props) => {
    const {id} = await props.params;
  return (
    <div>{id} details</div>
  )
}

export default page