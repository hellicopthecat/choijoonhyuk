import {create} from "zustand";
interface IContactValue {
  name: string;
  email: string;
  title: string;
  description: string;
}
interface IContactStore {
  contactValue: IContactValue;
  setContactValue: (key: string, payload: string) => void;
}
export const useContactStore = create<IContactStore>((set) => ({
  contactValue: {name: "", email: "", title: "", description: ""},
  setContactValue: (key, payload) =>
    set((state) => ({contactValue: {...state.contactValue, [key]: payload}})),
}));
