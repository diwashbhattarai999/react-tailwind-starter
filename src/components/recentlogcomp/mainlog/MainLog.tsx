import InnerMain from './InnerMain';

export default function MainLog() {
  const logData = {
    timestamp: [
      '16/07/2025, 21:04:24',
      '16/07/2025, 20:59:53',
      '16/07/2025, 20:58:26',
      '16/07/2025, 20:58:20',
      '16/07/2025, 20:55:38',
    ],
    level: ['info', 'warning', 'error', 'error', 'info'],
    user: [
      'John Smith (Patient)',
      'John Smith (Patient)',
      'John Smith (Patient)',
      'John Smith (Patient)',
      'John Smith (Patient)',
    ],
    action: ['Login', 'Video Call Joined', 'Login', 'Appointment Booked', 'Prescription Viewed'],
    page: ['Profile', 'Appointments', 'Prescriptions', 'Payment', 'Login'],
    device: ['Android 14', 'Android 14', 'Android 14', 'Android 14', 'Android 14'],
    latency: ['238ms', '1.6s', '2.3s', '2.5s', '377ms'],
    actions: ['View', 'View', 'View', 'View', 'View'],
  };

  return (
    <div className='border-ring mt-6 rounded-md border px-5 py-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-semibold py-5 text-[1.18rem]'>Recent Logs</h2>
        <h2 className='text-uj-subtext text-sm md:pr-18'>Auto Refresh:</h2>
      </div>
      <div className='w-full'>
        <InnerMain
          action={logData.action}
          actions={logData.actions}
          device={logData.device}
          latency={logData.latency}
          level={logData.level}
          page={logData.page}
          timestamp={logData.timestamp}
          user={logData.user}
        />
      </div>
    </div>
  );
}
