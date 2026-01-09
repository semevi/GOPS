

export interface FlightInfo {
  flightNumber: string;
  city: string; // origin or destination
  sta: string; // Scheduled Time of Arrival
  std: string; // Scheduled Time of Departure
  eta?: string; // Estimated Time of Arrival
  etd?: string; // Estimated Time of Departure
  ata?: string; // Actual Time of Arrival
  atd?: string; // Actual Time of Departure
  slot?: string; // Departure slot time
}

export interface Turnaround {
  id: string;
  aircraftType: string;
  aircraftRegistration: string;
  stand: string;
  arrival: Partial<FlightInfo>;
  departure: Partial<FlightInfo>;
  requiredTeamSize: number;
  arrivalRemarks?: string;
  departureRemarks?: string;
}


export interface Break {
  start: string; // ISO Date string
  end: string;   // ISO Date string
}

export enum Skill {
  LEADER = 'Leader',
  HEADSET = 'Headset',
  DRIVER = 'Driver',
  LOADER = 'Loader',
}

export interface CrewMember {
  name: string;
  skill: Skill;
  startHour: number;
}

export interface Team {
  id: string;
  name:string;
  shiftStartHour: number; // 24-hour format
  shiftEndHour: number; // 24-hour format
  members: CrewMember[];
  breaks?: Break[];
}

// FIX: Add FlightStatus enum for use in StatusBadge and TimelineView components.
export enum FlightStatus {
  OnTime = 'On Time',
  Arrived = 'Arrived',
  Departed = 'Departed',
  Scheduled = 'Scheduled',
  Delayed = 'Delayed',
  Boarding = 'Boarding',
  GroundService = 'Ground Service',
}

// FIX: Add Flight interface for use in TimelineView component.
export interface Flight {
  id: string;
  flightNumber: string;
  isArrival: boolean;
  sta: string;
  std: string;
  ata?: string;
  atd?: string;
  status: FlightStatus;
  serviceDurationMinutes: number;
}

export type CustomShift = {
  start: string;
  end: string;
  type: string;
};

export interface PlannerShift {
  startHour: number;
  endHour: number;
  teamCount: number;
}

export type CustomRoster = Map<string, Map<string, CustomShift>>; // Map<memberName, Map<dateKey, Shift>>

// API Types
export interface AppCredentials {
  appId: string;
  appKey: string;
}

export interface FilterState {
  date?: string;
  direction?: string;
}

export type ApiResponse = any;