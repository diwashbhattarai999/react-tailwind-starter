interface StatusBadgeProps {
  status: 'completed' | 'active' | 'error';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let bgColor = '';
  let textColor = '';
  let label = '';

  switch (status) {
    case 'completed':
      bgColor = 'bg-status-bg-blue';
      textColor = 'text-blue-600';
      label = 'Completed';
      break;
    case 'active':
      bgColor = 'bg-status-bg-green';
      textColor = 'text-green-600';
      label = 'Active';
      break;
    case 'error':
      bgColor = 'bg-status-bg-red';
      textColor = 'text-red-600';
      label = 'Error';
      break;
    default:
      break;
  }

  return (
    <span className={`rounded-full px-4 py-1 text-xs font-medium ${bgColor} ${textColor}`}>
      {label}
    </span>
  );
};

export default StatusBadge;
