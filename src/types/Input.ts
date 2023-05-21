import { InputError } from './InputError';

export interface Input {
  type: string,
  id: string,
  name: string,
  placeholder: string,
  required: boolean,
  error?: InputError
}