export enum enumValidation {
  MAX_LENGTH_INPUT = 255,
  MIN_NUMBER = 0,
  MAX_NUMBER = 99999999,
  MAX_PASSWORD = 32,
  MIN_PHONE_NUMBER = 9,
  MAX_PHONE_NUMBER = 15,
  LENGTH_100 = 100,
  LENGTH_2 = 2,
  LENGTH_2000 = 2000,
  MAX_DESC = 2000,
  MIN_DESC = 2,
  NUMBER_ONE = 1,
  MIN_LENGTH_CKEDITOR = 9,
  MIN_NUMBER_PHONE = 100000000,
  MAX_NUMBER_PHONE = 999999999999999,
  MAX_50 = 50,
  MAX_15 = 15,
  MAX_FILE_SIZE = 10485760,
  MAX_DETAIL = 20000,
}

export enum enumAdminRole {
  SUPER = 'SUPER',
  ADMIN = 'ADMIN',
  CLINIC = 'CLINIC',
  NORMAL = 'NORMAL',
}
export enum enumPermissions {
  ADMIN = 'ADMIN',
  PROVIDER = 'PROVIDER',
}

export enum enumFilter {
  NAME = 'name',
  EMAIL = 'email',
  USER_ROLE = 'user_role',
  DATE = 'date_from_to',
  PROGERAM_NAME = 'programName',
  COUPON_FAMILY = 'couponFamily',
  SERVICE_NAME = 'serviceName',
  CLINIC_NAME = 'clinicName',
  PHONE_NUMBER = 'phoneNumber',
  DEFAULT = 'default',
  CLIENT_NAME = 'clientName',
  CLIENT_PHONE = 'phoneNumber',
  DOCTOR_NAME = 'doctorName',
  REFERREDBY = 'referredBy',
  SUBMITTED_BY = 'submitted_by',
}

export enum enumGender {
  MALE = 'Male',
  FEMALE = 'Female',
}

export enum enumStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  REDEEMED = 'REDEEMED',
  CANCEL = 'CANCEL',
  REJECT = 'REJECT',
  EXPIRED = 'EXPIRED',
}

export enum enumSubdomain {
  CLINIC = 'clinic-fh', // production
  ADMIN = 'admin-fh', //prod
  STG_ADMIN = 'stg-admin', //stg
  STG_CLINIC = 'stg-clinic', //stg
  LOCALHOST = 'localhost:3000',
}

export enum enumTime {
  MONTHLY = 'monthly',
  WEEKLY = 'weekly',
}
export enum enumServiceCategory {
  ULTRASOUND = 'Ultrasound',
  BLOOD_TEST = 'Blood test for antenatal screening',
}
export enum enumJoinedProgram {
  MNCH = 'MNCH',
  SRHR = 'SRHR',
}

export enum enumReferred {
  MYAN_CARE = 'MyanCare',
  VOLUNTEER = 'Volunteer',
  MMCW = 'MMCW',
  TELE_HEALTH = 'Tele Health',
  PACT = 'PACT',
  OTHERS = 'Others',
}

export enum enumProductFilter {
  PRODUCT_NAME = 'filterProductName',
  SKU = 'filterSKU',
  CATEGORY = 'filterCategory',
  CHEMICAL_NAME = 'filterChemicalName',
}
