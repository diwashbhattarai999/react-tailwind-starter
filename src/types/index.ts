export type AppointmentStatus = 'completed' | 'pending' | 'canceled';
export type PaymentStatus = 'paid' | 'pending' | 'refunded';
export type Gender = 'male' | 'female' | 'other';

export interface Appointment {
  id: string;
  appointmentId: string;
  patientFirstName: string;
  patientLastName: string;
  patientId: string;
  doctorFirstName: string;
  doctorMiddleName: string;
  doctorLastName: string;
  doctorId: string;
  patientProfilePictureUrl?: string;
  doctorProfilePictureUrl?: string;
  createdAt: string;
  duration: string;
  payment: {
    status: PaymentStatus;
    method: string;
    amount: string;
    transactionId: string;
  };
  appointmentDate: string;
  appointmentStartTime: string;
  appointmentEndTime: string;
  status: AppointmentStatus;
  createdBy: {
    role: string;
    name: string;
  };
  reason: string;
  serviceRequested: string;
  appointmentType: string;
}

export interface FilterOptions {
  status: AppointmentStatus | 'all';
  doctor?: string;
  patient?: string;
}

export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  dateOfBirth: string; // ISO date string
  gender: 'male' | 'female' | 'other';
  medicalRecordNumber: string;
  bloodGroup: string;
  phone: string;
  email: string;
  address: string;
  allergies: Array<{ id: string; name: string }>;
  chronicConditions: Array<{ id: string; name: string; diagnosedDate: string }>;
};

export type Doctor = {
  id: string;
  firstName: string;
  lastName: string;
  profilePictureUrl: string;
  specialty: string;
  degree: string;
  experience: string;
  biography: string;
  clinic: string;
  phone: string;
  email: string;
  address: string;
};
