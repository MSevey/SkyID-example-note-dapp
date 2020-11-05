import { SkynetClient, keyPairFromSeed } from "skynet-js";

// Create the Skynet client
const client = new SkynetClient();

// filename will be the data key for the SkyDB entry
const filename = "editnote";

// setNote uploads the note to SkyDB
window.setNote = function (seed) {
  const { privateKey } = keyPairFromSeed(seed);
  var note = document.getElementById("note").value;

  try {
    (async () => {
      // Upload to SkyDB
      await client.db.setJSON(privateKey, filename, { note });
      alert("Successfully Uploaded!");
    })();
  } catch (error) {
    alert(error);
  }
};

window.getNote = function (seed) {
  try {
    (async () => {
      const { publicKey } = keyPairFromSeed(seed);
      const entry = await client.db.getJSON(publicKey, filename);

      if (entry) {
        var note = document.getElementById("note");
        note.value = entry.data.note;
      }
    })();
  } catch (error) {
    alert(error);
  }
};
