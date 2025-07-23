type UserActivity = {
  data: {
    name: string;
    role: string;
    activity_1: string;
    activity_2: string;
    timestamp: string;
    latency_ms: number;
    device?: string;
  };
};

const SlowRequest = ({ data }: UserActivity) => (
  <div className='flex items-center justify-between rounded-xl border-1 border-gray-300 p-3'>
    <div>
      <div className='flex items-center gap-3'>
        <p className='text-md font-bold'> {data.name}</p>
        <p className='rounded-2xl border-1 border-gray-300 px-2 font-semibold'>{data.role}</p>
      </div>
      <div className='flex items-center gap-2 text-sm text-gray-600'>
        <p>{data.activity_1} </p>
        <div className='h-[7px] w-[7px] rounded-2xl bg-gray-400'></div>
        <p>{data.activity_2}</p>
      </div>
      <p className='text-sm text-gray-600'>{data.timestamp}</p>
    </div>

    <div>
      <p className='text-lg font-semibold text-red-500'>{data.latency_ms}ms</p>
      <p className='text-gray-600'>{data.device}</p>
    </div>
  </div>
);

export default SlowRequest;
