import { Button } from 'antd'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const TopBar = ({ storageConfig, title = 'PRE-TEST' }) => {
  const router = useRouter();
  return (
    <div className='w-full mb-4'>
      <div className='flex flex-row justify-end sm:justify-between items-center gap-4'>
        <div className="hidden sm:flex flex-wrap gap-4 items-center justify-start">
          <Image
            src="/logos/corpu-dark.svg"
            width={180}
            height={80}
            alt="Logo"
          />
          <p className='text-dark-primary text-xl font-semibold'>{title}</p>
        </div>
        <Button
          className='bg-alt-red text-white border-0 shadow-none'
          onClick={() => {
            const currentCode = storageConfig.getPretestCode()
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              if (key.startsWith(storageConfig.getStoragePrefix())) {
                keysToRemove.push(key);
              }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));

            router.replace(storageConfig.getExitUrl(currentCode));
          }}
        >
          Keluar Sesi
          <LogOut strokeWidth={2} size={16} />
        </Button>
      </div>
    </div>
  )
}

export default TopBar
