const docTypeHints = {
  MISNAP_HEAD_OUTSIDE: 'Place Face in Oval',
  MISNAP_HEAD_SKEWED: 'Look Straight Ahead',
  MISNAP_AXIS_ANGLE: 'Hold Phone Upright',
  MISNAP_HEAD_TOO_CLOSE: 'Move Farther Away',
  MISNAP_HEAD_TOO_FAR: 'Get Closer',
  MISNAP_STAY_STILL: 'Hold Still',
  MISNAP_SUCCESS: 'Success',
  MISNAP_STOP_SMILING: 'Stop Smiling',
  MISNAP_SMILE: 'Smile!',
  MISNAP_READY_POSE: 'Hold it There',
  NO_FACE_FOUND: 'No Face Detected',
  MITEK_ERROR_GLARE: 'Reduce Glare',
  MITEK_ERROR_FOUR_CORNER: 'Document Not Found',
  MITEK_ERROR_TOO_DARK: 'Image Too Dark',
  MITEK_ERROR_FOCUS: 'Image too Blurry',
  IMAGE_SMALLER_THAN_MIN_SIZE: 'Document too Small',
  CV_NO_BARCODE_FOUND: 'No Barcode Found',
  CORRUPT_IMAGE: 'Corrupt Image',
  MITEK_ERROR_SKEW_ANGLE: 'Document Skewed'
};

let timer;
let hintTimer;
let recentHint = null;

function setupCapture (docType, mode) {
  mitekScienceSDK.on('SDK_ERROR', err => {
    document.querySelector('#error').removeAttribute('hidden');

    stopCapture();
  });

  mitekScienceSDK.on('CAMERA_DISPLAY_STARTED', result => {
    if (docType === 'SELFIE') {
      mitekScienceSDK.cmd('SHOW_HINT', 'Please wait...');
    } else {
      mitekScienceSDK.cmd('SHOW_HINT', 'Fill Guide Window');

      setTimeout(() => {
        mitekScienceSDK.cmd('HIDE_HINT');
      }, 3000);
    }
  });

  mitekScienceSDK.on('FRAME_PROCESSING_STARTED', result => {
    timer = setTimeout(() => stopCapture(), 20000);

    hintTimer = setInterval(() => {
      if (recentHint !== null) {
        mitekScienceSDK.cmd('SHOW_HINT', docTypeHints[recentHint]);
      }
    }, 500);
  });

  mitekScienceSDK.on('FRAME_CAPTURE_RESULT', result => {
    console.log('result: ', result);
    const { response } = result;
    const img = document.querySelector('#captured');
    img.src = '';

    if (response.status === 'success') {
      img.src = response.imageData;
      img.alt = response.docType;
      img.removeAttribute('hidden');
      document.querySelector('#reset').removeAttribute('hidden');
      document.querySelector('#placeholder').classList.add('hidden');
      document.querySelector('#error').setAttribute('hidden', 'hidden');
    } else {
      img.setAttribute('hidden', 'hidden');
      document.querySelector('#error').removeAttribute('hidden');
      document.querySelector('#placeholder').classList.remove('hidden');
    }

    stopCapture();
  });

  mitekScienceSDK.cmd('CAPTURE_AND_PROCESS_FRAME', {
    documentType: docType,
    mode,
    mitekSDKPath: './mitekSDK/',
    options: {
      qualityPercent: 100
    }
  });

  mitekScienceSDK.on('FRAME_PROCESSING_FEEDBACK', ({key}) => {
    recentHint = key;

    if(docType === 'SELFIE') {
      if (key === 'MISNAP_SMILE' || key === 'MISNAP_STOP_SMILING' || key === 'MISNAP_READY_POSE') {
        document.querySelector('.integrator.SELFIE').classList.add('FACE_IN_GUIDE');
      } else {
        document.querySelector('.integrator.SELFIE').classList.remove('FACE_IN_GUIDE');
      }

      if (recentHint !== null) {
        mitekScienceSDK.cmd('SHOW_HINT', docTypeHints[recentHint]);
      }
    } else {
      if (recentHint !== null) {
        if (key === 'MITEK_ERROR_FOUR_CORNER'
          || key === 'MITEK_ERROR_GLARE'
          || key === 'MITEK_ERROR_TOO_DARK'
          || key === 'MITEK_ERROR_FOCUS'
        ) {
          mitekScienceSDK.cmd('SHOW_HINT', docTypeHints[recentHint]);
        } else {
          recentHint = null;
        }
      }
    }
  });

  window.scrollTo(0, 0);
}

function stopCapture () {
  mitekScienceSDK.cmd('SDK_STOP');
}

function reset () {
  document.querySelector('#captured').setAttribute('hidden', 'hidden');
  document.querySelector('#error').setAttribute('hidden', 'hidden');
  document.querySelector('#reset').setAttribute('hidden', 'hidden');
  document.querySelector('#placeholder').classList.remove('hidden');
}
