import admin from "firebase-admin";

import * as serviceAccount from "../../dev-firebase-key.json";
const applicationName = "manage";

export function init() {
  try {
    return admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
    }, applicationName);
  } catch (error) {
    console.log(error);
    const firApp = admin.app(applicationName);
    return firApp;
  }
}

export async function closeConnection() {
  return await admin.app(applicationName).delete().then((result) => {
  console.log("App deleted successfully");
  return true;
})
.catch((error) => {
  console.log("Error deleting app:", error);
  return false;
});
}
