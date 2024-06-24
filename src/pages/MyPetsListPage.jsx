import React, { useState } from 'react'
import CreateMyPets from '../components/views/myPets/CreateMyPets'
import AppLayout from '../components/layouts/AppLayout'
import ListMyPets from '../components/views/myPets/ListMyPets'

const MyPetsListPage = () => {
  const [MyPetsPage, setMyPetsPage] = useState(false)

  return (
    <AppLayout>
      <div className='w-full flex'>
        <div className={`w-1/2 text-center p-2 cursor-pointer ${MyPetsPage && 'border-b-2 border-primary'}`} onClick={() => setMyPetsPage(true)}>MyPets</div>
        <div className={`w-1/2 text-center p-2 cursor-pointer ${!MyPetsPage && 'border-b-2 border-primary'}`} onClick={() => setMyPetsPage(false)}>Create</div>
      </div>
      <div className='px-20'>
        {MyPetsPage ? <ListMyPets /> : <CreateMyPets />}
      </div>
    </AppLayout>
  )
}

export default MyPetsListPage