import { useContext } from "react";

import { GlobalContext } from '../providers/Global';

export const useGlobalProvider = () => {
    return useContext(GlobalContext);
};