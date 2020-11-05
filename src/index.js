import { SkynetClient } from "skynet-js";

// Create the Skynet client
const client = new SkynetClient();

// uploadNote uploads the note to skylink
window.uploadNote = function (note) {
  // Create the file object
  var file = new File([note], "note", { type: "text/plain" });

  // Upload to Skynet
  try {
    (async () => {
      // Upload the file
      const skylink = await client.uploadFile(file);

      // Display the Skylink to the User
      const directLink = "/" + skylink.replace("sia:", "");
      document.getElementById("mediaLink").href = directLink;
      document.getElementById("mediaLink").text = skylink;
    })();
  } catch (error) {
    alert(error);
  }
};
