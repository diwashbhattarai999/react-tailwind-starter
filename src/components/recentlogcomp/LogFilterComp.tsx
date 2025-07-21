import searchIcon from './assets/filter/SVG.png';
export default function LogFilterComp() {
  const selectArray = [
    {
      name: 'Role',
      title: 'All Roles',
      option: ['admin', 'user'],
    },
    {
      name: 'Level',
      title: 'All Levels',
      option: ['admin', 'user'],
    },
    {
      name: 'Page',
      title: 'All Pages',
      option: ['admin', 'user'],
    },
  ];

  return (
    <div className='flex items-center gap-4 py-7'>
      <div className='flex gap-4'>
        {selectArray.map((selectItem, index) => (
          <div key={index} className='flex gap-1'>
            <label htmlFor={selectItem.name}>{selectItem.name}:</label>
            <select defaultValue='' id={selectItem.name} name={selectItem.name}>
              <option disabled hidden value=''>
                {selectItem.title}
              </option>
              {selectItem.option.map((opt, optIndex) => (
                <option key={optIndex} value={opt}>
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <label className='mx-2' htmlFor=''>
            {' '}
            From:
          </label>
          <input className='border-foreground rounded-lg border px-4 py-2' type='date' />
        </div>
        <div className='flex items-center'>
          <label className='mx-2' htmlFor='to'>
            to:
          </label>
          <input className='border-foreground rounded-lg border px-4 py-2' type='date' />
        </div>
      </div>
      <div className='border-foreground flex items-center rounded-lg border px-4 py-2'>
        <img alt='' className='mr-3 h-4 w-4' src={searchIcon} />
        <input placeholder='Search logs...' type='text' />
      </div>
    </div>
  );
}
