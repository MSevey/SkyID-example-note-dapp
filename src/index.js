import { SkynetClient } from "skynet-js";

const client = new SkynetClient();

window.upload = function (avatar) {
  try {
    (async () => {
      const skylink = await client.uploadFile(avatar);
      // Display the Skylink to the User
      const directLink = "/" + skylink.replace("sia:", "");
      document.getElementById("skylink").href = directLink;
      document.getElementById("skylink").text = directLink;
    })();
  } catch (error) {
    alert(error);
  }
};
