import { create } from "zustand";
import { io } from "socket.io-client";

type Store = {
  data: [];
  isLoading: boolean;
  setDataManual: () => void;

  mode: "Manual" | "Auto";
  setMode: (value: "Manual" | "Auto") => void;
};

export const socket = io("http://localhost:5000", { autoConnect: false });

export const useDataStore = create<Store>()((set) => {
  const setDataAuto = () => {
    socket.on("dataUpdateEvent", (data) => {
      set({ data: data });
    });
    socket.connect();
  };
  return {
    data: [],
    isLoading: false,
    mode: "Manual",
    setMode: (value) => {
      set({ mode: value });
      if (value === "Auto") {
        setDataAuto();
      } else {
        socket.disconnect();
      }
    },
    setDataManual: async () => {
      set({ isLoading: true });
      try {
        const res = await fetch("http://localhost:5000/dashboard");
        const data = await res.json();
        set({ data: data });
      } catch (error) {
       
        set({ data: [] });
      } finally {
        set({ isLoading: false });
      }
    },
  };
});
