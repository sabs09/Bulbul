import React, { useState } from 'react'
import { CgArrowLeftO } from "react-icons/cg";
import ReminderView from '../components/views/myPets/ReminderView';
import CreateReminder from '../components/views/myPets/CreateReminder';

const ReminderPage = () => {
  const [reminderPage, setReminderPage] = useState(false)

  return (
    <div>
      <header className='w-full flex justify-between items-center p-4'>
        <CgArrowLeftO className='text-4xl cursor-pointer text-primary' />
        <h1 className='text-3xl font-bold text-primary'>Pengingat</h1>
        <div></div>
      </header>
      <div className='w-full flex'>
        <div className={`w-1/2 text-center p-2 cursor-pointer ${reminderPage && 'border-b-2 border-primary text-primary'}`} onClick={() => setReminderPage(true)}>MyPets</div>
        <div className={`w-1/2 text-center p-2 cursor-pointer ${!reminderPage && 'border-b-2 border-primary text-primary'}`} onClick={() => setReminderPage(false)}>Create</div>
      </div>
      <div className='px-8'>
        {reminderPage ? <ReminderView /> : <CreateReminder />}
      </div>
    </div>
  )
}

export default ReminderPage