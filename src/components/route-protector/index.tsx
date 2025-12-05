import { CommonActions, useNavigationContainerRef } from "@react-navigation/native";
import NavigationAPI, { navigationRef } from "../../api/navigation";
import UserAPI, { BackendUserRole } from "../../api/user";
import { useAuth } from "../auth-provider";
import { FC, useState } from "react";
import { Alert } from "react-native";

/* Need distinction between wifi & server error etc --> add error handling */
/*
  Login screen for new users
  TODO: navigation.replace only replaces one element, and yeah when two or more errors occur, might want handling
*/

function waitForNavigationRefReady(timeout = 5000, interval = 50): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const check = () => {
      if (navigationRef.isReady()) {
        resolve();
      } else if (Date.now() - start > timeout) {
        reject(new Error("NavigationRef not ready within timeout"));
      } else {
        setTimeout(check, interval);
      }
    };

    check();
  });
}
function RouteProtector(Screen: FC, role: BackendUserRole) {
  function ProtectedScreen(props: any) {
    const { userLoggedIn, accessToken } = useAuth();

    const [loading, setLoading] = useState<boolean>(true);

    NavigationAPI.useCompatibleEffect(() => {
      async function init() {
        setLoading(true);
        try {
          await waitForNavigationRefReady();
        } catch (e) {
          e;
        }
        if (!userLoggedIn) {
          console.error("User not logged in thus cannot access this route");
          navigationRef.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Login" }],
            })
          );
        } else {
          try {
            const currentUserInfo = await UserAPI.getCurrentUserInfo(accessToken);
            if (currentUserInfo.role != "STUDENT") {
              await UserAPI.signUserOut();
              navigationRef.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "Login" }],
                })
              );
            }
          } catch (e) {
            console.error("Failed to get current user info: ", e);
            await UserAPI.signUserOut();
            navigationRef.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }],
              })
            );
          }
        }
        setLoading(false);
      }
      init();
    }, [userLoggedIn, accessToken]);
    return !loading && <Screen {...props} />;
  }
  return ProtectedScreen;
}

export { RouteProtector };
