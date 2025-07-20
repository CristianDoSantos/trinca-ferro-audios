export default function handler(req, res) {
  const audios = [
    "https://trinca-ferro-audios-snkz.vercel.app/canto1.mp3",
    "https://trinca-ferro-audios-snkz.vercel.app/canto2.mp3",
    "https://trinca-ferro-audios-snkz.vercel.app/canto3.mp3",
  ];

  const randomIndex = Math.floor(Math.random() * audios.length);
  const selectedAudio = audios[randomIndex];

  const response = {
    version: "1.0",
    response: {
      outputSpeech: {
        type: "SSML",
        ssml: `<speak>Ouça o trinca-ferro! <audio src="${selectedAudio}" /></speak>`,
      },
      shouldEndSession: true,
    },
  };

  res.status(200).json(response);
}