import changeImageSize from './changeImageSize';

function isImage(fileType) {
  const imageType = /image.*/;
  return !!fileType.match(imageType);
}

function getFileDetail(file) {
  const fileSize = file.size;

  const fileName = file.name;

  const fileType = file.type || fileName.substr(fileName.lastIndexOf('.') + 1);

  const isPic = isImage(fileType);

  return {
    fileName,
    fileSize,
    fileType,
    isPic,
  };
}

function createThumbnail({ file, quality, fileType, maxWidth, maxHeight }, callback) {
  const img = document.createElement('img');
  window.URL = window.URL || window.webkitURL;
  try {
    img.src = window.URL.createObjectURL(file);
  } catch (err) {
    return;
  }
  img.onload = () => {
    let imgUrl;

    if (quality || maxWidth || maxHeight) {
      imgUrl = changeImageSize(img, quality, fileType);
    } else {
      imgUrl = img.src;
    }

    callback(imgUrl);
  };
}

/**
 * handle single file and get file info
 *
 * @param file
 * @param quality
 * @param callback
 */
export default function handleFileInfo({ file, quality }, callback) {
  const {
    fileSize,
    fileType,
    isPic,
    fileName,
  } = getFileDetail(file);

  const fileDetail = {
    file,
    fileType,
    fileSize,
    fileName,
  };

  const callbackFunc = (url) => {
    fileDetail.thumbnail = url;
    callback(fileDetail);
  };

  if (isPic) {
    createThumbnail({
      file,
      quality,
      fileType,
    }, callbackFunc);
  } else {
    callback(fileDetail);
  }
}
