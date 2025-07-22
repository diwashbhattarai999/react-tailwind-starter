const EndPoints = ({
  title,
  request,
  errors,
  ms,
}: {
  title: string;
  request: string;
  errors: number;
  ms: number;
}) => (
  <div className='flex items-center justify-between rounded-xl border-1 border-gray-300 p-3'>
    <div>
      <p className='text-md font-bold'>{title}</p>
      <div className='flex items-center gap-7'>
        <p className='text-gray-600'>{request}</p>
        <p className={`${errors ? 'bg-red-500 text-white' : 'font-bold'} rounded-xl p-2`}>
          {errors}% errors
        </p>
      </div>
    </div>
    <div>
      <p className='text-lg font-bold'>{ms}ms</p>
      <p className='text-gray-600'>avg latency</p>
    </div>
  </div>
);

export default EndPoints;
