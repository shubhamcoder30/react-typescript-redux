import { Iface } from "../Interfaces";

const initialState: Iface[] = [];
interface actionIface {
  type: string,
  payload: Iface
};

const storeData = (state = initialState, action: actionIface) => {
  switch (action.type) {
    case 'showinput':
      return [...state, action.payload];
    default:
      return state;
  }
};
export default storeData;

