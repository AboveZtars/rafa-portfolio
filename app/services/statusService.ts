import {useState, useEffect} from "react";
import axios from "axios";

export const checkBackendStatus = async (): Promise<boolean> => {
  try {
    const response = await axios.get(
      "https://cv-llm-service.onrender.com/status",
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 5000, // 5 seconds timeout
      }
    );

    return response.status === 200;
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
      console.error("Backend status check timed out");
    } else {
      console.error("Error checking backend status:", error);
    }
    return false;
  }
};

export const useBackendStatus = (intervalMs: number = 30000): boolean => {
  const [isBackendAvailable, setIsBackendAvailable] = useState<boolean>(false);

  useEffect(() => {
    const checkStatus = async () => {
      const status = await checkBackendStatus();
      setIsBackendAvailable(status);
    };

    // Check immediately on mount
    checkStatus();

    // Set up periodic checking
    const interval = setInterval(checkStatus, intervalMs);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [intervalMs]);

  return isBackendAvailable;
};
