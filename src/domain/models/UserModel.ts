export type UserModel = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  password: string;
  role: string;
  isCustomCapabilities: boolean;
  isActive: string;
  capabilities?: UserCapabilitiesModel[];
  created_at?: Date;
  updated_at?: Date;
};

export type UserCapabilitiesModel = {
  capability: string;
};
