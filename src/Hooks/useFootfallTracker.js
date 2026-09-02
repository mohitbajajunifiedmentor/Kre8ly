import { useEffect } from "react";
import { useCreateTrackerMutation } from "../Redux-setup/api";
const useFootfallTracker = ({ page, referrer }) => {
  const [createTracker, { isLoading }] = useCreateTrackerMutation();

  // if (referrer) {
  //   if (referrer.includes("google")) source = "Google";
  //   else if (referrer.includes("facebook")) source = "Facebook";
  //   else if (referrer.includes("linkedin")) source = "LinkedIn";
  //   else source = referrer;
  // }

  useEffect(() => {
    const trackFootfall = async () => {
      // console.log(`Tracking footfall for page: ${page}`);

      try {
        await createTracker({
          page,
          referrer: referrer || "Direct",
        });
        // console.log(`Footfall tracked for page: ${page}`);
      } catch (error) {
        console.error("Footfall tracking failed:", error);
      }
    };

    trackFootfall();
  }, [page, referrer]);
};

export default useFootfallTracker;
