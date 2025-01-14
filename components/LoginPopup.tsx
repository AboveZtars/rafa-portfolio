import {useState} from "react";
import {supabase} from "../lib/supabaseClient";
import {Button} from "./Button";

interface LoginPopupProps {
  onClose: () => void;
  onLogin: () => void;
}

export default function LoginPopup({onClose, onLogin}: LoginPopupProps) {
  const [loading, setLoading] = useState(false);

  const handleAnonymousLogin = async () => {
    try {
      setLoading(true);
      const {error} = await supabase.auth.signInAnonymously();

      if (error) throw error;
      onLogin();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-whitesand dark:bg-green-950 rounded-lg p-8 max-w-md w-full mx-4 shadow-xl transition-all duration-1000">
        <h2 className="text-2xl text-lime-700 dark:text-lime-300 mb-6 font-semibold text-center">
          Continue Chatting
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          To continue asking questions, please sign in anonymously.
        </p>
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleAnonymousLogin}
            disabled={loading}
            variant="primary"
            size="lg"
            className="w-full"
          >
            {loading ? "Signing in..." : "Sign in Anonymously"}
          </Button>
          <Button
            onClick={onClose}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
