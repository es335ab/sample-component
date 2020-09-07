export interface Message {
  id: number;
  text: string;
}

export const defaultMessage = (): Message => ({
  id: 0,
  text: ""
});
