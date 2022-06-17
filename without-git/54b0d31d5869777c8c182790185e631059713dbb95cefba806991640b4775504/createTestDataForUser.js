import * as admin from "firebase-admin";
import axios from "axios";

admin.initializeApp();
const auth = admin.auth();

const FIREBASE_TOKEN = 'This can be found in the firebase console under Web API Key on the settings page'

exports.createTestDataForUser = functions.https.onRequest(async (req, res) => {
  const {uid} = req.body;
  try {
    await createNewUserMap(uid, db); // Function to seed data
    const token = await auth.createCustomToken(uid);
    const authResult: any = await axios.post(
        `http://localhost:9099/www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${FIREBASE_TOKEN}`,
        {
          token,
          returnSecureToken: true,
        }
    );
    res.status(201).json({
      token: authResult.data.idToken,
    });
  } catch (err: any) {
    res.json({
      error: err.message,
    });
  }
  return;
});
