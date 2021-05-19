import { FileType } from './types'

const db = {
  favorites: [
    { id: '01', name: 'AirDrop' },
    { id: '02', name: 'Recents' },
    { id: '03', name: 'Applications' },
    { id: '04', name: 'Desktop' },
    { id: '05', name: 'Documents' },
    { id: '06', name: 'Downloads' },
    { id: '07', name: 'Pictures' },
    { id: '08', name: 'Portal' },
    { id: '09', name: 'Screenshots' },
    { id: '10', name: 'Repos' },
    { id: '11', name: 'Home' }
  ],
  files: [
    { id: '03', name: 'Applications', type: 'dir' },
    { id: '04', name: 'Desktop', type: 'dir' },
    { id: '05', name: 'Documents', type: 'dir' },
    { id: '06', name: 'Downloads', type: 'dir' },
    { id: '07', name: 'Pictures', type: 'dir' },
    { id: '08', name: 'Portal', type: 'dir' },
    { id: '09', name: 'Screenshots', type: 'dir' },
    { id: '10', name: 'Repos', type: 'dir' },
    { id: '11', name: 'Home', type: 'dir' },
    { id: '12', name: 'test', type: 'file' },
    { id: '13', name: 'another', type: 'file' },
    { id: '14', name: 'banana', type: 'file' },
    { id: '15', name: 'WWWWWWWWW WWWWWWWWWW', type: 'file' },
    { id: '16', name: 'This file name is almost too long', type: 'file' },
    { id: '17', name: 'CONTRIBUTING.md', type: 'file' },
    {
      id: '18',
      name: 'Long file name that is way too long.json',
      type: 'file'
    }
  ] as Array<FileType>
}

export default db
