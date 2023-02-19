const { google } = require("googleapis");

const CLIENT_ID =
    "675824101667-ns9oc1m6ld5vhh418cpv7n90lk2jv85v.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
    "1//04rjwk4URDHupCgYIARAAGAQSNwF-L9IrzgKrJpcdYz2QoF6OljpX7xZBDQUIPl993rVkJE1bs4LmpkF_Yj4Tb3uIKPEicEGjOqw";

const oauth2client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
    version: "v3",
    auth: oauth2client,
});

async function generatePublicUrl() {
    try {
        const fileID = "16vAxhwRzH-zkI1bmt_Sprh8hs1LLpvJE";
        await drive.permissions.create({
            fileId: fileID,
            requestBody: {
                role: "reader",
                type: "anyone",
            },
        });
        const result = await drive.files.get({
            fileId: fileID,
            fields: "webViewLink, webContentLink",
        });

        console.log(result.data);
    } catch (error) {
        console.log(error);
    }
}

export default generatePublicUrl;