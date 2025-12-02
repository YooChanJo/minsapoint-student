/* Firebase functionalities should be split between web and mobile */
import { getApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";

/* firebase.json configured for multithreading(?) in android environments */
/* 
{
  "react-native": {
    "android_task_executor_maximum_pool_size": 4,
    "android_task_executor_keep_alive_seconds": 5
  }
}

add this when deploy
*/

const firebaseApp = getApp();
const firebaseAuth = getAuth();

export { firebaseApp, firebaseAuth };
