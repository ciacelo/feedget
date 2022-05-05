import React from 'react'
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import WidgetForm from './WidgetForm'

export function Widget() {

  return (
    <Popover className='absolute bottom-5 right-5 flex flex-col items-end'> 
      
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      
      <Popover.Button 
        className='bg-brand-500 rounded-full min-w-0 p-4 text-white flex items-center group' 
      >
        <ChatTeardropDots className='w-8 h-8' color='white'/>
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  )
}
