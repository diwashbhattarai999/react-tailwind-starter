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
    actions: ['View, Journey', 'View, Journey', 'View, Journey', 'View, Journey', 'View, Journey'],
  };

  return (
    <div>
      <h2>Recent Logs</h2>
      <div>
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
